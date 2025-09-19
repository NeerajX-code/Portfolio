import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import validator from "validator";
import { Resend } from "resend";

dotenv.config();

const app = express();
app.use(
  cors({
    origin: ["http://localhost:5173", "https://portfolio-neeraj.onrender.com"],
  })
);

const resend = new Resend(process.env.RESEND_API_KEY);

app.get("/health", async (req, res) => {
  res.status(200).json({ message: "server is running." });
});

// ✅ Contact endpoint
app.post("/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required." });
    }

    if (!validator.isEmail(email)) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid email address." });
    }

    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: process.env.EMAIL_TO,
      subject: `📩 New Contact from ${name}`,
      html: `
        <h2>New Contact Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    console.log("✅ Email sent:", data);

    res
      .status(200)
      .json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("❌ Error sending email:", error);
    res.status(500).json({ success: false, message: "Failed to send email" });
  }
});

app.listen(3000, () =>
  console.log(`🚀 Server running on http://localhost:3000`)
);
