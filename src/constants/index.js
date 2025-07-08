import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  reactjs,
  nodejs,
  nextjs,
  distillery,
  eureka,
  mwe,
  mundi,
  royal,
  tarmac,
  threads,
  healthcare,
  portfolio,
  aditya,
  santosh,
  school,
  logo,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'technology',
    title: 'Technology',
  },
  // {
  //   id: 'project',
  //   title: 'Project',
  // },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'React Developer',
    icon: mobile,
  },
  {
    title: 'Full-Stack Developer',
    icon: backend,
  },
  {
    title: 'Fronted Developer',
    icon: creator,
  },
];

const technologies = [
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'nextjs',
    icon: nextjs,
  },
];

const experiences = [
  {
    title: 'Front-end Developer',
    company_name: 'Elevare Group (ex Medical Web Experts)',
    icon: mwe,
    iconBg: '#010101',
    date: 'July 2024 - Present',
    points: [
      'Frontend Development: Developed and maintained user interfaces for web applications using React.js and Next.js, ensuring high performance and responsiveness. Implemented state management using React Context API to manage application state efficiently.',
      'Frontend Technologies: Typescript, React, ChakraUI, Styled components, Tailwind CSS, and Next.js were utilized to create dynamic and responsive user interfaces. This included implementing reusable components and optimizing performance for a seamless user experience.',
      'Bakend Technologies: BFF with Node and Typescript, I touch a little bit of Python (Django) every now and then.',
    ],
  },
  {
    title: 'Full-Stack Developer',
    company_name: 'ClubHub (for client: Royal Holiday)',
    icon: royal,
    iconBg: '#010101',
    date: 'November 2024 - June 2024',
    points: [
      'Frontend Development: Developed and maintained user interfaces for web applications using React.js and Next.js, ensuring high performance and responsiveness. Implemented state management using React Context API to manage application state efficiently.',
      'Backend Development: Developed and maintained BFF applications using Nest.js, ensuring high performance and responsiveness. Implemented RESTful APIs for seamless communication between the frontend and backend.',
      'rontend Technologies: Typescript, Svelte, GraphQL (Hasura), Tailwind, Monorepo (Turborepo).',
      'Engaged in troubleshooting and debugging complex issues to improve application stability and security.',
      'Bakend Technologies: NestJS and GraphQL,',
    ],
  },
  {
    title: 'Content Creator',
    company_name: 'YouTube',
    icon: logo,
    iconBg: '#010101',
    date: '2023 - Present',
    points: [
      'Content Creation: Developed and published engaging content on YouTube, focusing on web development tutorials, some tech reviews and educational content related to online shopping',
    ],
  },
  {
    title: 'Front-End Developer',
    company_name: 'Mundi.io',
    icon: mundi,
    iconBg: '#010101',
    date: 'April 2021 - November 2023',
    points: [
      'Frontend development in almost all internal and external applications: main platform, back office, and landing pages.',
      'Technologies: Typescript, ReactJS, NextJS, Tailwind, GraphQL (Hasura). Microfrontends with SingleSPA.',
    ],
  },
  {
    title: 'Front-End Developer (full English)',
    company_name: 'Distillery (Client: Thrive Market)',
    icon: distillery,
    iconBg: '#010101',
    date: 'September 2020 - April 2021',
    points: [
      'Frontend development for the e-commerce page. Implemented new features and fixed bugs in the existing codebase.',
      'Technologies: ReactJS, NextJS, styled-components and Redux.',
    ],
  },
  {
    title: 'Leader + Front-End Developer (En)',
    company_name: 'Tarmac.io (Clients: Trimble, SPINS)',
    icon: tarmac,
    iconBg: '#010101',
    date: 'April 2019 - September 2020',
    points: [
      'Trimble: team leader for the Paccar Portal application. Tech: NodeJS + Lambdas and AngularJS.',
      'SPINS: back office application. Tech: ReactJS GraphQL (Apollo).',
    ],
  },
  {
    title: 'Full-Stack Developer',
    company_name: 'Eureka Labs',
    icon: eureka,
    iconBg: '#010101',
    date: 'June 2018 - March 2019',
    points: [
      'Created reusable components and libraries, improving development efficiency and consistency across projects.',
      'Mentored junior developers, providing guidance on best practices and fostering a collaborative team environment.',
      'Conducted performance optimization and debugging of applications, ensuring smooth functionality and user experience.',
      'Integrated authentication and authorization systems, including session management, user roles, and permissions for enhanced security.',
      'Worked closely with cross-functional teams including UI/UX designers, QA engineers, and project managers to deliver high-quality software solutions.',
    ],
  },
];

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to create a website that could truly match the beauty of our product, but Abej proved me wrong. The website he designed not only captures the essence of our brand but enhances it in ways I didn’t think were possible. It’s truly a work of art.',
    name: 'Santosh Sing',
    designation: 'CFO',
    company: 'Jindalco Metal',
    image: santosh,
  },
  {
    testimonial:
      "I've never worked with a web developer who is as genuinely invested in their clients' success as Abej. He goes above and beyond to ensure not just a beautiful website, but one that truly drives results. His dedication is unmatched from another designer and developer.",
    name: 'Aditya Kumar',
    designation: 'SE',
    company: 'CSM Technologies',
    image: aditya,
  },
  {
    testimonial:
      "Abej is unlike any web developer I’ve ever worked with. He truly cares about his clients' success, going the extra mile to create a website that not only looks amazing but also helps our business thrive. His commitment and attention to detail are exceptional with client.",
    name: 'Chandan Singh',
    designation: 'CTO',
    company: 'Mount Carmel School',
    image: school,
  },
];

const projects = [
  {
    name: 'Threads Application',
    description:
      'Building a full-stack clone of Threads (a social media platform) with Next.js 14+ involves several stages, including user interface design, backend API development, real-time features, user authentication, notifications, and community management. The platform should support various features like nested comments, real-time search, and notifications.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: threads,
    source_code_link: 'https://github.com/Abej-Rijwi/threads',
  },
  {
    name: 'Health Application',
    description:
      'Building a healthcare platform that streamlines patient registration, appointment scheduling, medical record management, complex forms, and SMS notifications is a large-scale project that involves both front-end and back-end components, integration with third-party services, and security measures to protect sensitive health data.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'appwrite',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: healthcare,
    source_code_link: 'https://github.com/Abej-Rijwi/healthcare',
  },
  {
    name: 'Portfolio Application',
    description:
      'Building a personal portfolio website with react.js and three.js involves creating a visually appealing and responsive design that showcases your skills, projects, and experiences. The website should include sections for an introduction, project showcases, testimonials, and contact information. 3D graphics design  for amazing view using threejs.',
    tags: [
      {
        name: 'reactjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'threejs',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: portfolio,
    source_code_link: 'https://github.com/Abej-Rijwi/portfolio',
  },
];

export { services, technologies, experiences, testimonials, projects };
