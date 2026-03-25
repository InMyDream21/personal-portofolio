import { experiences } from '@/lib/data';
import { Briefcase } from 'lucide-react';
import styles from './Experience.module.css';

const Experience = () => {
  return (
    <section id="experience" className="container">
      <div className={styles.sectionHeader}>
        <Briefcase className={styles.icon} />
        <h2>Work Experience</h2>
      </div>
      <div className={styles.timeline}>
        {experiences.map((exp, index) => (
          <div key={index} className={`${styles.item} fade-in stagger-${index + 1}`}>
            <div className={styles.card}>
              <div className={styles.header}>
                <h3 className={styles.company}>{exp.company}</h3>
                <span className={styles.period}>{exp.period}</span>
              </div>
              <div className={styles.subHeader}>
                <span className={styles.role}>{exp.role}</span>
                {exp.location && <span className={styles.location}>{exp.location}</span>}
              </div>
              <ul className={styles.highlights}>
                {exp.highlights.map((highlight, idx) => (
                  <li key={idx}>{highlight}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
