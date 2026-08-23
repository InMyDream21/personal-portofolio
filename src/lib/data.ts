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
    "Full-Stack & Backend Engineer with extensive experience architecting event-driven microservices, high-throughput APIs, and distributed data systems using .NET Core, Java Spring Boot, Node.js/Bun, and PostgreSQL/PostGIS. Proven track record of scaling logistics and enterprise platforms to 5,000+ daily orders and implementing secure RBAC, asynchronous messaging via RabbitMQ, and geospatial indexing. CS graduate (3.87 GPA) and Apple Developer Academy alumnus experienced in cross-functional agile teams.",
};

export const experiences: Experience[] = [
  {
    company: "Sagara Technology",
    role: "Fullstack Developer (Outsource at Treffix)",
    period: "May 2026 - Present",
    type: "Full-time",
    location: "BSD, Indonesia",
    responsibilities: [
      "Scaled end-to-end logistics platform throughput to handle 5,000+ daily active orders by engineering a high-performance backend with ElysiaJS/Bun and a React 19 (TanStack Start) frontend in a pnpm monorepo.",
      "Boosted routing efficiency and delivery precision by extracting historical tracking data and dynamically calculating GraphHopper via-points between designated route stops.",
      "Optimized spatial query latency for real-time fleet positions and boundary triggers by architecting geospatial schemas in PostgreSQL/PostGIS using Prisma.",
      "Strengthened client-side session security by building a cross-tab synchronized JWT authentication system using native Web Crypto APIs with silent token refresh.",
      "Enhanced user experience through a localized, responsive dashboard featuring real-time data visualization and simplified workflows.",
    ],
  },
  {
    company: "K-Appraisal",
    role: "Software Developer",
    period: "Feb 2026 - Apr 2026",
    type: "Full-time",
    location: "Jakarta, Indonesia",
    responsibilities: [
      "Architected scalable enterprise microservices across core business domains using ASP.NET Core and React, decoupling monolithic workflows into maintainable distributed services.",
      "Decoupled high-volume asynchronous tasks by implementing event-driven message queuing with RabbitMQ, preventing workflow bottlenecks and ensuring eventual consistency across services.",
      "Hardened enterprise API security by engineering fine-grained Role-Based Access Control (RBAC) and JWT validation across all service entry points.",
      "Automated reporting workflows by building a dynamic PDF generation engine supporting customized business templates, eliminating manual report assembly.",
      "Enhanced data reliability and transaction integrity by normalizing relational database schemas and establishing structured repository patterns in C#/.NET.",
    ],
  },
  {
    company: "Apple Developer Academy",
    role: "Apple Platform Developer",
    period: "Mar 2025 - Dec 2025",
    type: "Internship",
    location: "South Tangerang, Indonesia",
    responsibilities: [
      "Shipped production-grade native iOS/iPadOS applications utilizing Swift, SwiftUI, and SwiftData, prioritizing reactive UIs, data persistence, and fluid user interactions.",
      "Drove end-to-end product delivery cycles within an agile environment, iterating from rapid interactive prototyping and user research to final app builds.",
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
      "Engineered robust RESTful backend services and reporting systems with Java Spring Boot to facilitate secure, high-integrity financial network data processing.",
      "Accelerated developer onboarding and feature delivery by creating standardized ERD and DFD technical documentation across complex integration touchpoints.",
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
      "Led technical project execution and team delivery as PIC, coordinating sprint milestones, conducting code reviews, and aligning business requirements with engineering output.",
      "Architected normalized MySQL database schemas to secure mission-critical data models and minimize transactional redundancy.",
      "Developed scalable Node.js REST APIs to power core institutional application workflows and streamline client-side data access.",
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
