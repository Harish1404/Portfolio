import {
    AI,
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    SQL,
    git,
    figma,
    Loan,
    PyPal,
    threejs,
    Accenture,
    Cts,
    Python,
    Tableau,
    PowerBI,
    C,
  } from "../assets";
  
  export const navLinks = [
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
  
  const services = [
    {
      title: "AI Developer",
      icon: web,
    },
    {
      title: "Data Analyst",
      icon: mobile,
    },
    {
      title: "UI/UX Designer",
      icon: backend,
    },
    {
      title: "Data Visualization Specialist",
      icon: creator,
    },
  ];
  
  const technologies = [
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
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "SQL",
      icon: SQL,
    },
    {
      name: "Python",
      icon: Python,
    },
    
    {
      name: "Tableau",
      icon: Tableau,
    },
    {
      name: "PowerBI",
      icon: PowerBI,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
  ];
  
  const experiences = [
    {
      title: "Agile Methodology Virtual Experience Program",
      company_name: "Congnizant",
      icon: Cts,
      iconBg: "#A9A9A9",
      date: "February 19th, 2023",
      points: [
        "Learned Agile principles, including the differences between Waterfall and Agile methodologies.",
        "Reviewed Agile methodology and explored additional resources for deeper understanding",
        "Utilized Agile tools and navigated real-world Agile challenges (curveballs)."
        
      ],
    },
    {
      title: "Developer Virtual Experience Program",
      company_name: "Accenture",
      icon: Accenture,
      iconBg: "#E6DEDD",
      date: "September 20th, 2022",
      points: [
        "Gained hands-on experience in defining technical requirements and designing architectural changes.",
        "Conducted debugging, unit testing, and User Acceptance Testing (UAT).",
        "Completed tasks in securing the software development lifecycle (SDLC), with attention to data privacy and security​,"

      ],
    },
  ];
  const projects = [
    {
      name: "AI Trauma Assistant",
      description:
        "Developed an AI-driven chatbot to assist trauma patients by analyzing their symptoms, providing support,and connecting them to nearby doctors in critical cases. Integrated NLP for user interaction and real-time assessment.",
      tags: [
        {
          name: "AI",
          color: "blue-text-gradient",
        },
        {
          name: "Python",
          color: "green-text-gradient",
        },
        {
          name: "Html",
          color: "pink-text-gradient",
        },
        {
          name: "ML",
          color: "orange-text-gradient",
        },
      ],
      image: AI,
      source_code_link: "https://github.com/",
    },
    {
      name: "Loan Approval Prediction",
      description:
      "Built a machine learning model to predict loan approvals based on applicant details such as credit history,income, and loan amount. Implemented data preprocessing, feature engineering, and model optimization for accurate predictions.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "ML",
          color: "green-text-gradient",
        },
        {
          name: "Css",
          color: "pink-text-gradient",
        },
      ],
      image: Loan ,
      source_code_link: "https://github.com/",
    },
    {
      name: "PyPal",
      description:
        "Developed a React-based web application to tutor kids on Python basics. Integrated a chatbot for interactive learning and a Python sandbox using a free API for real-time code execution. Designed an engaging UI with Font Awesome icons and a gradient background.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Apis",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: PyPal,
      source_code_link: "https://skcharish.vercel.app/",
    },
  ];
  
  export { services, technologies, experiences, projects };