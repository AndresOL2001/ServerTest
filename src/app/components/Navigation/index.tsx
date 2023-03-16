'use client'
<<<<<<< HEAD
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
=======

import React, { useEffect } from 'react'
import RuloBoton from '../RuloBoton'

function Navigation() {
    useEffect(() => {
        alert('ojawdpojwaopjdwapo')
      },[])
      
  return (
    <nav>
        <ul>
            <li>
                <RuloBoton href="/company/about" label="About"/>
            </li>
            <li>
                <RuloBoton href="/" label="Home"/>
            </li>
            <li>
                <RuloBoton href="/main" label="Main"/>
            </li>
        </ul>
>>>>>>> 6bf2790564ef6e83c8af6b9f3c1b78ffb93f225d
    </nav>
  )
}

<<<<<<< HEAD
export default index
=======
export default Navigation
>>>>>>> 6bf2790564ef6e83c8af6b9f3c1b78ffb93f225d
