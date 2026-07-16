import { personalInfo } from '@/lib/data';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.content}`}>
        <p className="text-gray">© {new Date().getFullYear()} {personalInfo.name}</p>
        <div className={styles.socials}>
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">GitHub<span className="sr-only"> (opens in new tab)</span></a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn<span className="sr-only"> (opens in new tab)</span></a>
          <a href={`mailto:${personalInfo.email}`}>Email</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
