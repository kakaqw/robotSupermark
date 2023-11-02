import React, { useEffect, useState } from "react";
import styles from "../loginPage/LoginPage.module.css";
import Title from "../../components/title/title";
import axios from "axios";
import User from "../../components/user/user";

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    try {
      const message = await axios.post(
        "http://localhost:8000/user/login",
        {
          username,
          password,
        },
        { withCredentials: true }
      );
      console.log(message);
      if (message.data.login) {
        window.location.href = "/";
        window.alert("success");
      } else {
        window.alert("error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.cantainer}>
      <User />
      <div className={styles.Box}>
        <Title name="login" />
        <input
          type="text"
          className={styles.inputSize1}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <input
          type="password"
          className={styles.inputSize2}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <br></br>
        <a href="/register">注册</a>
        <br></br>
        <button className={styles.button1} onClick={login}>
          登入
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
