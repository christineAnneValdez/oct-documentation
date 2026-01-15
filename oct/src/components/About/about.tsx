import type { ReactNode } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function HomepageAbout(): ReactNode {
  const octDashboard = useBaseUrl('img/oct-dashboard.png');
  const octTask = useBaseUrl('img/oct-task.png');
  return (
    <section className={styles.section}>
      <div className={clsx('container', styles.grid)}>

        <div>
          <img
            src={octDashboard}
            alt="OCT Dashboard"
            className={styles.image}
          />
        </div>

        <div className={styles.card}>
          <h2 className={styles.title}>
            The Thinking Behind <br /> One Click Task
          </h2>
          <p className={styles.text}>
            <strong>OCT (One Click Task)</strong> was created to address the slow
            and cluttered experience common in many task management apps.
            Most tools require multiple steps just to add or update tasks,
            which can be inefficient for users who manage tasks throughout the day.
            OCT focuses on speed and simplicity by offering a true one-click workflow,
            allowing users to add and manage tasks instantly—without unnecessary
            steps or extra navigation.
          </p>
        </div>

        <div className={styles.card}>
          <h2 className={styles.title}>
            The One-Click <br /> Inspiration
          </h2>
          <p className={styles.text}>
            <strong>OCT</strong> was built to make task management faster,
            simpler, and stress-free. Inspired by the idea of <strong>“one click,”</strong>
            it removes clutter and complexity so you can add, organize, and manage
            tasks effortlessly without slowing you down.
          </p>
        </div>

        <div>
          <img
            src={octTask}
            alt="One Click Task UI"
            className={styles.image}
          />
        </div>

      </div>
    </section>
  );
}
