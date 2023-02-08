import Link from 'next/link'
import styles from 'styles/Home.module.scss'

export default function Home() {
  return (
    <>
      <h1 className={styles.title}>
        <Link href="vikings">Click to meet the squad for the upcoming expedition to England!!</Link>
      </h1>
    </>
  )
}
