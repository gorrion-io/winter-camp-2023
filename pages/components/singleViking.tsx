import styles from "../../styles/vikings.module.css"
import { Viking } from "../../types/vikingTypes"


const singleViking: React.FC<{ viking: Viking }> = ({ viking }) => {
    return (
        <div className={styles.singleViking}>
            <h2 className={styles.header}>{viking.fullName}</h2>
            <p className={styles.item}>Presence of Children: {viking.presenceOfChildren ? 'Yes' : 'No'}</p>
            <p className={styles.item}>Age: {viking.age}</p>
            <p className={styles.item}>Hometown: {viking.hometown}</p>
            <p className={styles.item}>Can Fight with Sword: {viking.canFightWithSword ? 'Yes' : 'No'}</p>
            <p className={styles.item}>Can Fight with Axe: {viking.canFightWithAxe ? 'Yes' : 'No'}</p>
            <p className={styles.item}>Can Fight with Spear: {viking.canFightWithSpear ? 'Yes' : 'No'}</p>
        </div>
    );
};

export default singleViking