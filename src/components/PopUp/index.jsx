import React, { useState } from "react";
import styles from "./PopUp.module.css";
import { useDispatch } from "react-redux";
import { logout } from "../../store/reducers/auth";
import { Link, useNavigate } from "react-router-dom";
import useProfileInfo from "../../hooks/useProfileInfo";
import Avatar from "../Avatar";
export default function PopUp() {
  const { profileInfo } = useProfileInfo();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    const confirmLogout = window.confirm("tem certeza que deseja sair ?");
    if (confirmLogout) {
      dispatch(logout());
      navigate("/login");
    }
  };
  const truncateName = (nome) => {
    if (!nome) return "";
    const words = nome.split(" ");
    if (words.length > 1) {
      return `${words[0]} ${words[1]}`;
    }
    return words[0];
  };
  const handleToggle = () => {
    setOpen(!open);
  };
  return (
    <>
      <div className={styles.popup}>
        <div className={styles.container}>
          <Avatar nome={profileInfo.nome} onClick={handleToggle} className={styles.circle} />
          <h1 onClick={handleToggle}>{truncateName(profileInfo.nome)}...</h1>
        </div>
        {open && (
        <ul className={styles.list}>
          <li>Abrir Chamado</li>
          <li><Link to='/my-profile' onClick={handleToggle}>Meu Perfil</Link></li>
          <li onClick={handleLogout}>Sair</li>
        </ul>
      )}
      </div>
      
    </>
  );
}
