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
          <a href="#background">Background</a>
          <a href="#contact">Contact</a>
        </nav>
        <a
          className={styles.headerContact}
          href={`mailto:${personalInfo.email}`}
        >
          Email me
        </a>
      </header>

      <section
        className={styles.hero}
        id="content"
        aria-labelledby="hero-title"
      >
        <p className={styles.eyebrow}>
          {personalInfo.name} · {personalInfo.jobTitle} ·{" "}
          {personalInfo.location}
        </p>
        <h1 id="hero-title">
          I build the systems that let products keep their promises.
        </h1>
        <div className={styles.heroLower}>
          <div className={styles.heroCopy}>
            <p className={styles.heroLead}>
              Backend and full-stack engineer focused on dependable APIs,
              event-driven services, and data-heavy products.
            </p>
            <p className={styles.heroSummary}>{personalInfo.summary}</p>
          </div>
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

      <section className={styles.work} id="work" aria-labelledby="work-title">
        <div className={styles.sectionLead}>
          <p className={styles.sectionIndex}>01 / Career</p>
          <h2 id="work-title">
            Experience built around systems that have to work.
          </h2>
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
                <p className={styles.experienceMeta}>
                  {experience.type}
                  {experience.location ? ` · ${experience.location}` : ""}
                </p>
              </div>
              {experience.responsibilities.length > 0 ? (
                <ul>
                  {experience.responsibilities.map((responsibility) => (
                    <li key={responsibility}>{responsibility}</li>
                  ))}
                </ul>
              ) : (
                <p className={styles.currentRoleNote}>
                  Recently joined the backend engineering team in Jakarta.
                </p>
              )}
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
          <p className={styles.sectionIndex}>02 / Independent Work</p>
          <h2 id="projects-title">
            Selected projects, kept close to the problem.
          </h2>
        </div>
        <div className={styles.projectList}>
          {freelanceProjects.map((project, index) => (
            <article className={styles.project} key={project.title}>
              <div className={styles.projectHeader}>
                <span className={styles.projectNumber}>0{index + 1}</span>
                <div>
                  <h3>{project.title}</h3>
                  <p className={styles.role}>{project.role}</p>
                </div>
              </div>
              <p className={styles.projectDescription}>{project.description}</p>
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
          <p className={styles.sectionIndex}>03 / Technical Stack</p>
          <h2 id="skills-title">A practical stack, shaped by the work.</h2>
        </div>
        <div className={styles.skillColumns}>
          {skillCategories.map((category) => (
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

      <section
        className={styles.education}
        id="background"
        aria-labelledby="education-title"
      >
        <div className={styles.educationLead}>
          <p className={styles.sectionIndex}>04 / Background</p>
          <h2 id="education-title">Education, Awards &amp; Research</h2>
        </div>
        <div>
          {education.map((item) => (
            <article key={item.institution}>
              <p className={styles.awardMeta}>Education · {item.period}</p>
              <h3>{item.degree}</h3>
              <p>
                {item.institution}, {item.location}
              </p>
              <p>GPA {item.gpa}</p>
            </article>
          ))}
          {awards.map((award) => (
            <article key={`${award.title}-${award.date}`}>
              <p className={styles.awardMeta}>
                {award.type} · {award.date}
              </p>
              <h3>
                {award.url ? (
                  <a
                    href={award.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.awardLink}
                  >
                    <span>{award.title}</span>
                    <ArrowUpRight aria-hidden="true" size={16} />
                    <span className="sr-only"> (opens in new tab)</span>
                  </a>
                ) : (
                  award.title
                )}
              </h3>
              <p>{award.description}</p>
              {award.project && <p>Project: {award.project}</p>}
            </article>
          ))}
        </div>
      </section>

      <footer className={styles.footer} id="contact">
        <div>
          <p className={styles.kicker}>Direct contact</p>
          <a className={styles.footerEmail} href={`mailto:${personalInfo.email}`}>
            {personalInfo.email}
          </a>
        </div>
        <div className={styles.socials} aria-label="Social links">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github aria-hidden="true" size={18} /> GitHub
            <span className="sr-only"> (opens in new tab)</span>
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin aria-hidden="true" size={18} /> LinkedIn
            <span className="sr-only"> (opens in new tab)</span>
          </a>
          <a href={`mailto:${personalInfo.email}`}>
            <Mail aria-hidden="true" size={18} /> Email
          </a>
        </div>
      </footer>
    </main>
  );
}
