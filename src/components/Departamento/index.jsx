import React, { useEffect, useState } from "react";
import useDepartment from "../../hooks/useDepartment";
import styles from "./Departamento.module.css";
export default function Departamento({ value, onChange }) {
  const { departamentos } = useDepartment();
  return (
    <div className={styles.container}>
      <label htmlFor="departamento">
        <strong>Departamento</strong>
      </label>
      <select
        name="departamento"
        id="departamento"
        value={value}
        onChange={onChange}
      >
        <option value="">selecione</option>
        {departamentos.map((departamento) => (
          <option key={departamento.id} value={departamento.nome}>
            {departamento.nome}
          </option>
        ))}
      </select>
    </div>
  );
}
