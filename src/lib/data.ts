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
  skills: string[];
}

export const personalInfo = {
  name: "Ahmed Nizhan Haikal",
  email: "ahmed.nizhan@gmail.com",
  phone: "+6285156271326",
  github: "https://github.com/InMyDream21",
  linkedin: "https://linkedin.com/in/ahmed-nizhan-haikal", // Assuming standard LinkedIn URL
  summary:
    "Computer Science graduate with experience building full-stack and backend systems using .NET, Node.js, and Java. Experienced in API development, database design, and microservice architectures. Fast learner with internship and real-world development experience.",
};

export const experiences = [
  {
    company: "K-Appraisal",
    role: "Software Developer",
    period: "Feb 2026 - Present",
    type: "Full-time",
    location: "Jakarta, Indonesia",
    responsibilities: [
      "Engineered a scalable full-stack business digitalization platform using React and .NET to streamline enterprise workflows.",
      "Architected database schemas and system data flows for a distributed microservices architecture, ensuring high availability.",
      "Implemented secure authentication, CRUD operations, and strict Role-Based Access Control (RBAC) protocols.",
      "Developed an event-driven dynamic PDF generation service utilizing RabbitMQ for asynchronous processing and automated reporting.",
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
      "Gemastik Finalist, Top 10 National Competition (Kemendikbudristek) | 2022",
    project: "ANKERSAL (Bootstrap, PHP)",
  },
];

export const skillCategories = [
  {
    category: "Backend & API Development",
    description:
      "Architecting scalable microservices, RESTful APIs, and event-driven systems.",
    skills: ["C#", ".NET", "Node.js", "Java", "Go", "Python"],
  },
  {
    category: "Frontend & Mobile",
    description:
      "Building reactive web interfaces and native iOS applications with custom UI components.",
    skills: ["React", "TypeScript", "Swift", "SwiftUI"],
  },
  {
    category: "Database & Architecture",
    description:
      "Designing normalized schemas and managing data flow for complex applications.",
    skills: ["MySQL", "Supabase", "RabbitMQ", "Microservices"],
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
