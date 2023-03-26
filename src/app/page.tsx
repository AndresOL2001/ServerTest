//@ts-nocheck
import Image from 'next/image'
import { Imprima, Inter } from 'next/font/google'
import styles from './page.module.css'
import Navbar from './components/Molecules/Navbar/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <main className={styles.main}>
      <Navbar
        backgroundColor="#1B3156"
        height={50}
        items={[
          'Home',
          'About us',
          'Our services',
          'Blog'
        ]}
        logo="/logo-white.svg"
        userInfo={{
          id: '0',
          occupation: 'Software Engineer',
          username: 'Johnathan'
        }}
        userNav
        width={150}
      />
    </main>
  )
}
