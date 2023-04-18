//@ts-nocheck
import Image from 'next/image'
import { Imprima, Inter } from 'next/font/google'
import styles from './page.module.css'
import Navbar from './components/Molecules/Navbar/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
   return <main className={styles.main}></main>;
}
