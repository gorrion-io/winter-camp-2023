import { getVikings } from '../lib/vikings'
import { Viking } from '../types/vikings'

export default function Home({ vikings }: { vikings: Viking[] }) {
  return (
    <div>
      <h1>Vikings</h1>
      <pre>{JSON.stringify(vikings, null, 2)}</pre>
    </div>
  )
}

export async function getStaticProps() {
  const vikings = getVikings();
  return { props: { vikings } };
}