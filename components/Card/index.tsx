import type { IVikingProp } from 'types'
import styles from './Card.module.scss'
import Image from 'next/image'

const Card = ({ viking }: IVikingProp) => {
  return (
    <div className={styles.card}>
      <div className={styles.infoSection}>
        <Image className="styles.img" src="/images/logo.svg" height={150} width={150} alt="avatar" />
        <h2>{`${viking.fullName}`}</h2>
        <h3>{`Age ${viking.age}`}</h3>
      </div>
      <div className={`${styles.infoSection} ${styles.rightSection}`}>
        <h2 className={styles.info}>From town {viking.hometown}</h2>
        <h2>{`${viking.presenceOfChildren ? 'He has children' : 'He has no children'}`}</h2>
        <h2>{`${viking.canFightWithAxe ? 'Can fight with an axe!' : `Can't fight with an axe.`}`}</h2>
        <h2>{`${viking.canFightWithSword ? 'Can fight with a sword!' : `Can't fight with a sword.`}`}</h2>
        <h2>{`${viking.canFightWithSpear ? 'Can fight with a spear!' : `Can't fight with a spear.`}`}</h2>
      </div>
    </div>
  )
}

export default Card
