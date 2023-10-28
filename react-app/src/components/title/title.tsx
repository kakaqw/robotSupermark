import React from "react";
import styles from "../title/title.module.css";

interface signal {
  name: string;
}

const Title: React.FC<signal> = ({ name }) => {
  if (name == "register") {
    return (
      <div>
        <h1 className={styles.title}>注册</h1>
        <h5>Welcome to robotSupermarket</h5>
      </div>
    );
  }
  if (name == "login") {
    return (
      <div>
        <h1 className={styles.title}>登入</h1>
        <h5>Welcome to robotSupermarket</h5>
      </div>
    );
  }

  return null;
};
export default Title;
