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
     <Navbar
  backgroundColor="#1B3156"
  isUserNav
  logoUrl="/logo-white.svg"
  navItems={[
    'Home',
    'About us',
    'Our services',
    'Blog'
  ]}
  primary
  showLogo
  userInformation={{
    occupation: 'Software Engineer',
    username: 'Johnathan'
  }}
/>
      
      <main className={styles.main}>
   </main>
      </>
}
