import { NextApiRequest, NextApiResponse } from "next";
import handlebars from "handlebars";
import path from "path";
import fs from "fs";
import { Buffer } from "buffer";
import PDFDocument from "pdfkit";
import { alterTextForForm } from "@/lib/functions";
import { pdfLogo } from "@/lib/pdfLogo";
import { getStreamAsBuffer } from "get-stream";

require("dotenv").config();

const date = new Date().toDateString();

const createHTMLToSend = (path: any, replacements: any) => {
  let html = fs.readFileSync(path, {
    encoding: "utf-8",
  });
  let template = handlebars.compile(html);

  let htmlToSend = template(replacements);

  return htmlToSend;
};

export const config = {
  api: {
    responseLimit: false,
    bodyParser: {
      sizeLimit: "30mb",
    },
  },
};

async function contact(req: NextApiRequest, res: NextApiResponse) {
  const {
    email,
    firstName,
    lastName,
    parentSig,
    patientSig,
    frontInsuranceCardImage,
    backInsuranceCardImage,
  } = req.body;
  const nodemailer = require("nodemailer");
  let transporter = nodemailer.createTransport({
    host: "smtp.sendgrid.net",
    port: 587,
    auth: {
      user: "apikey",
      pass: process.env.NEXT_PUBLIC_SENDGRID_KEY,
    },
  });
  const subject = req.headers.referer?.includes("dental-record")
    ? "Dental Record Request"
    : req.headers.referer?.includes("new-patient-form")
    ? "New Patient Sign Up Form"
    : "New Appointment Request";

  const name = `${firstName ? firstName : req.body.data.firstName}${" "}${
    lastName ? lastName : req.body.data.lastName
  }`;
  const filename = `${firstName ? firstName : req.body.data.firstName}-${
    lastName ? lastName : req.body.data.lastName
  }`;
  const replacements = {
    subject: subject,
    name: name,
    email: email,
  };

  const templatePath = "src/lib/mail-templates";

  const emailPath = path.resolve(templatePath, "emailTemplate.html");
  let htmlToSend = createHTMLToSend(emailPath, replacements);

  const pdf = new Promise(async (resolve, reject) => {
    const pdfResult = await createPdf(req, res);

    if (pdfResult) {
      resolve(pdfResult);
    } else {
      reject("Promise is rejected");
    }
    return pdfResult;
  });

  if (Buffer.isBuffer(await pdf)) {
    pdf
      .then(async () => {
        const attachments: { filename: string; content: Buffer }[] = [];
        if ((req.body.data && req.body.data.patientSig) || patientSig) {
          const signature = patientSig;
          const patientSigBuffer = Buffer.from(
            signature.replace(/^data:image\/\w+;base64,/, ""),
            "base64"
          );
          attachments.push({
            filename: "patientSignature.png",
            content: patientSigBuffer,
          });
        }

        if ((req.body.data && req.body.data.parentSig) || parentSig) {
          const signature = parentSig ? parentSig : req.body.data.parentSig;
          const parentSigBuffer = Buffer.from(
            signature.replace(/^data:image\/\w+;base64,/, ""),
            "base64"
          );
          attachments.push({
            filename: "parentSignature.png",
            content: parentSigBuffer,
          });
        }

        if (frontInsuranceCardImage) {
          const frontInsuranceCardImageBuffer = Buffer.from(
            frontInsuranceCardImage.replace(/^data:image\/\w+;base64,/, ""),
            "base64"
          );
          attachments.push({
            filename: "frontInsuranceCard.png",
            content: frontInsuranceCardImageBuffer,
          });
        }

        if (backInsuranceCardImage) {
          const backInsuranceCardImageBuffer = Buffer.from(
            backInsuranceCardImage.replace(/^data:image\/\w+;base64,/, ""),
            "base64"
          );
          attachments.push({
            filename: "backInsuranceCard.png",
            content: backInsuranceCardImageBuffer,
          });
        }
        const response = await transporter.sendMail({
          from: "info@richmondwestdental.com",
          to: "info@richmondwestdental.com",
          subject: `Contact form submission from ${
            firstName ? firstName : req.body.data.firstName
          }`,
          html: htmlToSend,
          attachments: [
            {
              content: await pdf,
              filename: `${filename}.pdf`,
              type: "application/pdf",
              disposition: "attachment",
            },
            ...attachments,
          ],
        });
        res.status(200);
        res.end(JSON.stringify(response));
      })
      .catch((err: unknown) => {
        console.log(err);
        res.json(err);
        res.status(405).end();
      });
  }
}
async function createPdf(req: NextApiRequest, res: NextApiResponse) {
  const subject = req.headers.referer?.includes("dental-record")
    ? "Dental Record Request"
    : req.headers.referer?.includes("new-patient-form")
    ? "New Patient Sign Up Form"
    : "New Appointment Request";

  const doc = new PDFDocument();

  doc.fontSize(30);
  doc.text(subject, 50, 60);
  doc.fontSize(14);
  doc.text("Date:", 50, 90);
  doc.fontSize(14);
  doc.text(date, 100, 90);
  doc.list(alterTextForForm(JSON.stringify(req.body)), 50, 130, {
    align: "left",
    listType: "bullet",
    bulletRadius: 0.01,
  });

  if (req.headers.referer?.includes("dental-record")) {
    doc.addPage();
    doc.text("To whom this may concern,", 50, 50);
    doc.text(
      "We at Richmond West Dental and the below patient, would like to thank you and your staff for the care you have provided.",
      50,
      70
    );
    doc.text(
      "For us to maintain continued and quality care for the patient, we kindly ask if you could forward the most recent radiographs and dental records to our office at your earliest convenience.",
      50,
      120
    );
    doc.text(
      "The signature below represents the patient's authorization and release of their records along with any legal responsibility or liability that may arise from this authorization.",
      50,
      180
    );
  }
  if (req.headers.referer?.includes("new-patient-form")) {
    doc.addPage();
    doc.text(
      "I, understand, certify that to the best of my knowledge, the above information is correct. I understand that any information that I refuse to provide may affect my health and dental treatment.",
      50,
      50
    );
    doc.text("Patient Signature:", 50, 250);
  }
  if (req.body.patientSig) {
    doc.image(req.body.patientSig, 50, 300, {
      align: "center",
      height: 100,
    });
  }

  if (req.body.parentSig) {
    doc.text("Parent Signature:", 50, 500);
    doc.image(req.body.parentSig, 50, 600, {
      align: "center",
      height: 100,
    });
  }
  doc.end();
  return await getStreamAsBuffer(doc);
}
export default contact;
