import { personalInfo } from "@/lib/data";
import { ArrowRight, Download, Github } from "lucide-react";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className="container fade-in" aria-label="Introduction">
      <div className={styles.hero}>
        <div className={styles.badge}>
          Open to freelance & new opportunities
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
            Get in touch <ArrowRight size={18} aria-hidden />
          </a>
          <a
            href={personalInfo.resume}
            download
            className={styles.secondaryButton}
          >
            <Download size={18} aria-hidden /> Download CV
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondaryButton}
          >
            <Github size={18} aria-hidden /> GitHub
            <span className="sr-only"> (opens in new tab)</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
