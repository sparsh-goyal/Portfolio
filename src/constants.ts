import {
  Code2,
  Database,
  Layout,
  LineChart,
  Server,
  Sparkles,
} from "lucide-react";

export const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
];

export const PERSONAL_INFO = {
  name: "Sparsh Goyal",
  location: "Ottawa, ON, Canada",
  phone: "+1 (613) 447-6645",
  email: "sparshg99.sg@gmail.com",
  linkedin: "https://linkedin.com/in/sparshgoyal13",
  github: "https://github.com/sparshgoyal13",
};

export const EDUCATION = [
  {
    degree: "Master of Computer Science",
    school: "University of Ottawa, Canada",
    period: "2022 – 2024",
    gpa: "3.95/4.0",
    coursework: [
      "Intelligent Transportation Systems",
      "Wireless Ad-Hoc Networking",
      "Fault Tolerance",
      "Software Engineering",
      "Mobile Commerce Technologies",
      "Multimedia Communications",
    ],
  },
  {
    degree: "Bachelor of Computer Engineering",
    school: "Savitribai Phule Pune University, India",
    period: "2017 – 2021",
    gpa: "9.44/10.0",
  },
];

export const SKILLS = [
  {
    category: "Programming Languages",
    icon: Code2,
    skills: [
      "C#",
      "TypeScript",
      "JavaScript",
      "Python",
      "Java",
      "Kotlin",
      "Go",
      "C++",
      "HTML",
      "CSS",
    ],
    description:
      "Versatile in multiple languages for backend, frontend, and systems programming.",
  },
  {
    category: "AI & Machine Learning",
    icon: Sparkles,
    skills: [
      "Azure OpenAI",
      "GPT Models",
      "LLM Integrations",
      "MCP",
      "RAG",
      "Prompt Engineering",
      "LangChain",
      "LangGraph",
      "TensorFlow",
      "OpenCV",
    ],
    description:
      "Building intelligent, agentic AI systems and integrating large language models.",
  },
  {
    category: "Frameworks & Libraries",
    icon: Layout,
    skills: [
      "React.js",
      "Next.js",
      "React Native",
      "Node.js",
      "Redux",
      "ASP.NET Core",
      ".NET Framework",
    ],
    description:
      "Developing responsive web and mobile applications and robust enterprise modules.",
  },
  {
    category: "Cloud & DevOps",
    icon: Server,
    skills: [
      "Microsoft Azure",
      "Azure DevOps",
      "GitHub Actions",
      "Docker",
      "Azure Container Apps",
      "CI/CD",
    ],
    description:
      "Designing scalable cloud architectures and automated deployment pipelines.",
  },
  {
    category: "Databases & Search",
    icon: Database,
    skills: ["ElasticSearch", "Microsoft SQL Server", "MongoDB", "Firebase"],
    description:
      "Managing diverse data systems and high-performance search engines.",
  },
  {
    category: "Testing & QA",
    icon: LineChart,
    skills: ["Selenium", "Appium", "Gherkin", "Jest", "TDD"],
    description:
      "Ensuring software quality through comprehensive automated testing.",
  },
];

export const PROJECTS = [
  {
    title: "Virtual Space Trip",
    description:
      "A project using NASA APIs to showcase the Astronomy Picture of the Day (APOD) and space exploration data.",
    tech: ["React", "NASA API", "Firebase"],
    image: "/assets/projects/virtual-space-trip.png",
    link: "https://virtualspacetrip.firebaseapp.com/",
  },
  {
    title: "XOR Cards",
    description:
      "An interactive card-based platform for learning and strategic gameplay using a deck of playing cards.",
    tech: ["React", "Node.js", "Firebase"],
    image: "/assets/projects/xor-cards.png",
    link: "https://xorcards.firebaseapp.com",
  },
  {
    title: "Cryptoscope",
    description: "Secure cryptographic data analysis platform for enterprises.",
    tech: ["Reactjs", "Python", "MongoDB"],
    image: "/assets/projects/cryptoscope.png",
  },
  {
    title: "DeafBeats",
    description:
      "AI-driven app that generates music from American Sign Language gestures.",
    tech: ["Reactjs", "ML"],
    image: "/assets/projects/deafbeats.png",
  },
  {
    title: "Encryptify",
    description:
      "Encryption-as-a-service for secure medical document storage using cryptographic algorithms.",
    tech: ["Reactjs", "Node.js", "Firebase"],
    image: "/assets/projects/encryptify.png",
  },
  {
    title: "CareScan",
    description: "OCR-based app to digitize handwritten patient forms.",
    tech: ["Reactjs", "Node.js", "Firebase"],
    image: "/assets/projects/carescan.png",
  },
];

