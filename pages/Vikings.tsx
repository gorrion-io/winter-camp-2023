import React from 'react'
import { fetchVikings } from '../lib/vikings'
import VikingCard from '../components/VikingCard'
import styles from '../styles/Home.module.css'

type Viking = {
    fullName: string
    presenceOfChildren: boolean
    age: number
    hometown: string
    canFightWithSword: boolean
    canFightWithAxe: boolean
    canFightWithSpear: boolean
}

const Vikings = (): JSX.Element => {
    const vikings: Viking[] = fetchVikings()
    return (
        <div className={styles.vikings}>
            {vikings.map((viking: Viking, index: number) => {
                return (
                    <div key={index}>
                        <VikingCard viking={viking} />
                    </div>
                )
            })}
        </div>
    )
}

export default Vikings
