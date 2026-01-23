import nodemailer from "nodemailer";

console.log(process.env.MAIL_USER);
console.log(process.env.MAIL_PASS);
console.log(process.env.MAIL_TO);
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

export const sendConsultationMail = async (data) => {
  const {
    fullName,
    email,
    contact,
    destination,
    timeline,
    counsellingMode,
    studyLevel,
    course,
    funding,
  } = data;

  const mailOptions = {
    from: `"Globetrek Overseas" <${process.env.MAIL_USER}>`,
    to: process.env.MAIL_TO,
    subject: " New Free Consultation Request",
    html: `
      <h2>New Consultation Request</h2>
      <p><strong>Name:</strong> ${fullName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Contact:</strong> ${contact}</p>
      <p><strong>Destination:</strong> ${destination}</p>
      <p><strong>Timeline:</strong> ${timeline}</p>
      <p><strong>Counselling Mode:</strong> ${counsellingMode}</p>
      <p><strong>Study Level:</strong> ${studyLevel}</p>
      <p><strong>Course:</strong> ${course}</p>
      <p><strong>Funding:</strong> ${funding}</p>

      <hr/>
      <p>This lead was generated from the website consultation popup.</p>
    `,
  };

  await transporter.sendMail(mailOptions);
};
