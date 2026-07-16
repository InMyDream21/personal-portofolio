import Link from "next/link";
import { Github, Linkedin } from "lucide-react";
import { personalInfo } from "@/lib/data";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={`${styles.header} glass`}>
      <nav className={`container ${styles.nav}`}>
        <Link href="/" className={styles.logo}>
          ANH.
        </Link>
        <div className={styles.links}>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
          <div className={styles.divider} />
          <div className={styles.socials}>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub (opens in new tab)"
            >
              <Github size={18} aria-hidden />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn (opens in new tab)"
            >
              <Linkedin size={18} aria-hidden />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
