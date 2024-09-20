import React from 'react'
import styes from './Header.module.css'
import { useSelector } from 'react-redux'
export default function Header({title, className}) {

  return (
    <header className={`${styes.header} ${className}`}>
        <h1>{title}</h1>
    </header>
  )
}
