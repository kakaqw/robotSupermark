import React, { createContext, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import styles from "./App.module.css";
import ShoppingCar from "./page/shoppingPage/ShoppingPage";
import LoginPage from "./page/loginPage/LoginPage";
import RegisterPage from "./page/registerPage/RegisterPage";
import ShoppingCarPage from "./page/shoppingCarPage/ShoppingCarPage";
import { Goods, CartItem } from "./interfaceList";

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (goods: Goods) => {
    const existingCartItem = cartItems.find((i) => i.goods.id === goods.id);

    if (existingCartItem) {
      // 购物车中已存在这个商品
      const updatedCartItems = cartItems.map((item) => {
        if (item.goods.id !== goods.id) {
          return item;
        }

        // 找到了匹配的商品
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      });

      setCartItems(updatedCartItems);
    } else {
      // 购物车中不存在这个商品
      setCartItems([
        ...cartItems,
        {
          goods,
          quantity: 1,
        },
      ]);
    }
  };

  const buyCart = () => {
    setCartItems([]);
  };

  const deleteGoods = (id: any, name: any) => {
    const item = cartItems.filter((a) => {
      return a.goods.id !== id && a.goods.name !== name;
    });
    setCartItems(item);
  };

  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/goods" />} />
          <Route
            path="/goods"
            element={<ShoppingCar addToCart={addToCart} />}
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route
            path="/shoppingcart"
            element={
              <ShoppingCarPage
                items={cartItems}
                buyCart={buyCart}
                deleteGoods={deleteGoods}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );

  // const goods: Goods = {
  //   id: 1,
  //   name: "robot",
  //   price: 123,
  //   img: "https://robohash.org/1",
  // };

  // const fakeData: Goods = {
  //   id: 1,
  //   name: "robot",
  //   price: 123,
  //   img: "https://robohash.org/1",
  // };

  // const item: CartItem = {
  //   goods: fakeData,
  //   quantity: 1,
  // };

  // //购物车数组
  // const [cartItems, setCartItems] = useState<CartItem[]>([item]);
  // //添加购物车
  // const addToCart = (goods: Goods) => {
  //   const existingCartItem = cartItems.find((i) => i.goods.id === goods.id);

  //   if (existingCartItem) {
  //     // 购物车中已存在这个商品
  //     const updatedCartItems = cartItems.map((item) => {
  //       if (item.goods.id !== goods.id) {
  //         return item;
  //       }

  //       // 找到了匹配的商品
  //       return {
  //         ...item,
  //         quantity: item.quantity + 1,
  //       };
  //     });

  //     setCartItems(updatedCartItems);
  //   } else {
  //     // 购物车中不存在这个商品
  //     setCartItems([
  //       ...cartItems,
  //       {
  //         goods,
  //         quantity: 1,
  //       },
  //     ]);
  //   }
  // }
}

export default App;
