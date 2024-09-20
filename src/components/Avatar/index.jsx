import React from 'react'
import styles from './Avatar.module.css'
export default function Avatar({nome, className}) {
    const truncateName = (nome, maxLenght) => {
        if (nome.length > maxLenght) {
            return nome.substring(0, maxLenght);
        }
        return nome;
    }
    const displayName = typeof nome === 'string' ? nome : 'Nome não disponível';
  return (
    <div className={`${className} ${styles.circle}`}>
        <p>{truncateName(displayName, 2)}</p>
    </div>
  )
}
