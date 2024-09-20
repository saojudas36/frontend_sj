import React from "react";
import styles from "./Banner.module.css";
import Avatar from "../Avatar";
export default function Banner({ profileInfo }) {
  return (
    <div className={styles.container}>
      <Avatar
        nome={profileInfo.nome}
        className={styles.circles}
      />
      <div>
        <h1>{profileInfo.nome}</h1>
        <h2>{profileInfo.funcao}</h2>
       {/* <h3>{profileInfo.departamento.nome}</h3>
        <h3>{profileInfo.empresa.razaoSocial}</h3>*/}
        <h3>Admissão: {profileInfo.ano}</h3>
      </div> 
    </div>
 
  );
}
