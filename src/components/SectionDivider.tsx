import styles from './SectionDivider.module.css';

interface SectionDividerProps {
  label?: string;
}

const SectionDivider = ({ label }: SectionDividerProps) => {
  return (
    <div className={styles.divider}>
      <div className={styles.line}></div>
      {label && (
        <span className={styles.label}>
          <span className={styles.dot}></span>
          {label}
        </span>
      )}
      <div className={styles.bottomLine}></div>
    </div>
  );
};

export default SectionDivider;