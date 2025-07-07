import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: 'Missing message' });
  }

  const apiKey = process.env.OPENROUTER_API_KEY;

  const filePath = path.join(process.cwd(), 'data', 'profile.txt');
  let systemPrompt = '';

  try {
    systemPrompt = fs.readFileSync(filePath, 'utf8');
  } catch (error) {
    return res.status(500).json({ error: 'Error reading profile data.' });
  }

  const openRouterURL = 'https://openrouter.ai/api/v1/chat/completions';

  const response = await fetch(openRouterURL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'deepseek/deepseek-chat-v3-0324:free',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: message },
      ],
    }),
  });

  const data = await response.json();

  if (data.error) {
    if (data.error.indexOf('You exceeded your current quota') > -1) {
      return res.status(500).json({
        error:
          'Error: se acabaron los tokens de AI, por favor descarga mi CV en la sección de Contacto.',
      });
    }
    return res.status(500).json({ error: data.error.message });
  }

  res.status(200).json({ reply: data.choices[0].message.content });
}
