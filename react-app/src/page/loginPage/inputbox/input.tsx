import React from "react";
import styles from "./input.module.css";
import Title from "../../../components/title/title";

const InputBox: React.FC = () => {
  return (
    <div className={styles.container}>
      {/* <Title /> */}
      <input type="text" className={styles.inputSize1}></input>
      <input type="password" className={styles.inputSize2}></input>
      <a href="#">注册</a>
      <button className={styles.button1}>登入</button>
    </div>
  );
};

export default InputBox;
