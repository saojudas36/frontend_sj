import React from "react";
import styles from "./CreateQuestion.module.css";
import Header from "../../components/Header";
import Forms from "../../components/Forms";
import Input from "../../components/Input";
export default function CreateQuestion() {

  return (
    <main className={styles.main}>
      <Header title={"Criar Pergunta"} className={styles.header} />
      <Forms className={styles.forms}>
        <Input label={'E-mail'} placeholder={'Digite seu E-mail'}/>
      </Forms>
    </main>
  );
}
