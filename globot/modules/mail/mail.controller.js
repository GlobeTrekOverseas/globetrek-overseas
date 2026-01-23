import { sendConsultationMail } from "./mail.service.js";

export const submitConsultation = async (req, res) => {
  try {
    const data = req.body;

    // Basic validation
    const requiredFields = [
      "fullName",
      "email",
      "contact",
      "destination",
      "timeline",
      "counsellingMode",
      "studyLevel",
      "course",
      "funding",
    ];

    for (const field of requiredFields) {
      if (!data[field]) {
        return res.status(400).json({
          success: false,
          message: `${field} is required`,
        });
      }
    }

    await sendConsultationMail(data);

    return res.status(200).json({
      success: true,
      message: "Consultation request sent successfully",
    });
  } catch (error) {
    console.error("Mail error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to send consultation request",
    });
  }
};
