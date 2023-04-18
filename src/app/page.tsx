//@ts-nocheck
"use client"
import Image from 'next/image'
import { Imprima, Inter } from 'next/font/google'
import styles from './page.module.css'
import Navbar from './components/Molecules/Navbar/Navbar'
import Sidebar from './components/Molecules/Sidebar/Sidebar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
   return <>
     <Sidebar/>
      
      <main className={styles.main}>
      <h1>Servidor de prueba activao</h1>
   </main>;
      </>
}
