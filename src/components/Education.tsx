import { education, awards } from '@/lib/data';
import { GraduationCap, Trophy } from 'lucide-react';
import styles from './Education.module.css';

const Education = () => {
  return (
    <section id="education" className="container">
      <div className={styles.sectionHeader}>
        <GraduationCap className={styles.icon} />
        <h2>Education & Background</h2>
      </div>
      <div className={styles.grid}>
        <div className={`fade-in stagger-1 ${styles.columnCard}`}>
          <h3 className={styles.cardTitle}>Education</h3>
          <div className={styles.list}>
            {education.map((edu, index) => (
              <div key={index} className={styles.item}>
                <h3 className={styles.institution}>{edu.institution}</h3>
                <p className={styles.degree}>{edu.degree}</p>
                <div className={styles.footer}>
                  <span className={styles.period}>{edu.period}</span>
                  <span className={styles.gpa}>GPA: {edu.gpa}</span>
                </div>
                <p className={styles.location}>{edu.location}</p>
              </div>
            ))}
          </div>
        </div>
        <div className={`fade-in stagger-2 ${styles.columnCard}`}>
          <h3 className={styles.cardTitle}>Awards</h3>
          <div className={styles.list}>
            {awards.map((award, index) => (
              <div key={index} className={styles.item}>
                <h3 className={styles.awardTitle}>{award.title}</h3>
              <p className={styles.awardDesc}>{award.description}</p>
              {award.project && (
                <div className={styles.projectBadge}>
                  Project: {award.project}
                </div>
              )}
                <span className={styles.awardDate}>{award.date}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