export const EXPERIENCE = [
  {
    company: "Realtor.ca Canada Inc.",
    companyUrl: "https://realtor.ca",
    role: "Software Engineer",
    period: "Jun 2025 – Present",
    location: "Ottawa, Canada",
    highlights: [
      "Designing and developing responsive and scalable GenAI-powered applications for [Realtor.ca](https://realtor.ca).",
      "Integrating large language models (Azure OpenAI, custom LLMs) and Model Context Protocol (MCP) servers into the core product ecosystem.",
      "Implementing Agentic AI capabilities using LangChain and LangGraph frameworks to build intelligent, multi-step LLM agents.",
      "Developing with React, Next.js, TypeScript, ElasticSearch, Azure OpenAI, CI/CD pipelines and Docker.",
    ],
  },
  {
    company: "The Canadian Real Estate Association",
    companyUrl: "https://www.crea.ca",
    role: "Web Software Developer",
    period: "Nov 2022 – Jun 2025",
    location: "Ottawa, Canada",
    highlights: [
      "Maintained and developed modules in C#, .NET Framework, VB.NET and TypeScript within Azure.",
      "Built modern, reusable React components to enhance the [Data Distribution Feed (DDF)](https://ddf.realtor.ca).",
      "Configured CI/CD pipelines in Azure DevOps for automated deployments.",
    ],
  },
  {
    company: "The Canadian Real Estate Association",
    companyUrl: "https://www.crea.ca",
    role: "QA Test Analyst",
    period: "May 2022 – Nov 2022",
    location: "Ottawa, Canada",
    highlights: [
      "Automated testing for the [Realtor.ca](https://realtor.ca) mobile apps using Selenium, Gherkin, and C#.",
      "Improved test coverage by 26% through enhanced automation and test case optimization.",
    ],
  },
  {
    company: "Xoriant Solutions Pvt. Ltd.",
    companyUrl: "https://www.xoriant.com",
    role: "Associate Software Engineer",
    period: "Jul 2021 – Apr 2022",
    location: "Pune, India",
    highlights: [
      "Developed user-facing features for the [FrontDoorHome Developer Portal](https://developer.frontdoorhome.com) using Reactjs and Redux.",
      "Implemented APIs and services using GoLang and integrated Next.js for server-side rendering.",
      "Increased project test coverage by 12% through addition of unit testing.",
    ],
  },
];

export const ACHIEVEMENTS = [
  "Sponsor Category Winner – HackTheHill",
  "Sponsor Category Winner – uOttaHack5",
  "1st Runner Up – One-Hack-Athon (Global Hackathon)",
  "Innovative Implementable Idea Award – Samhar COVID-19 Hackathon",
  "Grand Prize Winner – Decov2020 Hackathon",
  "1st Runner Up – Festival of Future Hackathon",
  "All India Rank 6 – NESD Exam 2019",
];

export const CONTACT_INFO = {
  email: PERSONAL_INFO.email,
  phone: PERSONAL_INFO.phone,
  location: PERSONAL_INFO.location,
  linkedin: PERSONAL_INFO.linkedin,
  github: PERSONAL_INFO.github,
};
