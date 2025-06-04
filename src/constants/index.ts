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
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  emdad,
  guitara,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend React Developer",
    icon: mobile,
  },
  {
    title: "Backend NodeJs Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
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
  // {
  //   name: "Tailwind CSS",
  //   icon: tailwind,
  // },
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
    title: "Web Developer",
    companyName: "Emdad",
    icon: emdad,
    iconBg: "#ced2df",
    date: "December 2024 - March 2025",
    points: [
      "Developed a responsive bilingual website (Arabic & English) for marketing military and civilian equipment. ",
      "Built UI using HTML, CSS, and JavaScript; integrated with backend (.NET MVC) for dynamic data display. ",
      "Implemented QR code functionality to bridge print and digital materials, enhancing user access. ",
      "Optimized mobile layout, reducing bounce rate by 20%. ",
    ],
  },
  {
    title: "ReactJS Developer",
    companyName: "Guitara Group",
    icon: guitara,
    iconBg: "#f36aca",
    date: "March 2025 - June 2025",
    points: [
      "Developed and deployed the agency’s official website using React and Vite, increasing page speed by 40%.",
      "Integrated front-end with back-end systems via NodeJS in collaboration with backend team. ",
      "Co-developed a Shopify-based e-commerce platform with a dynamic price comparison feature, improving user engagement by 25%.",
      "Designed a branded portfolio website showcasing agency services and events. ",
      "Ensured responsive, accessible design across all platforms, contributing to 30% increase in mobile traffic.",
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
    image: carrent,
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
    image: jobit,
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
    image: tripguide,
    sourceCodeLink: "https://github.com/EngEman01/Tammy-Food",
  },
];

export { services, technologies, experiences, testimonials, projects };
