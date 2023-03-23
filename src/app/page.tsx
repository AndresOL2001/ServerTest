import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Hero from './components/Molecules/Hero/Hero'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <main className={styles.main}>
      <Hero name="hola" height="200" url="/heroBackground.svg"/>
    </main>
  )
}
