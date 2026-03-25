export interface Experience {
  company: string;
  role: string;
  location?: string;
  period: string;
  highlights: string[];
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
  summary: "Computer Science graduate with experience building full-stack and backend systems using .NET, Node.js, and Java. Experienced in API development, database design, and microservice architectures. Fast learner with internship and real-world development experience.",
};

export const experiences: Experience[] = [
  {
    company: "K-Appraisal",
    role: "Software Developer - Full-time",
    period: "Feb 2026 - Present",
    highlights: [
      "Designed and developed a full-stack business digitalization platform using React and .NET.",
      "Architected system data flow and database schema for scalable microservice-based architecture.",
      "Implemented authentication, CRUD operations, and role-based access control (RBAC).",
      "Built a dynamic PDF generation system using rich-text templates and event-driven services with RabbitMQ.",
    ],
  },
  {
    company: "Apple Developer Academy",
    location: "South Tangerang, Indonesia",
    role: "Apple Platform Developer - Internship",
    period: "Mar 2025 - Dec 2025",
    highlights: [
      "Developed iOS/iPadOS applications using Swift, SwiftUI, and SwiftData.",
      "Participated in end-to-end product development including user research, prototyping, and UI design.",
      "Built backend services using FastAPI and Supabase.",
    ],
  },
  {
    company: "Alto Network",
    location: "Jakarta, Indonesia",
    role: "Backend Developer - Internship",
    period: "Sep 2024 - Dec 2024",
    highlights: [
      "Developed and maintained backend services using Java Spring Boot for internal reporting systems.",
      "Created ERD and DFD documentation to align business requirements with system implementation.",
      "Collaborated with team members to ensure data accuracy and system reliability.",
    ],
  },
  {
    company: "Bakrie Center Foundation",
    location: "Jakarta, Indonesia",
    role: "Software Engineer - Internship",
    period: "Feb 2024 - Jul 2024",
    highlights: [
      "Designed and implemented a normalized MySQL database schema to support core application features.",
      "Built RESTful backend services using Node.js to handle business logic and data access.",
      "Acted as PIC, coordinating tasks, reviewing code, and communicating technical requirements with stakeholders.",
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
    description: "Gemastik Finalist, Top 10 National Competition (Kemendikbudristek) | 2022",
    project: "ANKERSAL (Bootstrap, PHP)",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Hard Skills",
    skills: ["C#", ".Net", "TypeScript", "Python", "React", "Node.js", "Swift", "Java", "Go"],
  },
  {
    category: "Soft Skills",
    skills: ["Leadership", "Communication", "Problem Solving", "Team Collaboration"],
  },
];
