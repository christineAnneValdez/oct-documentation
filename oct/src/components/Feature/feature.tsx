import type { ReactNode } from 'react';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { FaPlay } from 'react-icons/fa';
interface FeatureItem {
  title: string;
  description: string;
  image: string;
  alt: string;
}

const FeatureList: FeatureItem[] = [
  {
    title: 'Instant Task Creation',
    description:
      'The input field can serve as a search bar or create a new task instantly with just one enter.',
    image: '/img/InstantTaskCreation.png',
    alt: 'One-click task creation interface',
  },
  {
    title: 'One-Click Task Applications',
    description:
      'Easily customize and manage tasks with one click set colors, star or flag them, update their status instantly, and move tasks to Backlog or Trash effortlessly.',
    image: '/img/InstantTaskCreation.png',
    alt: 'One-Click Task applications',
  },
  {
    title: 'Hashtag Filtering',
    description:
      'Automatically detect hashtags and filter tasks instantly by category with a single click.',
    image: '/img/InstantTaskCreation.png',
    alt: 'Hashtag Filtering',
  },
  {
    title: 'Task Advance Options (Time Quick-Add Feature)',
    description:
      'Users can quickly set due dates by selecting preset time options, automatically updating the task deadline with a single click.',
    image: '/img/InstantTaskCreation.png',
    alt: 'Task Advance Options (Time Quick-Add Feature)',
  },
];

function FeatureCard({ title, description, image, alt }: FeatureItem) {
  const imageUrl = useBaseUrl(image);

  return (
    <div className={styles.card}>
      <div className={styles.cardBorder}>
        <div className={styles.cardContent}>
          <div className={styles.imageContainer}>
  <Link
    to="/docs/features" /* change this to your target */
    className={styles.playLink}
    aria-label="Play feature demo"
  >
    <img
      src={imageUrl}
      alt={alt}
      className={styles.featureImage}
    />

    <span className={styles.playButton}>
       <FaPlay />
    </span>

    <div className={styles.imageOverlay} />
  </Link>
</div>


          <div className={styles.textContainer}>
            <h3 className={styles.featureTitle}>{title}</h3>
            <p className={styles.featureDescription}>{description}</p>

            <Link className={styles.getStartedButton} to="/docs/intro">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.featuresSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>
            Powerful Features
            <span className={styles.subtitle}> Minimal Effort</span>
          </h2>
          <p className={styles.sectionDescription}>
            Everything you need to manage tasks efficiently without clutter.
          </p>
        </div>

        <div className={styles.featuresGrid}>
          {FeatureList.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
