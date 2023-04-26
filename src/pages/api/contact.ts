import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { Margins } from "pdfmake/interfaces";
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
  firstName: string;
  lastName: string;
  preferredName: string;
  dateOfBirth: string;
  gender: string;
  maritalStatus: string;
  homePhone: string;
  mobilePhone: string;
  workPhone: string;
  ext: string;
  email: string;
  referral: string;
  address: string;
  city: string;
  province: string;
  postalCode: string;
  subscriber: string;
  subscriberName: string;
  insuranceCompany: string;
  insuranceTel: string;
  planNum: string;
  subscriberId: string;
  emerContact: string;
  emerRelationship: string;
  emerTel: string;
  famDocName: string;
  famDocAddress: string;
  famDocTel: string;
  medCheck: string;
  smoke: string;
  medConditions: string;
  otherMedConditons: string;
  allergies: string;
  otherAllergies: string;
  longTermMeds: string;
  dentalInjection: string;
  immuneSystem: string;
  hospital: string;
  illness: string;
  otherIllness: string;
  pregnant: string;
  visitReason: string;
  lastVisit: string;
  nervous: string;
  lastXray: string;
  dentalSpecialist: string;
  gumBleed: string;
  antibiotics: string;
  jawPain: string;
  terms: string;
  date: string;
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
        margin: [0, 0, 0, 10] as Margins,
      },
    },
  };

  const pdfDocGenerator = pdfMake.createPdf(docDefinition);
  const getPdfBase64 = (): Promise<string> => {
    return new Promise((resolve, reject) => {
      pdfDocGenerator.getBase64((result: string) => {
        resolve(result);
      });
    });
  };
  const pdfBase64 = await getPdfBase64();

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

    transporter.sendMail(mailOptions, (error: Error | null, info: any) => {
      if (error) {
        console.error(error);
        res.status(500).send(`An error occured while sending the email`);
      } else {
        console.log(`Email sent: ${info.response}`);
        res.status(200).send("Email sent successfully");
      }
    });
  } else {
    res.status(405).send(`Method not allowed`);
  }
};
