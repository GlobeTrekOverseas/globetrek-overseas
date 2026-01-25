import express from "express";
import { submitConsultation } from "./consultation.controller.js";

const router = express.Router();

router.post("/consultation", submitConsultation);

export default router;
