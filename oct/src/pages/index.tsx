import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepagePicture';
import HomepageAbout from '@site/src/components/About/about';
import HomepageFeature from '@site/src/components/Feature/feature';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  return (
    <main className={styles.headingGridBackground}>
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          <div className={styles.title}>
              <span className={styles.purple}>OCT – One Click Task:</span> Manage
              <span className={styles.subtitle}>Everything with a Single Click</span>
          </div>
        </Heading>
          <p className={styles.description}> One Click Task is a new type of to-do list application designed for efficiency and ease of
            use. Upon login or page visit, the input field is immediately focused, allowing users to quickly enter new tasks. The list of current
            tasks can be filtered by hashtags with just a click, making organization straightforward. Additionally, tasks that cannot be immediately attended to can be paused or postponed with a single click.</p>
          <div className={styles.buttons}>
            <Link
            className={clsx('button button--lg', styles.darkButton, styles.shadowButton)}
            href="https://github.com/your-org/your-repo"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Link>
          <Link
            className={clsx('button button--primary button--lg', styles.shadowButton)}
            to=""
          >
            Get Started
          </Link>
        </div>
      </div>
      </header>
      </main>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
      <HomepageAbout />
      <HomepageFeature />
    </Layout>
  );
}
