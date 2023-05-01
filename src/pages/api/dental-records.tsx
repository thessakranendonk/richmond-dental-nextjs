import nodemailer from "nodemailer";

export default async function sendEmail(req, res) {
  const {
    currentDate,
    dentalOfficeDr,
    patientsFirstName,
    patientsLastName,
    patientsDateOfBirth,
    releaseStatement,
    releaseTerms,
  } = req.body;

  const transporter = nodemailer.createTransport({
    host: `smtp.live.com`,
    port: 587,
    auth: {
      user: "felix.lai@hotmail.com",
      pass: "998157827Ruffles",
    },
  });
}
