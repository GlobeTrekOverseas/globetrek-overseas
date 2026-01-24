import axios from "axios";

const isProd = import.meta.env.PROD;

const API_BASE_URL = isProd
  ? import.meta.env.VITE_API_URL // production backend
  : "http://localhost:4000"; // local backend

// AXIOS INSTANCES

// Bot / Chat APIs
export const botAxios = axios.create({
  baseURL: `${API_BASE_URL}/api/chat`,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 15000,
});

// Mail / Consultation APIs
export const mailAxios = axios.create({
  baseURL: `${API_BASE_URL}/api/mail`,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 15000,
});

// Start new chat session
export const startChat = async () => {
  const { data } = await botAxios.post("/start");
  return data;
};

// Send message to bot
export const sendBotMessage = async (sessionId: string, message: string) => {
  const { data } = await botAxios.post("/message", {
    sessionId,
    message,
  });
  return data;
};

// End chat session
export const endChat = async (sessionId: string) => {
  const { data } = await botAxios.post("/end", {
    sessionId,
  });
  return data;
};

export const sendConsultationMail = async (payload: {
  fullName: string;
  email: string;
  contact: string;
  destination: string;
  timeline: string;
  counsellingMode: string;
  studyLevel: string;
  course: string;
  funding: string;
}) => {
  const { data } = await mailAxios.post("/consultation", payload);
  return data;
};
