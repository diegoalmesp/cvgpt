export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Missing message" });
  }

  const apiKey = process.env.OPENAI_API_KEY;

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `Sos un asistente que responde preguntas sobre Diego. Este es su perfil: 
          
          - Desarrollador frontend con React con 9 años de experiencia.
          - Apasionado por la tecnología, la electrónica y la IA.
          - Hobbies: parkour, fotografía, diseño web, lectura de ciencia ficción.

          Respondé de manera amable y breve. Si te preguntan sobre alguien más que no sea Diego, decí que no tenés información sobre esa persona.`,
        },
        { role: "user", content: message },
      ],
      max_tokens: 300,
    }),
  });

  const data = await response.json();

  if (data.error) {
    if (data.error.code.indexOf("You exceeded your current quota") > -1) {
      return res.status(500).json({
        error:
          "Error: se acabaron los tokens, por favor descarga mi CV al final",
      });
    }
    return res.status(500).json({ error: data.error.message });
  }

  res.status(200).json({ reply: data.choices[0].message.content });
}
