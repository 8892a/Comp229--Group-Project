import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    securityAnswer: { type: String, required: true },
    role: { type: String, default: "customer" }   // added for user roles
});

export default mongoose.model("User", userSchema);
