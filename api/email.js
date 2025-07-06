/**
 * file here for testing purposes
 * to test emailjs integration
 */

import emailjs from "@emailjs/browser";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    await emailjs.send(
      process.env.REACT_APP_EMAILJS_USERID,
      process.env.REACT_APP_EMAILJS_TEMPLATEID,
      {
        name,
        to_name: "Contacto web Diegol",
        email,
        message,
      },
      process.env.REACT_APP_EMAILJS_RECEIVERID
    );
    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Email sending error:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
}
