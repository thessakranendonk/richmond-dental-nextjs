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
