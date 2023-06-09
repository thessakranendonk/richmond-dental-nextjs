import { NextApiRequest, NextApiResponse } from "next";
import handlebars from "handlebars";
import path from "path";
import fs from "fs";
import PDFDocument from "pdfkit";
import { alterTextForForm } from "@/lib/functions";
import { pdfLogo } from "@/lib/pdfLogo";

require("dotenv").config();

const createPDF = (data: any) => {
  return new Promise<Buffer>((resolve, reject) => {
    const pdf = new PDFDocument();
    // PDF generation logic here using the 'pdf' object

    // Example: Adding text to the PDF
    pdf.text("Hello, World!");

    // Example: Saving the PDF to a buffer
    const buffers: Buffer[] = [];
    pdf.on("data", (buffer: Buffer) => buffers.push(buffer));
    pdf.on("end", () => resolve(Buffer.concat(buffers)));
    pdf.end();
  });
};

const createHTMLToSend = (path: string, replacements: any) => {
  const html = fs.readFileSync(path, {
    encoding: "utf-8",
  });
  const template = handlebars.compile(html);
  const htmlToSend = template(replacements);
  return htmlToSend;
};

export const config = {
  api: {
    responseLimit: false,
    bodyParser: {
      sizeLimit: "10mb",
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
    preferredName,
    dateOfBirth,
    gender,
    pronouns,
    maritalStatus,
    phoneNumber,
    homePhone,
    mobilePhone,
    workPhone,
    ext,
    referral,
    address,
    suite,
    city,
    province,
    postalCode,
    subscriber,
    subscriberName,
    insuranceCompany,
    insuranceTel,
    planNum,
    subscriberId,
    emerContact,
    emerRelationship,
    emerTel,
    famDocName,
    famDocAddress,
    famDocTel,
    medCheck,
    smoke,
    medConditions,
    otherMedConditions,
    allergies,
    otherAllergies,
    longTermMeds,
    dentalInjection,
    immuneSystem,
    hospital,
    illness,
    otherIllness,
    pregnant,
    visitReason,
    lastVisit,
    nervous,
    lastXray,
    dentalSpecialist,
    gumBleed,
    antibiotics,
    jawPain,
    date,
    frontInsuranceCardImage,
    backInsuranceCardImage,
  } = req.body;

  // Generate the PDF
  const pdfBuffer = await createPDF(req.body);

  // Set up SendGrid client
  const sgMail = require("@sendgrid/mail");
  sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_KEY);

  // Prepare email content
  const subject = req.headers.referer?.includes("dental-record")
    ? "Dental Record Request"
    : req.headers.referer?.includes("new-patient-form")
    ? "New Patient Sign Up Form"
    : "New Appointment Request";

  const name = `${firstName ? firstName : ""} ${lastName ? lastName : ""}`;
  const filename = `${firstName ? firstName : ""}-${lastName ? lastName : ""}`;

  // Prepare replacements for the email template
  const replacements = {
    subject: subject,
    name: name,
    email: email,
  };

  // Read the email template file and compile it with Handlebars
  const templatePath = "src/lib/mail-templates";
  const emailPath = path.resolve(templatePath, "emailTemplate.html");
  const htmlToSend = createHTMLToSend(emailPath, replacements);

  // Send the email with attachments
  try {
    const msg = {
      to: "thessakranendonk@gmail.com",
      from: "thessakranendonk@gmail.com",
      subject: `Contact form submission from ${firstName}`,
      html: htmlToSend,
      attachments: [
        {
          content: pdfBuffer.toString("base64"),
          filename: `${filename}.pdf`,
          type: "application/pdf",
          disposition: "attachment",
        },
        {
          filename: "frontInsuranceCardImage.png",
          content: fs.readFileSync(frontInsuranceCardImage, {
            encoding: "base64",
          }),
          type: "image/png",
          disposition: "attachment",
          contentId: "front-insurance-card-image",
        },
        {
          filename: "backInsuranceCardImage.png",
          content: fs.readFileSync(backInsuranceCardImage, {
            encoding: "base64",
          }),
          type: "image/png",
          disposition: "attachment",
          contentId: "back-insurance-card-image",
        },
      ],
    };

    const response = await sgMail.send(msg);

    res.status(200);
    res.end(JSON.stringify(response));
  } catch (err: any) {
    console.log(err);
    res.json(err);
    res.status(405).end();
  }
};
//   const nodemailer = require("nodemailer");
//   let transporter = nodemailer.createTransport({
//     host: "smtp.sendgrid.net",
//     port: 587,
//     auth: {
//       user: "apikey",
//       pass: process.env.NEXT_PUBLIC_SENDGRID_KEY,
//     },
//   });
//   const subject = req.headers.referer?.includes("dental-record")
//     ? "Dental Record Request"
//     : req.headers.referer?.includes("new-patient-form")
//     ? "New Patient Sign Up Form"
//     : "New Appointment Request";

