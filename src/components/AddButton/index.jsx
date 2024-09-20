import React from "react";
import styles from "./AddButton.module.css";
import { Link } from "react-router-dom";
export default function AddButton({ path }) {
  return (
    <Link className={styles.button} to={path}>Novo</Link>
  );
}
