export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: 'Missing message' });
  }

  // const apiKey = process.env.OPENAI_API_KEY;
  const apiKey = process.env.OPENROUTER_API_KEY;

  // const response = await fetch("https://api.openai.com/v1/chat/completions", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //     Authorization: `Bearer ${apiKey}`,
  //   },
  //   body: JSON.stringify({
  //     model: "gpt-3.5-turbo",
  //     messages: [
  //       {
  //         role: "system",
  //         content: `Sos un asistente que responde preguntas sobre Diego. Este es su perfil:

  //         - Desarrollador frontend con React con 9 años de experiencia.
  //         - Apasionado por la tecnología, la electrónica y la IA.
  //         - Hobbies: parkour, fotografía, diseño web, lectura de ciencia ficción.

  //         Respondé de manera amable y breve. Si te preguntan sobre alguien más que no sea Diego, decí que no tenés información sobre esa persona.`,
  //       },
  //       { role: "user", content: message },
  //     ],
  //     max_tokens: 300,
  //   }),
  // });

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
        {
          role: 'system',
          content: `Sos un asistente que responde preguntas sobre Diego. Este es su perfil:

          - Desarrollador frontend con React con 9 años de experiencia.
          - Apasionado por la tecnología, la electrónica y la IA.
          - Hobbies: parkour, fotografía, diseño web, lectura de ciencia ficción.

          Aptitudes y Habilidades Técnicas
          Lenguajes de programación:

          JavaScript

          TypeScript

          PHP

          Python (nivel intermedio/básico)

          Front-End Development:

          ReactJS

          NextJS

          Svelte

          AngularJS

          Ionic

          jQuery

          Styled Components

          Tailwind CSS

          Chakra UI

          Microfrontends (SingleSPA)

          Back-End Development:

          NodeJS

          ExpressJS

          NestJS

          GraphQL (Hasura, Apollo Federation)

          BFF (Backend for Frontend)

          Django (nivel básico)

          MongoDB

          Laravel

          PHP

          Otras tecnologías y herramientas:

          Monorepos (Turborepo)

          AWS (Lambdas)

          GitHub

          GitLab

          Wordpress

          Idiomas:

          Español: nativo

          Inglés: fluido

          👨‍💼 Experiencia Profesional (Resumen de roles)
          Senior Front-End Developer en ClubHub (Royal Holiday) — 2023-2024

          Front-End Developer en Mundi.io — 2021-2023

          Full-Stack Developer / Líder Técnico en Tarmac.io (Trimble, SPINS) — 2020-2021

          Front-End Developer en Thrive Market (Distillery) — 2020-2021

          Full-Stack Developer en Eureka Labs — 2018-2019

          Front-End Developer en Vates (Claro) — 2016-2018

          Web Developer en DigitalBlend (Globad) — 2015-2016

          Front-End Developer en Elevare Group — 2024 - actual

          🎓 Educación
          Bachiller en administración y gestión — Instituto Jesuita Sagrada Familia (2002)

          Estudios incompletos en desarrollo de software — ISSD (Instituto Santo Domingo)

          🧑‍💼 Competencias Personales y Profesionales
          Proactivo, organizado y responsable

          Buenas habilidades interpersonales

          Cómodo tomando decisiones y trabajando bajo presión

          Amante del aprendizaje continuo y de compartir conocimiento

          Experiencia liderando equipos

          Creación de contenido en YouTube para enseñar y compartir saberes técnicos

          🎨 Hobbies
          YouTube: canal propio @diegolcase

          Fotografía: pasión por capturar momentos con cámara

          👨‍👩‍👧‍👧 Información Personal
          Nací el 8 de abril de 1985

          Vivo con mi mujer, dos hijas y un perro

          Respondé de manera amable y breve. Si te preguntan sobre alguien más que no sea Diego, decí que no tenés información sobre esa persona.`,
        },
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
