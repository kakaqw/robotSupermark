import React, { useState } from "react";
import styles from "./robot.module.css";
import addShoppingCar from "../../assets/images/addShopingCar.svg";
import { CartItem, Goods } from "../../interfaceList";
import data from "../../FakeData/data.json";
import { Link } from "react-router-dom";
import axios from "axios";

interface humanProps {
  id: number;
  name: string;
  email: string;
  price: number;

  addToCart: (goods: Goods) => void;
}

const Robot: React.FC<humanProps & { addToCart: (goods: Goods) => void }> = ({
  id,
  name,
  email,
  price,
  addToCart,
}) => {
  const [goods, setgoods] = useState<Goods>();

  const url = `https://robohash.org/${id}`;

  const addToCartClick = async () => {
    const goods: Goods = {
      id,
      name,
      price,
      img: url,
    };
    addToCart(goods);

    try {
      const data: any = await axios.post(
        "http://localhost:8000/goods/addToCart",
        goods,
        {
          withCredentials: true,
        }
      );
      console.log(data.data.message);
      if (data.data.message) {
        console.log("addCart success");
      } else {
        console.log("addCart fail");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const buyGoodsClick = async () => {
    const goods: Goods = {
      id,
      name,
      price,
      img: url,
    };

    try {
      const data: any = await axios.post(
        "http://localhost:8000/goods/buyGoods",
        goods,
        { withCredentials: true }
      );
      console.log(data.data.message);
      if (data.data.message) {
        window.alert("success");
      } else {
        window.alert("fail");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ul>
      <li className={styles.frame}>
        <img src={url}></img>
        <p>{name}</p>
        <p>{email} </p>
        {price}

        <a href="#" className={styles.a} onClick={() => buyGoodsClick()}>
          buy
        </a>

        <img
          src={addShoppingCar}
          alt="logo"
          className={styles.addShoppingCar}
          onClick={() => addToCartClick()}
        />
      </li>
    </ul>
  );
};

export default Robot;
