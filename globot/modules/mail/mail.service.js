import nodemailer from "nodemailer";

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
  const row = (label, value) => `
  <tr>
    <td style="padding:10px 12px;border-bottom:1px solid #EEF1F1;color:#4E6767;width:35%;">
      <strong>${label}</strong>
    </td>
    <td style="padding:10px 12px;border-bottom:1px solid #EEF1F1;color:#1D4360;">
      ${value || "—"}
    </td>
  </tr>
`;

  const mailOptions = {
    from: `"Globetrek Overseas" <${process.env.MAIL_USER}>`,
    to: process.env.MAIL_TO,
    subject: " New Free Consultation Request",
    html: `
  <div style="margin:0;padding:0;background-color:#EEF1F1;font-family:Arial,Helvetica,sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0" style="padding:30px 0;">
      <tr>
        <td align="center">
          <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 8px 24px rgba(0,0,0,0.08);">

            <!-- Header -->
            <tr>
              <td style="background:#1D4360;padding:24px 32px;color:#EEF1F1;">
                <h1 style="margin:0;font-size:22px;">New Free Consultation Request</h1>
                <p style="margin:6px 0 0;font-size:14px;color:#809292;">
                  Globetrek Overseas Website
                </p>
              </td>
            </tr>

            <!-- Body -->
            <tr>
              <td style="padding:28px 32px;color:#1D4360;">
                <p style="margin:0 0 18px;font-size:15px;">
                  You’ve received a new consultation enquiry. Details are below:
                </p>

                <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;font-size:14px;">
                  ${row("Name", fullName)}
                  ${row("Email", email)}
                  ${row("Contact", contact)}
                  ${row("Preferred Destination", destination)}
                  ${row("Timeline", timeline)}
                  ${row("Counselling Mode", counsellingMode)}
                  ${row("Study Level", studyLevel)}
                  ${row("Course", course)}
                  ${row("Funding", funding)}
                </table>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="background:#EEF1F1;padding:20px 32px;border-top:1px solid #809292;">
                <p style="margin:0;font-size:12px;color:#4E6767;">
                  This lead was generated from the <strong>Globetrek Overseas</strong> website.
                </p>
                <p style="margin:6px 0 0;font-size:12px;color:#809292;">
                  Please respond within business hours for best conversion.
                </p>
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
  </div>
`,
  };

  await transporter.sendMail(mailOptions);
};
