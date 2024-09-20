import React from "react";
import Aside from "../../components/Aside";
import Header from "../../components/Header";
import { Outlet, useLocation } from "react-router-dom";
import styles from "./common.module.css";
import Container from "../../components/Container";
const routeTitles = {
  "/management/employee-list": "Lista de Funcionários",
  "/management/register": "Cadastro de Funcionários",
};
export default function Common() {
  const location = useLocation();
  const title = routeTitles[location.pathname] || "";
  const links = [
    { name: "Lista de Funcionários", path: "/management/employee-list" },
    { name: "Cadastro de Funcionários", path: "/management/register" },
  ];
  return (
    <main className={styles.main}>
      <Aside
        className={styles.aside}
        links={links}
        activeClassName={styles.active}
      />
      <div className={styles.container}>
        <Header title={title} className={styles.header} />
        <section>
          <Container>
            <Outlet />
          </Container>
        </section>
      </div>
    </main>
  );
}
