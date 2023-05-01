import express from "express";
import bodyParser from "body-parser";
import nodemailer from "nodemailer";
import PDFDocument from "pdfkit";
import fs from "fs";

const app = express();

app.use(bodyParser.json());

app.get("/api/new-patient-form", (req, res) => {
  res.send("Hello from the server!");
});

app.post("/api/new-patient-form", (req, res) => {
  const formData = req.body;

  const doc = new PDFDocument();

  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Disposition", "attachment; filename=form.pdf");

  doc.pipe(res);

  doc.text(`First Name: ${req.body.firstName}`);
  doc.text(`Last Name: ${req.body.lastName}`);
  doc.text(`Preferred Name: ${req.body.preferredName}`);
  doc.text(`Date of Birth: ${req.body.dateOfBirth}`);
  doc.text(`Gender: ${req.body.gender}`);
  doc.text(`Marital Status: ${req.body.maritalStatus}`);
  doc.text(`Home Phone: ${req.body.homePhone}`);
  doc.text(`Mobile Phone: ${req.body.mobilePhone}`);
  doc.text(`Work Phone: ${req.body.workPhone}`);
  doc.text(`Ext: ${req.body.ext}`);
  doc.text(`Email: ${req.body.email}`);
  doc.text(`Referral: ${req.body.referral}`);
  doc.text(`Address: ${req.body.address}`);
  doc.text(`Suite: ${req.body.suite}`);
  doc.text(`City: ${req.body.city}`);
  doc.text(`Province: ${req.body.province}`);
  doc.text(`Postal Code: ${req.body.postalCode}`);
  doc.text(`Subscriber: ${req.body.subscriber}`);
  doc.text(`Subscriber Name: ${req.body.subscriberName}`);
  doc.text(`Insurance Company: ${req.body.insuranceCompany}`);
  doc.text(`Insurance Tel: ${req.body.insuranceTel}`);
  doc.text(`Plan Num: ${req.body.planNum}`);
  doc.text(`Subscriber ID: ${req.body.subscriberId}`);
  doc.text(`Emergency Contact: ${req.body.emerContact}`);
  doc.text(`Emergency Relationship: ${req.body.emerRelationship}`);
  doc.text(`Emergency Tel: ${req.body.emerTel}`);
  doc.text(`Family Doctor Name: ${req.body.famDocName}`);
  doc.text(`Family Doctor Address: ${req.body.famDocAddress}`);
  doc.text(`Family Doctor Tel: ${req.body.famDocTel}`);
  doc.text(`Medical Check: ${req.body.medCheck}`);
  doc.text(`Smoke: ${req.body.smoke}`);
  doc.text(`Medical Conditions: ${req.body.medConditions}`);
  doc.text(`Other Medical Conditions: ${req.body.otherMedConditions}`);
  doc.text(`Allergies: ${req.body.allergies}`);
  doc.text(`Other Allergies: ${req.body.otherAllergies}`);
  doc.text(`Long-Term Meds: ${req.body.longTermMeds}`);
  doc.text(`Dental Injection: ${req.body.dentalInjection}`);
  doc.text(`Immune System: ${req.body.immuneSystem}`);
  doc.text(`Hospital: ${req.body.hospital}`);
  doc.text(`Illness: ${req.body.illness}`);
  doc.text(`Other Illness: ${req.body.otherIllness}`);
  doc.text(`Pregnant: ${req.body.pregnant}`);
  doc.text(`Visit Reason: ${req.body.visitReason}`);
  doc.text(`Last Visit: ${req.body.lastVisit}`);
  doc.text(`Nervous: ${req.body.nervous}`);
  doc.text(`Last Xray: ${req.body.lastXray}`);
  doc.text(`Dental Specialist: ${req.body.dentalSpecialist}`);
  doc.text(`Gum Bleed: ${req.body.gumBleed}`);
  doc.text(`Antibiotics: ${req.body.antibiotics}`);
  doc.text(`Jaw Pain: ${req.body.jawPain}`);
  doc.text(`Terms: ${req.body.terms}`);
  doc.text(`Date: ${req.body.date}`);
});

const transporter = nodemailer.createTransport({
  host: "smtp.live.com",
  port: 587,
  secure: true,
  auth: {
    user: "felix.lai@hotmail.com",
    pass: "998157827Ruffles",
  },
});

const doc = new PDFDocument();
doc.pipe(fs.createWriteStream("output.pdf"));
doc.text("Form data goes here");
doc.end;

const mailOptions = {
  from: "felix.lai@hotmail.com",
  to: "felix.lai@hotmail.com",
  subject: "new patient form",
  text: "please see attached PDF",
  attachments: [
    {
      filename: "document.pdf",
      path: "/server.js",
    },
  ],
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("email send: " + info.response);
  }
});

app.listen(3001, () => {
  console.log("Server listening on port 3001");
});
