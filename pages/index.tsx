import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import List from './vikings'

export default function Home() {

  return (
    <Link href={'http://localhost:3000/vikings'} style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)'}}>
      Go to check Vikings for expedition to England
    </Link>
  )
}