//   const name = `${firstName ? firstName : req.body.data.firstName}${" "}${
//     lastName ? lastName : req.body.data.lastName
//   }`;
//   const filename = `${firstName ? firstName : req.body.data.firstName}-${
//     lastName ? lastName : req.body.data.lastName
//   }`;
//   const replacements = {
//     subject: subject,
//     name: name,
//     email: email,
//     firstName: firstName,
//     lastName: lastName,
//     preferredName: preferredName,
//     dateOfBirth: dateOfBirth,
//     gender: gender,
//     pronouns: pronouns,
//     maritalStatus: maritalStatus,
//     phoneNumber: phoneNumber,
//     homePhone: homePhone,
//     mobilePhone: mobilePhone,
//     workPhone: workPhone,
//     ext: ext,
//     referral: referral,
//     address: address,
//     suite: suite,
//     city: city,
//     province: province,
//     postalCode: postalCode,
//     subscriber: subscriber,
//     subscriberName: subscriberName,
//     insuranceCompany: insuranceCompany,
//     insuranceTel: insuranceTel,
//     planNum: planNum,
//     subscriberId: subscriberId,
//     emerContact: emerContact,
//     emerRelationship: emerRelationship,
//     emerTel: emerTel,
//     famDocName: famDocName,
//     famDocAddress: famDocAddress,
//     famDocTel: famDocTel,
//     medCheck: medCheck,
//     smoke: smoke,
//     medConditions: medConditions,
//     otherMedConditions: otherMedConditions,
//     allergies: allergies,
//     otherAllergies: otherAllergies,
//     longTermMeds: longTermMeds,
//     dentalInjection: dentalInjection,
//     immuneSystem: immuneSystem,
//     hospital: hospital,
//     illness: illness,
//     otherIllness: otherIllness,
//     pregnant: pregnant,
//     visitReason: visitReason,
//     lastVisit: lastVisit,
//     nervous: nervous,
//     lastXray: lastXray,
//     dentalSpecialist: dentalSpecialist,
//     gumBleed: gumBleed,
//     antibiotics: antibiotics,
//     jawPain: jawPain,
//     patientSig: patientSig,
//     parentSig: parentSig,
//     date: date,
//   };

//   const templatePath = "src/lib/mail-templates";

//   const emailPath = path.resolve(templatePath, "emailTemplate.html");
//   let htmlToSend = createHTMLToSend(emailPath, replacements);

//   try {
//     const response = await transporter.sendMail({
//       from: "thessakranendonk@gmail.com",
//       to: "thessakranendonk@gmail.com",
//       subject: `Contact form submission from ${firstName}`,
//       html: htmlToSend,
//     });

//     res.status(200);
//     res.end(JSON.stringify(response));
//   } catch (err: any) {
//     console.log(err);
//     res.json(err);
//     res.status(405).end();
// }

// };

export default contact;
