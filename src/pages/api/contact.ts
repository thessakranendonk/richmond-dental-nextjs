import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import handlebars from "handlebars";
import path from "path";
import fs from "fs";
import { Buffer } from "buffer";
import PDFDocument from "pdfkit";
import { alterTextForForm } from "@/lib/functions";
import { pdfLogo } from "@/lib/pdfLogo";

var pdf = new PDFDocument();
const date = new Date().toDateString();

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
  const filename = `${firstName}-${lastName}`;
  const replacements = {
    subject: subject,
    name: name,
    email: email,
  };

  let htmlToSend = createHTMLToSend(emailPath, replacements);

  const buffers: any = [];

  pdf.on("data", buffers.push.bind(buffers));
  pdf.on("end", () => {
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
            filename: `${filename}.pdf`,
            content: pdfData,
          },
        ],
      });
    } catch (error: any) {
      return res.status(500).json({ error: error.message || error.toString() });
    }
  });

  pdf.image(pdfLogo, 50, 10, { width: 200, height: 100 });

  pdf.fontSize(30);
  pdf.text(subject, 50, 130);
  pdf.fontSize(14);
  pdf.text("Date:", 50, 170);
  pdf.fontSize(14);
  pdf.text(date, 100, 170);

  pdf.list(alterTextForForm(JSON.stringify(req.body)), 50, 200, {
    align: "left",
    listType: "bullet",
    bulletRadius: 0.01,
  });

  if (patientSig) pdf.text("Patient Signature: ", 50, 470);
  if (patientSig) pdf.image(patientSig, 50, 500, { width: 200, height: 100 });
  if (parentSig) pdf.text("Parent Signature: ", 50, 600);
  if (parentSig) pdf.image(parentSig, 50, 620, { width: 200, height: 100 });

  pdf.end();
  return res.status(200).json({ error: "" });
};
export default contact;
