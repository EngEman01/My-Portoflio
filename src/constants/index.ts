import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  nodejs,
  mongodb,
  git,
  docker,
  itis,
  emdad,
  guitara,
  techNook,
  shagara,
  tammyFood,
  threejs,
  creator,
  tailwind,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Frontend ReactJS Developer",
    icon: web,
  },
  {
    title: "Next.JS Developer | Full Stack Developer",
    icon: creator,
  },
  {
    title: "Frontend React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend NodeJs | .NET Developer",
    icon: backend,
  },

];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },

  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {

    title: "Full-Stack .NET Developer",
    companyName: "ITIS",
    icon: itis,
    iconBg: "#ced2df",
    date: "December 2025 - Present",
    points: [
      "Developed ERP modules using ASP.NET MVC, C#, Web API, and SQL Server for 50+ clients.",
      "Optimized complex database queries, improving retrieval speed by 25%.",
      "Implemented automated testing and contributed to CI/CD pipelines, reducing production bugs by 20%.",
      "Collaborated with frontend teams to integrate scalable RESTful APIs."
    ],
  },
  {
    title: "Front-End & Full-Stack Developer (Part-time)",
    companyName: "Emdad",
    icon: emdad,
    iconBg: "#ced2df",
    date: "December 2024 - Present",
    points: [
      "Led development of bilingual (AR/EN) React-based websites serving 5,000+ monthly users.",
      "Built responsive interfaces using Tailwind CSS and modern layout techniques.",
      "Improved mobile performance by 20% and achieved 100% Lighthouse SEO score.",
      "Collaborated closely with backend developers to integrate APIs and deliver new features."
    ],
  },
  {
    title: "React Developer",
    companyName: "Guitara Group",
    icon: guitara,
    iconBg: "#f36aca",
    date: "March 2025 - Aug 2025",
    points: [
      "Built scalable React (v18+) applications using TypeScript and Vite.",
      "Improved page load speed by 40% through code splitting and performance optimization.",
      "Developed reusable UI components and implemented Redux-based state management.",
      "Integrated RESTful APIs and ensured cross-browser compatibility.",
      "Co-developed a Shopify-based e-commerce platform with dynamic price comparison, improving engagement by 25%."
    ],
  },
];
const testimonials: TTestimonial[] = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "Tree Project",
    description:
      "Created an educational platform on environmental awareness using MERN stack (MongoDB, Express, React, Node.js).",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],

    image: shagara,
    sourceCodeLink: "https://github.com/EngEman01/final-project/tree/master",
  },
  {
    name: "Tech Nook Store ",
    description:
      "Built a React.js e-commerce platform with API integration for real-time product listings.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "api",
        color: "green-text-gradient",
      },
    ],

    image: techNook,
    sourceCodeLink: "https://github.com/EngEman01/TechNook",
  },
  {
    name: "Tammy Food ",
    description:
      "Developed a responsive recipe website using HTML and CSS. Focused on user-friendly navigation and mobile optimization. ",
    tags: [
      {
        name: "html",
        color: "orange-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],

    image: tammyFood,
    sourceCodeLink: "https://github.com/EngEman01/Tammy-Food",
  },
];

export { services, technologies, experiences, testimonials, projects };
