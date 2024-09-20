import React from "react";
import styles from "./EditButton.module.css";
import { FaPencilAlt } from 'react-icons/fa'
export default function EditButton({onClick}) {
  return (
    <button className={styles.button} onClick={onClick}>
      <FaPencilAlt style={{ color: "blue", margin: "0" }} />
    </button>
  );
}
