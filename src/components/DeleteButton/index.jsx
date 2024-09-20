import React from 'react'
import styles from './DeleteButton.module.css'
import { FaRegTrashAlt } from 'react-icons/fa'
export default function DeleteButton({onClick}) {
  return (
    <button className={styles.button} onClick={onClick}>
       <FaRegTrashAlt/>
    </button>
  )
}
