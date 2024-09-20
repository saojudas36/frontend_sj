import React from "react";
import useEmployeeInfo from "../../hooks/useEmployeeInfo";
import Table from "../../components/Table";
import { useSelector } from "react-redux";
import styles from "./EmployeeList.module.css";
import Container from "../../components/Container";

export default function EmployeeList() {
  const search = useSelector((state) => state.search);
  const {
    employeeInfo,
    handleDelete,
    handleBulkDelete,
    toggleSelect,
    selectedIds,
  } = useEmployeeInfo();

  if (!Array.isArray(employeeInfo)) {
    return <div>Loading...</div>;
  }

  const columns = ["Nome", "Email", "Cargo", "Departamento"];

  const filteredData = employeeInfo
    .filter((employee) =>
      employee.nome.toLowerCase().includes(search.toLowerCase())
    )
    .map((employee) => ({
      id: employee.id,
      nome: employee.nome,
      email: employee.email,
      cargo: employee.funcao,
      departamento: employee.departamento.nome,
    }));

  return (
    <div className={styles.container}>
      <Table
        additionalColumn={'Funcionários'}
        columns={columns}
        data={filteredData}
        onDeleteSelected={handleBulkDelete}
        onDelete={(id) => handleDelete(id)}
        onSelect={toggleSelect}
        selectedIds={selectedIds}
      />
    </div>
  );
}
