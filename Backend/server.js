import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";   // <-- FIXED (lowercase 'routes')

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/users", userRoutes);

// Port
const PORT = process.env.PORT || 3000;

// Server Start
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
