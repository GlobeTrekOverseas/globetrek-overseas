const isProd = import.meta.env.PROD;

export const API_BASE_URL = isProd
  ? import.meta.env.VITE_API_URL // production backend
  : "http://localhost:4000"; // local backend

export const API = {
  consultationMail: `${API_BASE_URL}/api/mail/consultation`,
};
