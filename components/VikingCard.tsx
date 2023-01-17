import { Viking } from "../types/viking";
import styles from "../styles/VikingCard.module.css";
const VikingCard = ({ viking }: { viking: Viking }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardFullName}>{viking.fullName}</div>
      <div className={styles.cardAge}>Age: {viking.age}</div>
      <div className={styles.cardHomeTown}>Town: {viking.hometown}</div>
      <div className={styles.cardChildren}>
        {viking.presenceOfChildren ? "Has children" : "Childless"}
      </div>
      <div>
        Fight with
        {viking.canFightWithSword
          ? " Sword"
          : viking.canFightWithAxe
          ? " Axe"
          : viking.canFightWithSpear
          ? " Spear"
          : " Hammer"}
      </div>
    </div>
  );
};

export default VikingCard;
