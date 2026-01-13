import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function HomepageFeatures() {
  const octImage = useBaseUrl('img/oct.png'); // prepends baseUrl automatically

  return (
    <section className={styles.afterButtonsSection}>
       <img
        src={octImage}
        alt="App preview"
        className={styles.floatingImage}
      />
      <div className={clsx('container', styles.content)}></div>
    </section>
  );
}
