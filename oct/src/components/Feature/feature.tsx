import type { ReactNode } from 'react';
import styles from './styles.module.css';

interface FeatureItem {
  title: string;
  description: string;
  image: string;
  alt: string;
}

const FeatureList: FeatureItem[] = [
  {
    title: 'One-Click Task Creation',
    description: 'Add new tasks instantly with a single click or keystroke. No more navigating through multiple menus or popups.',
    image: '/img/features/click-task.png',
    alt: 'One-click task creation interface'
  },
  {
    title: 'Smart Hashtag Filtering',
    description: 'Organize and filter tasks using hashtags. Click any hashtag to instantly view related tasks.',
    image: '/img/features/hashtag-filter.png',
    alt: 'Hashtag filtering system'
  },
  {
    title: 'Quick Pause & Resume',
    description: 'Temporarily pause tasks with one click and resume them later without losing context.',
    image: '/img/features/pause-resume.png',
    alt: 'Task pause and resume feature'
  },
  {
    title: 'Keyboard-First Design',
    description: 'Complete control from your keyboard. Navigate, create, and manage tasks without touching the mouse.',
    image: '/img/features/keyboard-shortcuts.png',
    alt: 'Keyboard shortcuts overlay'
  },
  {
    title: 'Real-time Collaboration',
    description: 'Share task lists with team members and see updates in real-time. Perfect for team projects.',
    image: '/img/features/collaboration.png',
    alt: 'Real-time collaboration interface'
  },
  {
    title: 'Smart Suggestions',
    description: 'AI-powered suggestions for task categorization, due dates, and priority levels based on your patterns.',
    image: '/img/features/ai-suggestions.png',
    alt: 'Smart suggestion system'
  },
  {
    title: 'Cross-Platform Sync',
    description: 'Access your tasks anywhere. Seamless sync across desktop, mobile, and web with offline support.',
    image: '/img/features/sync.png',
    alt: 'Cross-platform synchronization'
  }
];

function FeatureCard({ title, description, image, alt }: FeatureItem) {
  return (
    <div className={styles.card}>
      <div className={styles.cardBorder}>
        <div className={styles.cardContent}>
          <div className={styles.imageContainer}>
            <img src={image} alt={alt} className={styles.featureImage} />
            <div className={styles.imageOverlay} />
          </div>
          <div className={styles.textContainer}>
            <h3 className={styles.featureTitle}>{title}</h3>
            <p className={styles.featureDescription}>{description}</p>
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
            Powerful Features,
            <span className={styles.subtitle}> Minimal Effort</span>
          </h2>
          <p className={styles.sectionDescription}>
            OCT combines powerful task management capabilities with an intuitive one-click interface.
            Everything you need, nothing you don't.
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