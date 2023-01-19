import Image from "next/image";
import { VikingWeapon } from "../../types";
import styles from "./VikingWeaponAbility.module.css";

interface Props {
  state: boolean;
  weapon: VikingWeapon;
}

export default function VikingWeaponAbility({ state, weapon }: Props) {
  const imageProps = {
    src: state ? `/${weapon}.png` : "/cantfight.jpg",
    alt: state
      ? `Viking can fight with ${weapon}`
      : `Viking can not fight with ${weapon}`,
  };
  return (
    <div className={styles.wrapper}>
      can fight with {weapon}
      <Image
        src={imageProps.src}
        alt={imageProps.alt}
        width={20}
        height={20}
      />
    </div>
  );
}
