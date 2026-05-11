import express from "express";
import { submitConsultation, submitIELTSEnrollment } from "./mail.controller.js";

const router = express.Router();

router.post("/consultation", submitConsultation);

router.post("/ielts-enrollment", submitIELTSEnrollment);

export default router;
