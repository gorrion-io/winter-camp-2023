import '../styles/globals.css'
import '../styles/index.css';

import type { AppProps } from 'next/app'
import List from './vikings'

type TViking = {
  fullName: string;
  presenceOfChildren: boolean;
  age: number;
  hometown: string;
  canFightWithSword: boolean;
  canFightWithAxe: boolean;
  canFightWithSpear: boolean;
}

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps}/>
}

