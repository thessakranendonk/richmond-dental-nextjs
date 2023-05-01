import express from "express";
import bodyParser from "body-parser";
import nodemailer from "nodemailer";
import PDFDocument from "pdfkit";

const app = express();

app.use(bodyParser.json());

app.get("/api/hello", (req, res) => {
  res.send("Hello from the server!");
});

const transport = nodemailer.createTransport({
  host: smtp.live.com,
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

app.listen(3001, () => {
  console.log("Server listening on port 3001");
});
