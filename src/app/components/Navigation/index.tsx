'use client'
import { useEffect } from 'react'
import RuloBoton from '../RuloBoton'

const index = () => {
  // eslint-disable-next-line
  useEffect(() => {
    
  },[])
  
  return (
    <nav>
      <ul>
        <li><RuloBoton href="/company/about" label="About" /></li>
        <li><RuloBoton href="/" label="Home" /></li>
        <li><RuloBoton href="/main" label="Main" /></li>
      </ul>
    </nav>
  )
}

export default index
