import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import createPdf from "../../lib/createPdf";
import handlebars from "handlebars";
import path from "path";
import fs from "fs";

const createHTMLToSend = (path: any, replacements: any) => {
  let html = fs.readFileSync(path, {
    encoding: "utf-8",
  });
  let template = handlebars.compile(html);

  let htmlToSend = template(replacements);

  return htmlToSend;
};

const contact = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, firstName, lastName } = req.body;

  const subject = req.headers.referer?.includes("dental-record")
    ? "Dental Record Request"
    : req.headers.referer?.includes("new-patient-form")
    ? "New Patient Sign Up Form"
    : "New Appointment Request";

  const templatePath =
    "/Users/felixlai/richmond-dental-nextjs/src/lib/mail-templates/emailTemplate.html";
  const emailPath = path.resolve(templatePath, "emailTemplate.html");

  const name = `${firstName}${" "}${lastName}`;
  const replacements = {
    subject: subject,
    name: name,
    email: email,
  };

  let htmlToSend = createHTMLToSend(emailPath, replacements);
  let pdfOutput = await createPdf(JSON.stringify(req.body), subject);

  const transporter = nodemailer.createTransport({
    host: "smtp.office365.com",
    auth: {
      user: process.env.CONTACT_FORM_RECEIVE_EMAIL,
      pass: process.env.CONTACT_FORM_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      // to: "thessakranendonk@gmail.com",
      to: "felix.lai@hotmail.com",
      subject: `Contact form submission from ${name}`,
      // html: `<p>You have a contact form submission</p><br>
      //   <p><strong>Email: </strong> ${email}</p><br>
      //   <p><strong>Message: </strong> ${message}</p><br>
      // `,
      html: htmlToSend,
      attachments: [{ path: pdfOutput }],
    });
  } catch (error: any) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
  return res.status(200).json({ error: "" });
};

export default contact;
