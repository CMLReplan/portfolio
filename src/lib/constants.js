export const NAME = "Carl Mathew L. Replan";
export const ROLE = "Software Developer & Web Developer";
export const EMAIL = "mattreplan@gmail.com";
export const PHONE = "09171391759";
export const LOCATION = "Laguna, Philippines";

export const BIO = `Computer Engineering graduate and Software Developer with hands-on experience in PHP backend development, CMS management, and technical support.
Worked on real-world systems using Symfony and Joomla, and currently expanding my frontend skill set using React, Next.js, and Tailwind CSS.
Enjoy building clean, practical, and user-focused applications, and eager to grow as a software developer in a collaborative and fast-paced environment.`;

export const PROJECTS = [
  {
    id: "0",
    title: "Personal Portfolio Website",
    description:
      "My personal portfolio built with Next.js and Tailwind CSS, featuring responsive design, project showcases, certifications, and a working contact form integrated with Formspree. Deployed on Vercel with CI/CD.",
    tags: ["Next.js", "React", "Tailwind CSS", "Vercel", "Formspree"],
    imageUrl:
      "/assets/portfolio-preview.png",
    link: "https://portfolio-ruby-two-icrt7lpso8.vercel.app",
    github: "https://github.com/CMLReplan/portfolio",
  },
  {
    id: "1",
    title: "Little Lemon Restaurant",
    description:
      "A React-based table booking application featuring responsive design, form validation, deployed and hosted on Vercel as part of the Meta Professional Certificate.",
    tags: ["React", "JavaScript", "HTML5", "CSS", "Bootstrap", "Unit Testing"],
    imageUrl:
      "/assets/photo2.png",
    link: "https://my-app-phi-eight-47.vercel.app",
    github: "https://github.com/CMLReplan/my-app",
  },
  {
    id: "2",
    title: "User Authentication API (Recreated)",
    description:
      "A Symfony authentication API recreated from a real production system I built in 2019, demonstrating professional experience with API key and OTP-based authentication.",
    tags: ["Symfony", "PHP", "REST API", "SQL", "Postman"],
    imageUrl:
      "/assets/placeholder-api.jpg",
    github: "https://github.com/CMLReplan/auth-api",
    docs: "https://github.com/CMLReplan/auth-api#readme",
  },
  {
    id: "3",
    title: "Gender & Development Section and Institute CMS",
    description:
      "Developed and implemented an institutional web section using HTML, CSS, Bootstrap, JavaScript, and Joomla. Continued maintenance and updates to ensure content relevance and technical functionality for the section and main website of the Institute.",
    tags: ["Joomla", "CMS", "HTML5", "CSS3", "Bootstrap", "JavaScript"],
    imageUrl:
      "/assets/photo3.png",
    link: "https://fprdi.dost.gov.ph/gad-corner",
  },
];

export const EXPERIENCE = [
  {
    company: "DOST-FPRDI",
    role: "Computer Operator II-3",
    period: "Jan 2023 - Dec 2024",
    description: [
      "Maintained and updated Gender and Development section of the institute's website using Joomla.",
      "Ensured accurate tracking and documentation using Google Workspace tools.",
      "Managed office documentation and daily administrative tasks to improve accessibility.",
      "Provided hardware and software troubleshooting for institute personnel.",
    ],
  },
  {
    company: "DOST-FPRDI",
    role: "Computer Programmer I",
    period: "Aug 2021 - Dec 2022",
    description: [
      "Contributed to development of G&D section using Joomla and custom layouts.",
      "Maintained and updated Gender and Development section of the institute's website using Joomla.",
      "Supported with record-keeping and administrative tasks using Google Workspace tools.",
      "Provided technical troubleshooting support for office equipment.",
    ],
  },
  {
    company: "Woofy Incorporated",
    role: "Software Engineer",
    period: "Oct 2019 - Mar 2020",
    description: [
      "Developed backend services with Symfony, including user authentication and OTP login.",
      "Implemented complex mathematical logic for user account balances.",
      "Integrated third-party APIs for OTP delivery via message notifications.",
      "Coordinated in a 4-member Agile team to deliver scalable features.",
    ],
  },
];

export const SKILLS = [
  // Backend
  { name: "Symfony", category: "Languages & Frameworks", level: 3 },
  { name: "PHP", category: "Languages & Frameworks", level: 4 },
  { name: "Joomla", category: "Web & CMS", level: 4 },

  // Frontend
  { name: "React", category: "Languages & Frameworks", level: 3 }, // learning
  { name: "Next.js", category: "Languages & Frameworks", level: 2 }, // learning
  { name: "Tailwind CSS", category: "Languages & Frameworks", level: 2 }, // learning
  { name: "JavaScript", category: "Languages & Frameworks", level: 4 },
  { name: "HTML5/CSS3", category: "Languages & Frameworks", level: 3 },
  { name: "Bootstrap", category: "Languages & Frameworks", level: 4 },

  // Tools & Data
  { name: "REST APIs", category: "Tools & Data", level: 3 },
  { name: "Postman", category: "Tools & Data", level: 4 },
  { name: "SQL", category: "Tools & Data", level: 3 },
  { name: "Git/GitHub", category: "Tools & Data", level: 4 },
  { name: "Google Workspace", category: "Tools & Data", level: 4 },

  // Soft Skills
  { name: "Agile/Scrum", category: "Soft Skills", level: 4 },
  { name: "Communication", category: "Soft Skills", level: 4 },
  { name: "Problem Solving", category: "Soft Skills", level: 4 },
  { name: "Time Management", category: "Soft Skills", level: 4 },
];

export const CERTIFICATES = [
  {
    name: "Meta Front-End Developer Certificate",
    issuer: "Coursera",
    date: "September 2025",
  },
  {
    name: "Career Service Professional Eligibility",
    issuer: "Civil Service Commission",
    date: "August 2018",
  },
];


export const YEAR = new Date().getFullYear();