export interface Experience {
  company: string;
  role: string;
  period: string;
  location?: string;
  type: string;
  responsibilities: string[];
}

export interface Education {
  institution: string;
  degree: string;
  location: string;
  period: string;
  gpa: string;
}

export interface Award {
  title: string;
  date: string;
  description: string;
  project?: string;
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: string[];
}

export const personalInfo = {
  name: "Ahmed Nizhan Haikal",
  jobTitle: "Backend & Full-Stack Developer",
  location: "Jakarta, Indonesia",
  siteUrl: "https://www.nizhan.dev",
  resume: "/ahmed-nizhan-haikal-cv.pdf",
  email: "ahmed.nizhan@gmail.com",
  github: "https://github.com/InMyDream21",
  linkedin: "https://www.linkedin.com/in/nizhan-haikal/",
  // Short, SERP-safe (<160 chars). Full version lives in `summary` for on-page copy.
  metaDescription:
    "Backend & full-stack developer building scalable APIs and systems with .NET, Node.js, Java, and React. CS graduate with internship and real-world experience.",
  summary:
    "Software engineer who builds full-stack and backend systems end to end ranging from a geospatial vehicle-tracking platform to event-driven microservices with .NET, Node.js, Java, and React. I care about clean data models, secure authentication, and APIs that hold up in production.",
};

export const experiences: Experience[] = [
  {
    company: "Sagara Technology",
    role: "Fullstack Developer",
    period: "May 2026 - Present",
    type: "Full-time",
    location: "BSD, Indonesia",
    responsibilities: [
      "Built a full-stack logistics platform that handled 1,000+ orders a day with live location tracking for every vehicle and order, using a React 19 (TanStack Start) frontend and an ElysiaJS/Bun backend in a pnpm monorepo.",
      "Improved routing accuracy by mining location data and generating GraphHopper via-points between stops, so routes followed best routing from historical data.",
      "Modeled the geospatial data in PostgreSQL with PostGIS (through Prisma) to store and query live vehicle positions and location-based alerts.",
      "Built secure JWT authentication (Web Crypto API) with automatic token refresh coordinated across browser tabs.",
      "Delivered a responsive, localized interface using TanStack Query and Router, Ant Design, and Tailwind CSS.",
    ],
  },
  {
    company: "K-Appraisal",
    role: "Software Developer",
    period: "Feb 2026 - Apr 2026",
    type: "Full-time",
    location: "Jakarta, Indonesia",
    responsibilities: [
      "Engineered a scalable full-stack business digitalization platform using React and .NET to streamline enterprise workflows.",
      "Architected database schemas and system data flows for a distributed microservices architecture, ensuring high availability.",
      "Implemented secure authentication, CRUD operations, and strict Role-Based Access Control (RBAC) protocols.",
      "Developed dynamic PDF generation with templating capabilities for flexible business needs.",
      "Built event-driven services using RabbitMQ for streamlined business workflows.",
    ],
  },
  {
    company: "Apple Developer Academy",
    role: "Apple Platform Developer",
    period: "Mar 2025 - Dec 2025",
    type: "Internship",
    location: "South Tangerang, Indonesia",
    responsibilities: [
      "Engineered native iOS and iPadOS applications utilizing Swift, SwiftUI, and SwiftData with a focus on reactive, user-centric interfaces.",
      "Participated in end-to-end product lifecycles, translating user research and prototyping into highly functional UI/UX designs.",
      "Architected cloud-based backend services and REST APIs leveraging FastAPI and Supabase for real-time data synchronization.",
    ],
  },
  {
    company: "Alto Network",
    role: "Backend Developer",
    period: "Sep 2024 - Dec 2024",
    type: "Internship",
    location: "Jakarta, Indonesia",
    responsibilities: [
      "Developed robust backend APIs and internal reporting systems utilizing Java Spring Boot, optimizing secure data retrieval.",
      "Created comprehensive ERD and DFD documentation to bridge complex business requirements with technical system implementations.",
      "Collaborated cross-functionally to ensure strict data accuracy, system reliability, and seamless API integrations.",
    ],
  },
  {
    company: "Bakrie Center Foundation",
    role: "Software Engineer",
    period: "Feb 2024 - Jul 2024",
    type: "Internship",
    location: "Jakarta, Indonesia",
    responsibilities: [
      "Designed and implemented a highly normalized MySQL database schema to securely support core application features.",
      "Built scalable RESTful backend services using Node.js to handle complex business logic and streamline data access.",
      "Acted as technical PIC, coordinating development tasks, conducting code reviews, and effectively communicating requirements with stakeholders.",
    ],
  },
];

export const education: Education[] = [
  {
    institution: "Universitas Pembangunan Nasional Veteran Jakarta",
    location: "Jakarta, Indonesia",
    degree: "Bachelor of Computer Science",
    period: "Aug 2021 - Sep 2025",
    gpa: "3.87/4.0",
  },
];

export const awards: Award[] = [
  {
    title: "Gemastik Finalist",
    date: "Nov 2022",
    description:
      "Top 10 nationally in Kemendikbudristek's Gemastik IT competition.",
    project: "ANKERSAL (Bootstrap, PHP)",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Backend & API Development",
    description:
      "Architecting scalable microservices, RESTful APIs, and event-driven systems.",
    skills: [
      "C#",
      ".NET",
      "Node.js",
      "Java",
      "Spring Boot",
      "Python",
      "FastAPI",
      "Go",
    ],
  },
  {
    category: "Frontend & Mobile",
    description:
      "Building reactive web interfaces and native iOS applications with custom UI components.",
    skills: [
      "React",
      "TypeScript",
      "TanStack",
      "Tailwind CSS",
      "Swift",
      "SwiftUI",
      "SwiftData",
    ],
  },
  {
    category: "Database & Architecture",
    description:
      "Designing normalized schemas and managing data flow for complex applications.",
    skills: [
      "PostgreSQL",
      "MySQL",
      "Prisma",
      "Supabase",
      "RabbitMQ",
      "Microservices",
    ],
  },
  {
    category: "Soft Skills & Leadership",
    description:
      "Coordinating technical requirements, reviewing code, and problem-solving in team environments.",
    skills: [
      "Leadership",
      "Communication",
      "Problem Solving",
      "Team Collaboration",
    ],
  },
];

export const freelanceProjects = [
  {
    title: "Medical Visual Question Answering",
    role: "Freelance Full-Stack Developer",
    description:
      "Developed a medical visual question answering system using TensorFlow. Implemented a custom image upload interface and integrated with a medical knowledge base API to provide accurate answers to medical questions.",
    tags: ["Python", "TensorFlow", "Medical AI", "Fullstack Development"],
  },
  {
    title: "Contraction Timer iOS App",
    role: "Freelance iOS Developer",
    description:
      "Designed and developed a native iOS utility app with a highly reactive UI for calculating contraction frequency. Features include custom tab views and intuitive swipe actions for editing and deleting records.",
    tags: ["SwiftUI", "Reactive UI", "Mobile Development", "UX/UI"],
  },
];
