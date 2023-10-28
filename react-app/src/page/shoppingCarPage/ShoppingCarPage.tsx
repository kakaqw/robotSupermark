import React, { useContext } from "react";
import styles from "./ShoppingCarPage.module.css";
import User from "../../components/user/user";
import { CartItem } from "../../interfaceList";
import axios from "axios";

interface props {
  items: CartItem[];
  buyCart: () => void;
  deleteGoods: (id: any, name: any) => void;
}

const ShoppingCarPage: React.FC<props> = ({ items, buyCart, deleteGoods }) => {
  const num = 0;
  const sum = items.reduce((a, b) => a + b.goods.price * b.quantity, num);

  const deletegoods = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const id = event.currentTarget.getAttribute("data-id");
    const name = event.currentTarget.getAttribute("data-name");
    deleteGoods(id, name);
    //到时候直接将删除数据给数据库，然后用数据库返回的值使用 副作用 钩子刷新购物车
    try {
      axios.post("http://localhost:8000/goods/delGoods", { id, name });
    } catch (error) {
      console.log(error);
    }
  };

  const buyAllCartGoods = async () => {
    try {
      //后续通过session获取username，然后去清空数据库中对应user的cartItem数据
      //然后通过数据库中返回的值去用副作用钩子刷新页面
      const session = { username: "zhangsan" };

      const data = await axios.post(
        "http://localhost:8000/goods/buyAllCartGoods",
        session
      );
      buyCart();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <User />
      <div className={styles.container}>
        <table className={styles.table} border={1}>
          <tbody>
            <tr>
              <th>样式</th>
              <th>商品id</th>
              <th>商品名称</th>
              <th>商品价格</th>
              <th>数量</th>
            </tr>

            {items.map((i) => (
              <tr key={i.goods.id}>
                <td className={styles.td}>
                  <img src={`${i.goods.img}`}></img>
                </td>
                <td>{i.goods.id}</td>
                <td>{i.goods.name}</td>
                <td>{i.goods.price}</td>
                <td>{i.quantity}</td>
                <td>
                  <button
                    data-id={i.goods.id}
                    data-name={i.goods.name}
                    onClick={(event) => deletegoods(event)}
                  >
                    移除
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className={styles.floatLabel}>
          <div className={styles.price}>{sum}</div>
          <a className={styles.buy} onClick={() => buyAllCartGoods()}>
            buy
          </a>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCarPage;

// interface ShoppingCarPageProps {
//   cartItems: CartItem[];
// }

// const ShoppingCarPage: React.FC<ShoppingCarPageProps> = ({ cartItems }) => {
//   return (
//     <div>
//       <User />
//       <div className={styles.container}>
//         <table className={styles.table} border={1}>
//           <tr>
//             <th className={styles.td}>样式</th>
//             <th className={styles.td}>商品id</th>
//             <th className={styles.td}>商品名称</th>
//             <th className={styles.td}>商品价格</th>
//           </tr>
//           {cartItems.map((i) => (
//             <tr>
//               <td className={styles.td}>
//                 <img src={`${i.goods.img}`}></img>
//               </td>
//               <td className={styles.td}>{i.goods.id}</td>
//               <td className={styles.td}>{i.goods.name}</td>
//               <td className={styles.td}>{i.goods.price}</td>
//             </tr>
//           ))}
//         </table>
//       </div>
//     </div>
//   );
// };
