import React from 'react'
import styles from './Input.module.css'
export default function Input({name, label, type, value, onChange, placeholder}) {
  return (
    <div className={styles.container}>
        <label htmlFor={name}><strong>{label}</strong></label>
        <input type={type} name={name} value={value} onChange={onChange} placeholder={placeholder}/>
    </div>
  )
}
