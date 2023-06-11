import { NextApiRequest, NextApiResponse } from "next";
import handlebars from "handlebars";
import path from "path";
import fs from "fs";
import { Buffer } from "buffer";
import PDFDocument from "pdfkit";
import { alterTextForForm } from "@/lib/functions";
import { pdfLogo } from "@/lib/pdfLogo";

require("dotenv").config();

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

export const config = {
  api: {
    responseLimit: false,
    bodyParser: {
      sizeLimit: "30mb",
    },
  },
};

const contact = async (req: NextApiRequest, res: NextApiResponse) => {
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
  const tester = patientSig.replace(/data:image\/png;base64,/gm, "");

  const emailPath = path.resolve(templatePath, "emailTemplate.html");
  let htmlToSend = createHTMLToSend(emailPath, replacements);
  const pdf = await createPdf(req, res);
  if (pdf)
    try {
      const response = await transporter.sendMail({
        from: "thessakranendonk@gmail.com",
        to: "thessakranendonk@gmail.com",
        subject: `Contact form submission from ${firstName}`,
        html: htmlToSend,
        attachments: [
          {
            content: pdf,
            filename: `${filename}.pdf`,
            type: "application/pdf",
            disposition: "attachment",
          },
        ],
      });

      console.log("response");
      res.status(200);
      res.end(JSON.stringify(response));
    } catch (err: any) {
      console.log(err);
      res.json(err);
      res.status(405).end();
    }
};

const createPdf = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    parentSig,
    patientSig,
    frontInsuranceCardImage,
    backInsuranceCardImage,
  } = req.body;
  const subject = req.headers.referer?.includes("dental-record")
    ? "Dental Record Request"
    : req.headers.referer?.includes("new-patient-form")
    ? "New Patient Sign Up Form"
    : "New Appointment Request";
  console.log(patientSig);
  const buffers: any = [];
  pdf.on("data", buffers.push.bind(buffers));
  // let pdfData;
  // pdf.on("end", () => {
  //   pdfData = Buffer.concat(buffers);
  // });
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
  if (
    patientSig ||
    (req.body.data && req.body.data.patientSig !== undefined) ||
    (req.body && req.body.patientSig !== undefined)
  ) {
    pdf.addPage();
    if (req.headers.referer?.includes("dental-record")) {
      pdf.text("To whom this may concern,", 50, 50);
      pdf.text(
        "We at Richmond West Dental and the below patient, would like to thank you and your staff for the care you have provided.",
        50,
        70
      );
      pdf.text(
        "For us to maintain continued and quality care for the patient, we kindly ask if you could forward the most recent radiographs and dental records to our office at your earliest convenience.",
        50,
        120
      );
      pdf.text(
        "The signature below represents the patient's authorization and release of their records along with any legal responsibility or liability that may arise from this authorization.",
        50,
        180
      );
    }
    pdf.text("Patient Signature: ", 50, 270);
    pdf.image(
      patientSig
        ? patientSig
        : req.body.data.patientSig
        ? req.body.data.patientSig
        : req.body.patientSig,
      50,
      320,
      {
        width: 200,
        height: 100,
      }
    );
  }
  if (
    parentSig !== undefined ||
    (req.body.data && req.body.data.parentSig !== undefined) ||
    (req.body && req.body.parentSig !== undefined)
  ) {
    pdf.text("Parent Signature: ", 50, 520);
    pdf.image(
      parentSig
        ? parentSig
        : req.body.data.parentSig
        ? req.body.data.parentSig
        : req.body.parentSig,
      50,
      570,
      {
        width: 200,
        height: 100,
      }
    );
  }

  if (frontInsuranceCardImage || backInsuranceCardImage) pdf.addPage();
  if (frontInsuranceCardImage) {
    pdf.text("Front of Insurance Card", 50, 50);
    pdf.image(frontInsuranceCardImage, 50, 100, { width: 300 });
  }
  if (backInsuranceCardImage) {
    pdf.text("Back of Insurance Card", 50, 400);
    pdf.image(backInsuranceCardImage, 50, 450, { width: 300 });
  }

  pdf.end();
  return Buffer.concat(buffers);
};
export default contact;
