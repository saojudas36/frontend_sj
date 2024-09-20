import React from "react";
import useUnit from "../../hooks/useUnit";
import styles from './Unidade.module.css'
export default function Unidade({value, onChange}) {
  const { units } = useUnit();
  return (
    <div className={styles.container}>
      <label htmlFor="empresa">
        <strong>Unidade</strong>
      </label>
      <select name="empresa" id="empresa" value={value} onChange={onChange}>
        <option value="">selecione</option>
        {units.map((unit)=>(
          <option key={unit.id} value={unit.nomeFantasia}>{unit.nomeFantasia}</option>
        ))}
      </select>
    </div>
  );
}
