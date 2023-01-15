import { Viking } from "../../types/vikings";
import styles from './VikingCard.module.css';

const VikingCard = ({ viking }: { viking: Viking }) => {
  return (
    <div className={styles.card}>
      <h1 className={styles.title}>{viking.fullName}</h1>
      <ul className={styles.list}>
        <li className={styles['list-item']}>
          Has childrens: {viking.presenceOfChildren ? "Yes" : "No"}
        </li>
        <li className={styles['list-item']}>
          Age: {viking.age}
        </li>
        <li className={styles['list-item']}>
          Hometown: {viking.hometown}
        </li>
        <li className={styles['list-item']}>
          Can fight with sword: {viking.canFightWithSword ? "Yes" : "No"}
        </li>
        <li className={styles['list-item']}>
          Can fight with spear: {viking.canFightWithSpear ? "Yes" : "No"}
        </li>
        <li className={styles['list-item']}>
          Can fight with axe: {viking.canFightWithAxe ? "Yes" : "No"}
        </li>
      </ul>
    </div>
  )
}

export default VikingCard;