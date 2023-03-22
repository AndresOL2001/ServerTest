import Image from 'next/image'
import { Imprima, Inter } from 'next/font/google'
import styles from './page.module.css'
import BatteryStdIcon from '@mui/icons-material/BatteryStd';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <>
    <BatteryStdIcon/>
    </>
  )
}
