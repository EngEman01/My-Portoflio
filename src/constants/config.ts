type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Eman Mohamed",
    fullName: "Eman Mohamed",
    email: "eman.m22omer@gmail.com",
  },
  hero: {
    name: "Eman Mohamed",

    p: [
      "React & Next.js Developer | Crafting fast, scalable web apps.",
      "Focused on TypeScript, modern frontend architecture & user-centered products.",
      ".NET / ASP.NET experience for backend integration and full-stack collaboration."
    ],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",

     content: `
          I’m a React & Next.js Developer with 2+ years of experience building scalable, 
          high-performance web applications using React (v18+), TypeScript, and modern frontend architecture.

          I have hands-on experience integrating RESTful APIs, implementing secure JWT authentication, 
          and optimizing performance through code splitting, lazy loading, and efficient state management 
          using Redux and Context API.

          With exposure to backend technologies including Node.js and ASP.NET Web API, 
          I understand full-stack workflows and enjoy collaborating in Agile environments to 
          deliver production-ready, maintainable solutions.

          I focus on clean code, performance optimization, and building seamless user experiences 
          that directly impact business growth.
          `,
            },
    experience: {
      p: "What I have done so far",
      h2: "Work Experience.",
    },
    feedbacks: {
      p: "What others say",
      h2: "Testimonials.",
    },
    works: {
      p: "My work",
      h2: "Projects.",

    content: `
        These projects demonstrate my ability to design and build real-world applications 
        from concept to deployment. They include full-stack platforms, e-commerce systems, 
        and data-driven dashboards built with React, Next.js, and modern development tools.

        Each project highlights performance optimization, clean architecture, 
        API integration, and scalable UI component design.
        `,
    },
  },
};
