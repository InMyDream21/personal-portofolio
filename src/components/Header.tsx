import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={`${styles.header} glass`}>
      <nav className={`container ${styles.nav}`}>
        <Link href="/" className={styles.logo}>
          ANH.
        </Link>
        <div className={styles.links}>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
          <div className={styles.divider} />
          <div className={styles.socials}>
            <a href="https://github.com/InMyDream21" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github size={18} />
            </a>
            <a href="https://linkedin.com/in/ahmed-nizhan-haikal" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
