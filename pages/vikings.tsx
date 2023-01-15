import { getVikings } from '../lib/vikings'
import { Viking } from '../types/vikings'
import VikingCard from '../components/VikingCard/VikingCard';
import styles from '../styles/Vikings.module.css';

export default function Vikings({ vikings }: { vikings: Viking[] }) {
  return (
    <div className={styles.container}>
      <h1>Vikings</h1>
      <div className={styles['vikings-grid']}>
        {vikings.map((viking) => (
          <VikingCard key={viking.fullName} viking={viking} />
        ))}
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const vikings = getVikings();
  return { props: { vikings } };
}