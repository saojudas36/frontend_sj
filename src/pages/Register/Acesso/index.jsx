import React from "react";
import Input from "../../../components/Input";
import styles from "./Acesso.module.css";
import Departamento from "../../../components/Departamento";
import Unidade from "../../../components/Unidade";
import Permissoes from "../component/Permissoes";
export default function Acesso({ formData, handleChange }) {
  return (
    <main className={styles.container}>
      <div>
        <Input
          label={"Nome completo"}
          name={"nome"}
          type={"text"}
          onChange={handleChange}
          value={formData.nome || ""}
          placeholder={"Digite seu nome completo"}
        />
        <Departamento
          onChange={handleChange}
          value={formData.departamento || ""}
        />
      </div>
      <div>
        <Input
          label={"Cargo"}
          name={"funcao"}
          onChange={handleChange}
          placeholder={"Digite o Cargo do Funcionário"}
          type={"text"}
          value={formData.funcao || ""}
        />
        <Unidade onChange={handleChange} value={formData.empresa || ''} />
        <Permissoes
          onChange={handleChange}
          value={formData.permissoesPerfil || ""}
        />
      </div>
      <div>
      <Input
          label={"E-mail"}
          name={"email"}
          onChange={handleChange}
          placeholder={"Digite o E-mail do Funcionário"}
          type={"email"}
          value={formData.email || ""}
        />
        <Input
          label={"Senha"}
          name={"senha"}
          onChange={handleChange}
          placeholder={"Digite a senha do Funcionário"}
          type={"password"}
          value={formData.senha || ""}
        />
        <Input
          label={"Ramal"}
          name={"ramal"}
          onChange={handleChange}
          placeholder={"Digite o ramal do Funcionário"}
          type={"text"}
          value={formData.ramal || ""}
        />
      </div>
    </main>
  );
}
