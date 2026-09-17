import Link from "next/link";
import { ArrowUpRight, Download, Github, Linkedin, Mail } from "lucide-react";
import {
  awards,
  education,
  experiences,
  freelanceProjects,
  personalInfo,
  skillCategories,
} from "@/lib/data";
import styles from "./PortfolioPreview.module.css";

export default function PortfolioPreview() {
  return (
    <main className={styles.preview}>
      <header className={styles.header}>
        <Link
          href="/"
          className={styles.mark}
          aria-label={`${personalInfo.name} home`}
        >
          ANH<span>.</span>
        </Link>
        <nav className={styles.nav} aria-label="Portfolio sections">
          <a href="#work">Work</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
        <a
          className={styles.headerContact}
          href={`mailto:${personalInfo.email}`}
        >
          Contact
        </a>
      </header>

      <section
        className={styles.hero}
        id="content"
        aria-labelledby="hero-title"
      >
        <p className={styles.eyebrow}>
          Ahmed Nizhan Haikal · Jakarta, Indonesia
        </p>
        <h1 id="hero-title">
          I build the systems that let products keep their promises.
        </h1>
        <div className={styles.heroLower}>
          <p>
            Backend and full-stack engineer focused on dependable APIs,
            event-driven services, and data-heavy products.
          </p>
          <div className={styles.actions}>
            <a
              className={styles.primaryAction}
              href={`mailto:${personalInfo.email}`}
            >
              Write to me <ArrowUpRight aria-hidden="true" size={18} />
            </a>
            <a
              className={styles.secondaryAction}
              href={personalInfo.resume}
              download
            >
              <Download aria-hidden="true" size={17} /> Download CV
            </a>
          </div>
        </div>
      </section>

      <section className={styles.profile} aria-label="Profile">
        <p>{personalInfo.name}</p>
        <p>{personalInfo.jobTitle}</p>
        <p>{personalInfo.location}</p>
      </section>

      <section className={styles.work} id="work" aria-labelledby="work-title">
        <div className={styles.sectionLead}>
          <p className={styles.sectionIndex}>01</p>
          <div>
            <p className={styles.kicker}>A record of shipping</p>
            <h2 id="work-title">
              Experience built around systems that have to work.
            </h2>
          </div>
        </div>
        <ol className={styles.experienceList}>
          {experiences.map((experience) => (
            <li
              key={`${experience.company}-${experience.period}`}
              className={styles.experience}
            >
              <p className={styles.experiencePeriod}>{experience.period}</p>
              <div>
                <h3>{experience.company}</h3>
                <p className={styles.role}>{experience.role}</p>
              </div>
              <ul>
                {experience.responsibilities
                  .slice(0, 2)
                  .map((responsibility) => (
                    <li key={responsibility}>{responsibility}</li>
                  ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>

      <section
        className={styles.projects}
        id="projects"
        aria-labelledby="projects-title"
      >
        <div className={styles.sectionLead}>
          <p className={styles.sectionIndex}>02</p>
          <div>
            <p className={styles.kicker}>Independent work</p>
            <h2 id="projects-title">
              Selected projects, kept close to the problem.
            </h2>
          </div>
        </div>
        <div className={styles.projectList}>
          {freelanceProjects.map((project, index) => (
            <article className={styles.project} key={project.title}>
              <p className={styles.projectNumber}>0{index + 1}</p>
              <div>
                <p className={styles.role}>{project.role}</p>
                <h3>{project.title}</h3>
              </div>
              <p>{project.description}</p>
              <ul
                className={styles.tags}
                aria-label={`${project.title} technologies`}
              >
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section
        className={styles.skills}
        id="skills"
        aria-labelledby="skills-title"
      >
        <div className={styles.sectionLead}>
          <p className={styles.sectionIndex}>03</p>
          <div>
            <p className={styles.kicker}>Tools I reach for</p>
            <h2 id="skills-title">A practical stack, shaped by the work.</h2>
          </div>
        </div>
        <div className={styles.skillColumns}>
          {skillCategories.slice(0, 3).map((category) => (
            <article key={category.category}>
              <h3>{category.category}</h3>
              <p>{category.description}</p>
              <ul>
                {category.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.education} aria-labelledby="education-title">
        <div>
          <p className={styles.sectionIndex}>04</p>
          <h2 id="education-title">Background</h2>
        </div>
        <div>
          {education.map((item) => (
            <article key={item.institution}>
              <h3>{item.degree}</h3>
              <p>
                {item.institution}, {item.location}
              </p>
              <p>
                {item.period} · GPA {item.gpa}
              </p>
            </article>
          ))}
          {awards.map((award) => (
            <article key={`${award.title}-${award.date}`}>
              <p className={styles.role}>Achievement · {award.date}</p>
              <h3>{award.title}</h3>
              <p>{award.description}</p>
              {award.project && <p>{award.project}</p>}
            </article>
          ))}
        </div>
      </section>

      <footer className={styles.footer} id="contact">
        <div>
          <p className={styles.kicker}>Let&apos;s talk</p>
          <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
        </div>
        <div className={styles.socials} aria-label="Social links">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github aria-hidden="true" size={18} /> GitHub
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin aria-hidden="true" size={18} /> LinkedIn
          </a>
          <a href={`mailto:${personalInfo.email}`}>
            <Mail aria-hidden="true" size={18} /> Email
          </a>
        </div>
      </footer>
    </main>
  );
}
