import nodemailer from "nodemailer";
import { NextApiRequest, NextApiResponse } from "next";

export default async function sendEmail(
  req: NextApiRequest,
  res: NextApiResponse
) {
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
    terms,
    date,
  } = req.body;

  const transporter = nodemailer.createTransport({
    host: `smtp.office365.com`,
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
    html: `
    <p>Patient's First Name: ${firstName}</p>
    <p>Patient's Last Name: ${lastName}</p>
    <p>Patient's Preferred Name: ${preferredName}</p>
    <p>Patient's Date of Birth: ${dateOfBirth}</p>
    <p>Gender: ${gender}</p>
    <p>Marital Status: ${maritalStatus}</p>
    <p>Home Phone: ${homePhone}</p>
    <p>Mobile Phone: ${mobilePhone}</p>
    <p>Work Phone: ${workPhone}</p>
    <p>Extension: ${ext}</p>
    <p>Email: ${email}</p>
    <p>Referral: ${referral}</p>
    <p>Address: ${address}</p>
    <p>Suite: ${suite}</p>
    <p>City: ${city}</p>
    <p>Province: ${province}</p>
    <p>Postal Code: ${postalCode}</p>
    <p>Subscriber: ${subscriber}</p>
    <p>Subscriber Name: ${subscriberName}</p>
    <p>Insurance Company: ${insuranceCompany}</p>
    <p>Insurance Tel: ${insuranceTel}</p>
    <p>Plan Number: ${planNum}</p>
    <p>Subscriber ID: ${subscriberId}</p>
    <p>Emergency Contact: ${emerContact}</p>
    <p>Emergency Contact Relationship: ${emerRelationship}</p>
    <p>Emergency Contact Tel: ${emerTel}</p>
    <p>Family Doctor's Name: ${famDocName}</p>
    <p>Family Doctor's Address: ${famDocAddress}</p>
    <p>Family Doctor's Tel: ${famDocTel}</p>
    <p>Medical Check-up: ${medCheck}</p>
    <p>Smoke: ${smoke}</p>
    <p>Medical Conditions: ${medConditions}</p>
    <p>Other Medical Conditions: ${otherMedConditions}</p>
    <p>Allergies: ${allergies}</p>
    <p>Other Allergies: ${otherAllergies}</p>
    <p>Long Term Medications: ${longTermMeds}</p>
    <p>Dental Injection: ${dentalInjection}</p>
    <p>Immune System: ${immuneSystem}</p>
    <p>Hospital: ${hospital}</p>
    <p>Illness: ${illness}</p>
    <p>Other Illness: ${otherIllness}</p>
    <p>Pregnant: ${pregnant}</p>
    <p>Visit Reason: ${visitReason}</p>
    <p>Last Visit: ${lastVisit}</p>
    <p>Nervous: ${nervous}</p>
    <p>Last X-ray: ${lastXray}</p>
    <p>Dental Specialist: ${dentalSpecialist}</p>
    <p>Gum Bleed: ${gumBleed}</p>
    <p>Antibiotics: ${antibiotics}</p>
    <p>Jaw Pain: ${jawPain}</p>
    <p>Terms: ${terms}</p>
    <p>Date: ${date}</p>,`,
  };

  try {
    const info = await transporter.sendMail(message);
    console.log("message sent: %s", info.messageId);
    res.status(200).json({ message: "Email sent successfully." });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "An error occurred while sending the email." });
  }
}
