import { Viking } from "../../types";
import styles from "./VikingCard.module.css";
import VikingWeaponAbility from "../VikingWeaponAbility";

interface Props {
  viking: Viking;
  backgroundImage: string;
}

export default function VikingCard({ viking, backgroundImage }: Props) {
  return (
    <div
      className={styles.wrapper}
      style={{ backgroundImage: `url("${backgroundImage}")` }}
    >
      <h4>{viking.fullName}</h4>
      <p>age: {viking.age}</p>
      <p>children: {viking.presenceOfChildren ? "yes" : "no"}</p>
      <p>hometown: {viking.hometown}</p>
      <VikingWeaponAbility
        state={viking.canFightWithAxe}
        weapon="axe"
      />
      <VikingWeaponAbility
        state={viking.canFightWithSpear}
        weapon="spear"
      />
      <VikingWeaponAbility
        state={viking.canFightWithSword}
        weapon="sword"
      />
    </div>
  );
}
