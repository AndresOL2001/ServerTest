'use client'

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
    </nav>
  )
}

export default Navigation