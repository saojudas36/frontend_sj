import React from "react";
import styles from "./Sidebar.module.css";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { FaRegCommentDots, FaUserPlus, FaPenNib } from "react-icons/fa";
import {
  RiBox3Fill,
  RiFolderUserLine,
  RiLifebuoyLine,
  RiLightbulbFlashLine,
  RiPencilLine,
  RiQuestionAnswerLine,
} from "react-icons/ri";
export default function Sidebar({ show, setSidebar }) {
  return (
    <aside
      className={classNames(styles.aside, {
        [styles.show]: show,
        [styles.hide]: !show,
      })}
    >
      <ul>
        <li>
          <Link
            to="/management/employee-list"
            onClick={() => setSidebar(false)}
          >
            <RiFolderUserLine />
            Lista de funcionarios
          </Link>
        </li>
        <li>
          <Link to='/create-question'
           onClick={() => setSidebar(false)}>
            <RiPencilLine />
            Criar Pergunta
          </Link>
        </li>
        <li>
          <FaPenNib />
          Criar Solução
        </li>
        <li>
          <FaRegCommentDots />
          Forum
        </li>
        <li>
          <RiLightbulbFlashLine />
          Soluções
        </li>
        <li>
          <RiQuestionAnswerLine />
          Perguntas
        </li>
        <li>
          <RiLifebuoyLine />
          HELPDESK
        </li>
        <li>
          {" "}
          <RiBox3Fill />
          Controle de estoque
        </li>
        <li>
          <FaUserPlus />
          Cadastro de Clientes
        </li>
      </ul>
    </aside>
  );
}
