import express from "express";
import cors from "cors";
import chatRoutes from "./modules/chat/chat.route.js";
import adminRoutes from "./modules/admin/admin.routes.js";
import studentRoutes from "./modules/user/student/student.route.js";
import mailRoutes from "./modules/mail/mail.route.js";
import consultationRoutes from "./modules/consultation/consultation.routes.js";
// import { MongoClient, ServerApiVersion } from "mongodb";
import mongoose from "mongoose";
import "dotenv/config";

const app = express();

const allowedOrigins = [
  "http://localhost:3000",
  "https://www.globetrekoverseas.com",
];

//global midddleware
app.use(
  cors({
    origin: function (origin, callback) {
      if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
        callback(null, true); // Allow the request
      } else {
        callback(new Error("Not allowed by CORS")); // Deny the request
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE"],
  }),
);
app.use(express.json());

// Connect MongoDB
// const client = new MongoClient(process.env.MONGODB_URI, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });
console.log("MONGODB_URI", process.env.MONGODB_URI);
export const connectMongo = async () => {
  try {
    // await client.connect();
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    const isConnected = conn.connections[0].readyState === 1;
    console.log("MongoDB connected :", isConnected);
  } catch (error) {
    console.log("mongodb is down", error);
    process.exit(1);
  }
};
connectMongo();

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

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`GlobeBot server running on port ${PORT}`);
});

export default app;

//payment routes;
