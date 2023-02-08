import { GetStaticProps } from 'next'
import { IViking, IVikings } from '@/types'
import List from '@/components/List/index'

const Vikings = ({ vikings }: IVikings) => {
  return <List vikings={vikings}></List>
}

export const getStaticProps: GetStaticProps<IVikings> = async () => {
  const res = await fetch('http://localhost:3000/api/vikings')
  const vikings: IViking[] = await res.json()
  return {
    props: {
      vikings,
    },
  }
}

export default Vikings
