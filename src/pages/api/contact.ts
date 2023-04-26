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
  otherMedConditions: string;
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
      { text: `Name: ${formData.firstName}` },
      { text: `Last Name: ${formData.lastName}` },
      { text: `Preferred Name: ${formData.preferredName}` },
      { text: `Date of Birth: ${formData.dateOfBirth}` },
      { text: `Gender: ${formData.gender}` },
      { text: `Marital Status: ${formData.maritalStatus}` },
      { text: `Home Phone: ${formData.homePhone}` },
      { text: `Mobile Phone: ${formData.mobilePhone}` },
      { text: `Work Phone: ${formData.workPhone}` },
      { text: `Extension: ${formData.ext}` },
      { text: `Email: ${formData.email}` },
      { text: `Referral: ${formData.referral}` },
      { text: `Address: ${formData.address}` },
      { text: `City: ${formData.city}` },
      { text: `Province: ${formData.province}` },
      { text: `Postal Code: ${formData.postalCode}` },
      { text: `Subscriber: ${formData.subscriber}` },
      { text: `Subscriber Name: ${formData.subscriberName}` },
      { text: `Insurance Company: ${formData.insuranceCompany}` },
      { text: `Insurance Phone: ${formData.insuranceTel}` },
      { text: `Plan Number: ${formData.planNum}` },
      { text: `Subscriber Id: ${formData.subscriberId}` },
      { text: `Emergency Contact: ${formData.emerContact}` },
      { text: `Emergency Relationship: ${formData.emerRelationship}` },
      { text: `Emergency Phone: ${formData.emerTel}` },
      { text: `Family Doctor Name: ${formData.famDocName}` },
      { text: `Family Doctor Address: ${formData.famDocAddress}` },
      { text: `Family Doctor Phone: ${formData.famDocTel}` },
      { text: `Medical Check: ${formData.medCheck}` },
      { text: `Medical Conditions: ${formData.medConditions}` },
      { text: `Other Medical Conditions: ${formData.otherMedConditions}` },
      { text: `Allergies: ${formData.allergies}` },
      { text: `Other Allergies: ${formData.otherAllergies}` },
      { text: `Long Term Medication: ${formData.longTermMeds}` },
      { text: `Dental Injections: ${formData.dentalInjection}` },
      { text: `Immune System: ${formData.immuneSystem}` },
      { text: `Hospital: ${formData.hospital}` },
      { text: `illness: ${formData.illness}` },
      { text: `Other Illnesses: ${formData.otherIllness}` },
      { text: `Pregnant: ${formData.pregnant}` },
      { text: `Reason of Visit: ${formData.visitReason}` },
      { text: `Last Visit: ${formData.lastVisit}` },
      { text: `Nervous: ${formData.nervous}` },
      { text: `Last Xray: ${formData.lastXray}` },
      { text: `Dental Specialist: ${formData.dentalSpecialist}` },
      { text: `Gum Bleed: ${formData.gumBleed}` },
      { text: `Antibiotics: ${formData.antibiotics}` },
      { text: `Jaw Pain: ${formData.jawPain}` },
      { text: `Terms: ${formData.terms}` },
      { text: `Date: ${formData.date}` },
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
    const {
      firstName,
      lastName,
      preferredName,
      dateOfBirth,
      gender,
      maritalStatus,
      homePhone,
      mobilePhone,
      workPhone,
      ext,
      email,
      referral,
      address,
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
      terms,
      date,
    } = req.body as FormData;

    const pdf = await generatePdf({
      firstName,
      lastName,
      preferredName,
      dateOfBirth,
      gender,
      maritalStatus,
      homePhone,
      mobilePhone,
      workPhone,
      ext,
      email,
      referral,
      address,
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
      terms,
      date,
    });

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
