import React from "react";
import styles from "./Navbar.module.css";
import { FaBars } from "react-icons/fa";
import logo from "../../assets/Logo1.1.png";
import PopUp from "../PopUp";
export default function Navbar({ setSidebar }) {
  const showSidebar = () => {
    setSidebar((prev) => !prev);
  };
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <section>
          <FaBars onClick={showSidebar} />
          <img src={logo} alt="logo sao judas" />
        </section>
        <PopUp />
      </div>
    </header>
  );
}
