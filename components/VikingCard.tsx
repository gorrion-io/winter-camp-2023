import React from 'react'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import axePNG from '../assets/axes.png'
import unknownPNG from '../assets/unknown.png'
import swordPNG from '../assets/sword.png'
import spearPNG from '../assets/spear.png'

type Viking = {
    fullName: string
    presenceOfChildren: boolean
    age: number
    hometown: string
    canFightWithSword: boolean
    canFightWithAxe: boolean
    canFightWithSpear: boolean
}

const VikingCard = ({ viking }: { viking: Viking }): JSX.Element => {
    return (
        <div className={styles.vikingCard}>
            <div className='age-and-header'>
                <div className={styles.cardHeader}>{viking.fullName}</div>
                <div className={styles.cardAge}>{viking.age} years old</div>
            </div>
            <div className={styles.cardDivider}></div>
            <div className='origin-and-children'>
                <div className={styles.cardOrigin}>
                    Origin: {viking.hometown}
                </div>
                <div className={styles.cardChildren}>
                    {viking.presenceOfChildren
                        ? 'Has offspring'
                        : 'No offspring'}
                </div>
            </div>
            <div className={styles.cardWeapon}>
                <h3>Weapon:</h3>
                {viking.canFightWithAxe ? (
                    <div>
                        <Image src={axePNG} alt='axe' />
                    </div>
                ) : null}
                {viking.canFightWithSpear ? (
                    <div>
                        <Image src={spearPNG} alt='spear' />
                    </div>
                ) : null}
                {viking.canFightWithSword ? (
                    <div>
                        <Image src={swordPNG} alt='sword' />
                    </div>
                ) : null}
                {!viking.canFightWithAxe &&
                !viking.canFightWithSpear &&
                !viking.canFightWithSword ? (
                    <div>
                        <Image src={unknownPNG} alt='unknown' />
                    </div>
                ) : null}
            </div>
        </div>
    )
}

export default VikingCard
