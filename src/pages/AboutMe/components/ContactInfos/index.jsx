import React from "react";
import styles from "./ContactInfos.module.css";
import { FaAt, FaHome, FaMapSigns, FaPhone, FaWrench } from "react-icons/fa";
export default function ContactInfos({ profileInfo }) {
  return (
    <div className={styles.container}>
      <header>
        <div>
          <FaPhone/>
          <h1>Contato</h1>
        </div>
        <button><FaWrench/></button>
      </header>
      <dl className={styles.contactInfos}>
        <dt><FaAt/>E-mail</dt>
        <dd>{profileInfo.email}</dd>

        <dt><FaHome/>Endereço</dt>
        <dd>
          {profileInfo.logradouro},{profileInfo.bairro},{profileInfo.cep}
        </dd>

        <dt><FaMapSigns/>Cidade</dt>
        <dd>{profileInfo.cidade}</dd>
      </dl>
    </div>
  );
}
