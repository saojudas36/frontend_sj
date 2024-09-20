import React from "react";
import styles from "./PersonalInfos.module.css";
import { FaBook, FaWrench } from "react-icons/fa";
export default function PersonalInfos({ profileInfo }) {
  return (
    <div className={styles.container}>
      <header>
        <div>
          <FaBook size={32} />
          <h1>Informações Pessoais</h1>
        </div>
        <button><FaWrench/></button>
      </header>
      <dl className={styles.personalInfos}>
        <dt>Gênero</dt>
        <dd>{profileInfo.genero}</dd>

        <dt>Data de aniversário</dt>
        <dd>{profileInfo.aniversario}</dd>

        <dt>Naturalidade</dt>
        <dd>{profileInfo.naturalidade}</dd>

        <dt>Estado Civil</dt>
        <dd>{profileInfo.civil}</dd>

        <dt>Possui filhos?</dt>
        <dd>{profileInfo.filhos}</dd>

        <dt>Quantidade de filhos</dt>
        <dd>{profileInfo.qntdfilhos}</dd>

        <dt>Tamanho da camiseta</dt>
        <dd>{profileInfo.camiseta}</dd>

        <dt>Tamanho do calçado</dt>
        <dd>{profileInfo.calcado}</dd>

        <dt>Etnia</dt>
        <dd>-</dd>
      </dl>
    </div>
  );
}
