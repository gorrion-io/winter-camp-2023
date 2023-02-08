import type { IVikings } from 'types'
import styles from './List.module.scss'
import Card from '@/components/Card'

const List = ({ vikings }: IVikings) => {
  return (
    <div className={styles.list}>
      {vikings.map((viking, i) => (
        <Card key={i} viking={viking}></Card>
      ))}
    </div>
  )
}

export default List
