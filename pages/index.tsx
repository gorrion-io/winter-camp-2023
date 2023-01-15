import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.head}>
      <h1>Hello Ragnar!</h1>
      <Link href={"http://localhost:3000/vikings"} className={styles.headLink}>
        <h3>Click here to display the team!</h3>
      </Link>
    </div>
  );
}
