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

  const message = {
    from: "felix.lai@hotmail.com",
    to: "felix.lai@hotmail.com",
    subject: "Dental Records Form Submission",
    html: `<p>Current Date: ${currentDate}</p>
            <p>Dental Office/Dr: ${dentalOfficeDr}</p>
            <p>Patient's First Name: ${patientsFirstName}</p>
            <p>Patient's Last Name: ${patientsLastName}</p>
            <p>Patient's Date of Birth: ${patientsDateOfBirth}</p>
            <p>Release Statement: ${releaseStatement}</p>
            <p>Release Terms: ${releaseTerms}</p>`,
  };
}
