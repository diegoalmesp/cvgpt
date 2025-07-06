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
      process.env.EMAILJS_USERID,
      process.env.EMAILJS_TEMPLATEID,
      {
        name,
        to_name: "Contacto web Diegol",
        email,
        message,
      },
      process.env.EMAILJS_RECEIVERID
    );
    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Email sending error:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
}
