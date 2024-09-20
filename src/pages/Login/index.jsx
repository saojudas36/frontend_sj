import React, { useState } from "react";
import styles from "./Login.module.css";
import logo from "../../assets/Logo1.1.png";
import UserService from "../../service/UserService";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { loginSuccess, setError } from "../../store/reducers/auth";
export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const userData = await UserService.login(email, senha)
        console.log(userData)
        if (userData.token) {
            localStorage.setItem('token', userData.token)
            localStorage.setItem('role', userData.role)
            dispatch(loginSuccess(userData))
            navigate('/')
        }else{
          dispatch(setError(userData.message));
        }
        
    } catch (error) {
      dispatch(setError(error.message));
    }
}

  return (
    <main className={styles.main}>
      <form className={styles.forms} onSubmit={handleSubmit}>
        <img src={logo} alt="logo sao judas" width={200} height={56} />
        <h2>Entre em sua conta</h2>
        <input
          type="email"
          value={email}
          placeholder="Digite seu email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          value={senha}
          placeholder="digite sua senha"
          onChange={(e) => setSenha(e.target.value)}
        />
        <button type="submit">entrar</button>
      </form>
      <section className={styles.section}></section>
    </main>
  );
}
