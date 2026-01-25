import express from "express";
import cors from "cors";
import chatRoutes from "./modules/chat/chat.route.js";
import adminRoutes from "./modules/admin/admin.routes.js";
import studentRoutes from "./modules/user/student/student.route.js";
import mailRoutes from "./modules/mail/mail.route.js";
import consultationRoutes from "./modules/consultation/consultation.routes.js";
const app = express();

//global midddleware
app.use(cors());
app.use(express.json());

//health check route
app.get("/", (req, res) => {
  res.json({
    status: "OK",
    service: "GlobeBot Backend",
    message: "Server is running",
  });
});

//chat session routes
app.use("/api/chat", chatRoutes);

//admin routes
app.use("/api/admin", adminRoutes);

app.use("/api/student", studentRoutes);

app.use("/api/mail", mailRoutes);

app.use("/api/consultation", consultationRoutes);
export default app;

//payment routes;
