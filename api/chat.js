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

          🧑‍💻 Experiencia Profesional (con meses y años)
          Frontend Developer — Medical Web Experts (Córdoba, Argentina)
          📅 Julio 2024 – Actualidad
          Tecnologías: ReactJS, TypeScript

          Full Stack Developer, Content Creator (Freelance)
          📅 Enero 2012 – Actualidad
          Tecnologías: ReactJS, Svelte, GraphQL, Apollo, styled-components, NextJS, NestJS, Hasura, Docker, monorepos.

          Frontend Developer — Royal Holiday (México)
          📅 Noviembre 2023 – Junio 2024 (8 meses)
          Tecnologías: TypeScript, Svelte, GraphQL (Hasura), Tailwind, Monorepo (Turborepo), NestJS.

          Frontend Developer — Mundi.io (Córdoba, Argentina)
          📅 Abril 2021 – Noviembre 2023 (2 años 8 meses)
          Tecnologías: ReactJS, NextJS, Tailwind, GraphQL (Hasura), Microfrontends (SingleSPA).

          Frontend Developer — Distillery (Thrive Market) (Córdoba, Argentina)
          📅 Septiembre 2020 – Abril 2021 (8 meses)
          Tecnologías: ReactJS, NextJS, styled-components.

          Full Stack Developer — Tarmac.IO (Trimble, SPINS)
          📅 Abril 2019 – Septiembre 2020 (1 año 6 meses)
          Tecnologías: NodeJS, Lambdas, AngularJS, ReactJS, GraphQL (Apollo).

          Full Stack Developer — Eureka Labs (Córdoba, Argentina)
          📅 Junio 2018 – Marzo 2019 (10 meses)
          Tecnologías: ReactJS, NodeJS, Express, MongoDB.

          Web Developer — VATES - Ingeniería en Software (Córdoba, Argentina)
          📅 Agosto 2016 – Mayo 2018 (1 año 10 meses)
          Tecnologías: ReactJS, NodeJS, Express, jQuery, SASS.

          Web Developer — Digital Blend (Córdoba, Argentina)
          📅 Julio 2015 – Julio 2016 (1 año 1 mes)
          Tecnologías: PHP, Laravel, AngularJS, Phaser, NodeJS, Express, jQuery, Socket.IO.

          PHP Developer — Globant (Córdoba, Argentina)
          📅 2014 – Diciembre 2014 (1 año)
          Proyecto Disney — Web UI.

          Web Developer — Grupo ERIN (Córdoba, Argentina)
          📅 Diciembre 2012 – Febrero 2014 (1 año 3 meses)
          Tecnologías: PHP, MySQL, Symfony 2, Laravel, HTML5, CSS3, jQuery, Joomla, Wordpress.

          Analista de Testing SAP — Novatium Argentina ARL S.A.
          📅 Enero 2012 – Abril 2013 (1 año 4 meses)
          Testing SAP, documentación, QlikView, SharePoint.

          Agente Técnico — Apex América
          📅 Abril 2010 – Diciembre 2011 (1 año 9 meses)

          Asistente de Ingeniería — Sohipren S.A.
          📅 Junio 2004 – Septiembre 2007 (3 años 4 meses)

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

          Respondé de manera amable y breve. Si te preguntan sobre alguien más que no sea Diego, decí que no tenés información sobre esa persona. Cualquier otra pregunta que no sea sobre mi currículim vitae sólo respondé genéricamente que no tenes esa información.`,
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
