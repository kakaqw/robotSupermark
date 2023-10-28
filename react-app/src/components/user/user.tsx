import React from "react";
import user from "../../assets/images/user.svg";
import shoppingCar from "../../assets/images/shoppingCar.svg";
import styles from "./user.module.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const User: React.FC = () => {
  const location = useLocation();
  const url = location.pathname;

  return (
    <div className={styles.bottom}>
      <Link to="/shoppingcart">
        <img src={shoppingCar} className={styles.shoppingCar} alt="logo"></img>
      </Link>
      <Link to="/">
        <img src={user} className={styles.myPage} alt="logo"></img>
      </Link>
      {url == "/login" || url == "/register" ? null : (
        <div className={styles.user}>
          <Link to="/login">
            <div className={styles.loginButton}>登入</div>
          </Link>
          <Link to="/register">
            <div className={styles.registerButton}>注册</div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default User;
