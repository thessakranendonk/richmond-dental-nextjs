import { NextApiRequest, NextApiResponse } from "next";
import createPdf from "../../lib/createPdf";
import handlebars from "handlebars";
import nodemailer from "nodemailer";
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
  const { name, email, message } = req.body;

  const emailPath = path.resolve(
    "/Users/thessakranendonk/Documents/projects/richmond-dental-nextjs/src/lib",
    "pdfTemplate.html"
  );

  const replacements = {
    name: name,
    email: email,
  };

  let htmlToSend = createHTMLToSend(emailPath, replacements);
  let pdfOutput = await createPdf();

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.CONTACT_FORM_RECEIVE_EMAIL,
      pass: process.env.CONTACT_FORM_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: "thessakranendonk@gmail.com",
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
