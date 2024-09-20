import React from "react";
import styles from './Permissoes.module.css';

export default function Permissoes({ value, onChange }) {
  const handleChange = (event) => {
    // Cria um array com o valor selecionado
    onChange({ target: { name: event.target.name, value: [event.target.value] } });
  };

  return (
    <div className={styles.container}>
      <label htmlFor="permissoesPerfil">
        <strong>Permissões</strong>
      </label>
      <select
        name="permissoesPerfil"
        id="permissoesPerfil"
        value={value[0] || ''}  // Assumindo que 'value' é um array com um único valor
        onChange={handleChange}
      >
        <option value="">Selecione</option>
        <option value="ADMIN">Administrador</option>
        <option value="COMUM">Geral</option>
        <option value="SUPRIMENTO">Suprimentos</option>
        <option value="SUPRIMENTO1">Entradas de Suprimentos</option>
        <option value="SUPRIMENTO2">Saída de Suprimentos</option>
        <option value="SUPERVISAO">Supervisão</option>
      </select>
    </div>
  );
}
