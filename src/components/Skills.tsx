import { skillCategories } from "@/lib/data";
import { Cpu } from "lucide-react";
import styles from "./Skills.module.css";

const Skills = () => {
  return (
    <section id="skills" className="container">
      <div className={styles.sectionHeader}>
        <Cpu className={styles.icon} />
        <h2>Skills & Expertise</h2>
      </div>
      <div className={styles.grid}>
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className={`${styles.category} fade-in stagger-${index + 1}`}
          >
            <h3 className={styles.categoryTitle}>{category.category}</h3>

            {/* NEW: SEO-friendly description text */}
            {category.description && (
              <p className={styles.categoryDescription}>
                {category.description}
              </p>
            )}

            <div className={styles.skillList}>
              {category.skills.map((skill, idx) => (
                <span key={idx} className={styles.skillBadge}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
