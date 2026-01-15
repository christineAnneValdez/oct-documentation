import type { ReactNode } from 'react';
import styles from './styles.module.css';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
} from 'react-icons/fa';

export default function PoweredTechnologies(): ReactNode {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>Powered by Modern Technologies</h2>

        <div className={styles.grid}>
          <div className={styles.card}>
            <FaHtml5 className={styles.icon} />
            <span className={styles.label}>HTML5</span>
          </div>

          <div className={styles.card}>
            <FaCss3Alt className={styles.icon} />
            <span className={styles.label}>CSS3</span>
          </div>

          <div className={styles.card}>
            <FaJs className={styles.icon} />
            <span className={styles.label}>JavaScript</span>
          </div>

          <div className={styles.card}>
            <FaReact className={styles.icon} />
            <span className={styles.label}>React</span>
          </div>

          <div className={styles.card}>
            <FaNodeJs className={styles.icon} />
            <span className={styles.label}>Node.js</span>
          </div>
        </div>
      </div>
    </section>
  );
}
