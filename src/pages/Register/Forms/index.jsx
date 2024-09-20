import React, { useState } from "react";
import RegisterBtns from "../component/RegisterBtns";
import styles from "./Forms.module.css";
import Acesso from "../Acesso";
import Empresa from "../Empresa";
import Perfil from "../Perfil";
import Contato from "../Contato";
import useRegister from "../../../hooks/useRegister";
import { useNavigate } from "react-router-dom";
export default function Forms() {
  const [activeSection, setActiveSection] = useState("acesso");
  const { formData, handleChange, register } = useRegister();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    register();
    navigate("/management/employee-list");
  };

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };
  return (
    <div className={styles.formContainer}>
      <RegisterBtns
        onSectionChange={handleSectionChange}
        active={activeSection}
        className={styles.buttons}
      />
      <form onSubmit={handleSubmit}>
        {activeSection === "acesso" && (
          <Acesso formData={formData} handleChange={handleChange} />
        )}
        {activeSection === "empresa" && (
          <Empresa formData={formData} handleChange={handleChange} />
        )}
        {activeSection === "perfil" && (
          <Perfil formData={formData} handleChange={handleChange} />
        )}
        {activeSection === "contato" && (
          <Contato formData={formData} handleChange={handleChange} />
        )}
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}
