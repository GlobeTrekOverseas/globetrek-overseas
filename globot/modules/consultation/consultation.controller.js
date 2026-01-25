import ChatSession from "../chat/chat.model.js";
import {
  getOrCreateLead,
  updateLeadField,
  isLeadQualified,
} from "../leads/lead.service.js";

export const submitConsultation = async (req, res) => {
  try {
    const {
      fullName,
      email,
      contact,
      destination,
      studyLevel,
      course,
      funding,
      timeline,
      counsellingMode,
    } = req.body;

    // 1. Create chat session (popup users don't have one)
    const session = await ChatSession.create({ source: "CONSULTATION_POPUP" });

    // 2. Create / get lead
    const lead = await getOrCreateLead(session._id);

    // 3. Update lead fields
    await updateLeadField(session._id, "fullName", fullName);
    await updateLeadField(session._id, "email", email);
    await updateLeadField(session._id, "phone", contact);
    await updateLeadField(session._id, "intendedCountry", destination);
    await updateLeadField(session._id, "highestQualification", studyLevel);
    await updateLeadField(session._id, "intendedCourse", course);
    await updateLeadField(session._id, "fundingOption", funding);
    await updateLeadField(session._id, "timeline", timeline);
    await updateLeadField(session._id, "counsellingMode", counsellingMode);

    // 4. Qualification check
    if (isLeadQualified(lead)) {
      lead.status = "qualified";
      lead.captureStage = "QUALIFIED";
      await lead.save();
    }

    return res.status(201).json({
      success: true,
      message: "Consultation request saved",
      leadId: lead._id,
    });
  } catch (error) {
    console.error("Consultation submit error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to submit consultation",
    });
  }
};
