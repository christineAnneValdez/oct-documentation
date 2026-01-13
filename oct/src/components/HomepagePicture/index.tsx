import type { ReactNode } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.afterButtonsSection}>
       <img
        src="/img/oct.png"
        alt="App preview"
        className={styles.floatingImage}
      />
      <div className={clsx('container', styles.content)}>
      
      </div>
    </section>
  );
}
