import React, { useState } from "react";
import styles from "./RegisterPage.module.css";
import Title from "../../components/title/title";
import axios from "axios";
import User from "../../components/user/user";

const RegisterPage: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      const message = await axios.post("http://localhost:8000/user/register", {
        username,
        password,
      });

      if (message.data.register) {
        window.location.href = "/login";
        alert("注册成功");
      } else {
        window.location.href = "/login";
        alert("已经注册过了");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.cantainer}>
      <User />
      <div className={styles.Box}>
        <Title name="register" />
        <input
          type="text"
          className={styles.inputSize1}
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        ></input>
        <input
          type="password"
          className={styles.inputSize2}
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>
        <br></br>
        <button className={styles.button1} onClick={handleRegister}>
          注册
        </button>
      </div>
    </div>
  );
};

export default RegisterPage;
