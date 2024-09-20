import React from "react";
import styles from "./Forms.module.css";
export default function Forms({ onSubmit, children, className }) {
  return (
    <form onSubmit={onSubmit} className={`${styles.form} ${className}`}>
        {children}
    </form>
  );
}
