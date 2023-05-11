import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
// import createPdf from "../../lib/createPdf";
import handlebars from "handlebars";
import path from "path";
import fs from "fs";
import { Buffer } from "buffer";
import PDFDocument from "pdfkit";

var pdf = new PDFDocument();

const createHTMLToSend = (path: any, replacements: any) => {
  let html = fs.readFileSync(path, {
    encoding: "utf-8",
  });
  let template = handlebars.compile(html);

  let htmlToSend = template(replacements);

  return htmlToSend;
};

const contact = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, firstName, lastName, parentSig, patientSig } = req.body;

  const subject = req.headers.referer?.includes("dental-record")
    ? "Dental Record Request"
    : req.headers.referer?.includes("new-patient-form")
    ? "New Patient Sign Up Form"
    : "New Appointment Request";

  const templatePath =
    // "/Users/felixlai/richmond-dental-nextjs/src/lib/mail-templates";
    "/Users/thessakranendonk/Documents/projects/richmond-dental-nextjs/src/lib/mail-templates";
  const emailPath = path.resolve(templatePath, "emailTemplate.html");

  const name = `${firstName}${" "}${lastName}`;
  const replacements = {
    subject: subject,
    name: name,
    email: email,
  };

  // const attachments: { filename: string; content: Buffer }[] = [];

  let htmlToSend = createHTMLToSend(emailPath, replacements);

  const buffers: any = [];

  pdf.on("data", buffers.push.bind());
  console.log(req.body);
  pdf.on("end", () => {
    console.log("end");
    let pdfData = Buffer.concat(buffers);

    const transporter = nodemailer.createTransport({
      // host: "smtp.office365.com",
      host: "smtp.gmail.com",
      auth: {
        user: process.env.CONTACT_FORM_RECEIVE_EMAIL,
        pass: process.env.CONTACT_FORM_PASS,
      },
    });

    try {
      transporter.sendMail({
        from: email,
        // to: "felix.lai@hotmail.com;thessakranendonk@gmail.com",
        to: "thessakranendonk@gmail.com",
        subject: `Contact form submission from ${name}`,
        html: htmlToSend,
        attachments: [
          {
            // path:
            // req.headers.referer?.includes("dental-record")
            //   ? pdfOutputDentalRecord
            //   : req.headers.referer?.includes("new-patient-form")
            //   ? pdfOutputNewPatient
            //   : pdfOutputNewAppointment,

            filename: "attachment.pdf",
            content: pdfData,

            // ],
          },
          // ...attachments,
        ],
      });
    } catch (error: any) {
      return res.status(500).json({ error: error.message || error.toString() });
    }
  });
  return res.status(200).json({ error: "" });
};

export default contact;
