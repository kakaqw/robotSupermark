import React, { useState } from "react";
import User from "../../components/user/user";
import styles from "../../page/shoppingPage/ShoppingPage.module.css";
import data from "../../FakeData/data.json";
import Robot from "../../components/robotbox/robot";
import logo from "../../assets/images/logo.svg";
import { Goods, CartItem } from "../../interfaceList";

const ShoppingPage: React.FC<{ addToCart: (goods: Goods) => void }> = ({
  addToCart,
}) => {
  const getGoodsInfo = (goods: Goods) => {
    addToCart(goods);
  };

  return (
    <div>
      <User />
      <div className={styles.appHeader}>
        <img className={styles.appLogo} src={logo} alt="logo"></img>
        <h1>robot supermarket</h1>
      </div>
      <div className={styles.robotList}>
        {data.map((h) => (
          <Robot
            key={h.id}
            id={h.id}
            email={h.email}
            name={h.name}
            price={h.price}
            addToCart={getGoodsInfo}
          />
        ))}
      </div>
    </div>
  );
};

export default ShoppingPage;
