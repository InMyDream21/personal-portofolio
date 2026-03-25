import { freelanceProjects } from "@/lib/data";
import styles from "./Projects.module.css";

const Projects = () => {
  return (
    <section className="container fade-in" id="projects">
      <div className={styles.header}>
        <h2 className={styles.sectionTitle}>Freelance & Selected Projects</h2>
        <p className={styles.sectionSubtitle}>
          Recent applications and systems I have built for independent clients.
        </p>
      </div>

      <div className={styles.grid}>
        {freelanceProjects.map((project, index) => (
          <article key={index} className={styles.card}>
            <div className={styles.cardHeader}>
              <span className={styles.role}>{project.role}</span>
              <h3 className={styles.projectTitle}>{project.title}</h3>
            </div>

            <p className={styles.description}>{project.description}</p>

            <ul className={styles.tags}>
              {project.tags.map((tag, i) => (
                <li key={i} className={styles.tag}>
                  {tag}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
