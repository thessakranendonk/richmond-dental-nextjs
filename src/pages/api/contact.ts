import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import nodemailer from "nodemailer";
import { NextApiRequest, NextApiResponse } from "next";

pdfMake.vfs = pdfFonts.pdfMake.vfs;

const transporter = nodemailer.createTransport({
  service: "Hotmail",
  auth: {
    user: process.env.EMAIL_ADDRESS!,
    pass: process.env.EMAIL_PASSWORD!,
  },
});

interface FormData {
  name: string;
  email: string;
  message: string;
}

const generatePdf = async (formData: FormData) => {
  const docDefinition = {
    content: [
      { text: "Contact Form Submission", style: "header" },
      { text: `Name: ${formData.name}` },
      { text: `Email: ${formData.email}` },
      { text: `Message: ${formData.message}` },
    ],
    styles: {
      header: {
        fontSize: 18,
        bold: true,
        margin: [0, 0, 0, 10],
      },
    },
  };

  const pdfDocGenerator = pdfMake.createPdf(docDefinition);
  const pdfBase64 = await pdfDocGenerator.getBase64();

  return pdfBase64;
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { name, email, message } = req.body as FormData;

    const pdf = await generatePdf({ name, email, message });

    const mailOptions = {
      from: process.env.EMAIL_ADDRESS!,
      to: "felix.lai@hotmail.com",
      subject: "New Patient Form Submission",
      attachments: [
        {
          filename: "contact-form.pdf",
          content: pdf,
          encoding: "base64",
        },
      ],
    };
  }
};
