import React from "react";
import styles from "./Actions.module.css";
import Search from "../Search";

export default function Actions({children}) {
  return (
    <div className={styles.container}>
      <main>
        {children}
      </main>
      <Search />
    </div>
  );
}
