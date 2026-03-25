import { personalInfo } from "@/lib/data";
import { ArrowRight, Github } from "lucide-react";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className="container fade-in">
      <div className={styles.hero}>
        <div className={styles.badge}>
          Available for full-time & freelance opportunities
        </div>

        <h1 className={styles.title}>
          Ahmed Nizhan Haikal — Backend & Full-Stack Developer
        </h1>

        <h2 className={styles.name}>
          Building robust{" "}
          <span className={styles.gradientText}>backend systems</span> &
          seamless experiences.
        </h2>

        <p className={styles.summary}>{personalInfo.summary}</p>

        <div className={styles.cta}>
          <a href={`mailto:${personalInfo.email}`} className={styles.button}>
            Get in touch <ArrowRight size={18} />
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondaryButton}
          >
            <Github size={18} /> GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
