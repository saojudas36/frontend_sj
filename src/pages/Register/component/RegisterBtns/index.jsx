import React from "react";
import styles from "./RegisterBtns.module.css";

export default function RegisterBtns({ onSectionChange, active, className}) {
  return (
    <div className={`${styles.container} ${className}`}>
      <button
        className={active === "acesso" ? styles.active : ""}
        onClick={() => onSectionChange("acesso")}
      >
        Acesso
      </button>
      <button
        className={active === "empresa" ? styles.active : ""}
        onClick={() => onSectionChange("empresa")}
      >
        Empresa
      </button>
      <button
        className={active === "perfil" ? styles.active : ""}
        onClick={() => onSectionChange("perfil")}
      >
        Perfil
      </button>
      <button
        className={active === "contato" ? styles.active : ""}
        onClick={() => onSectionChange("contato")}
      >
        Contato
      </button>
    </div>
  );
}
