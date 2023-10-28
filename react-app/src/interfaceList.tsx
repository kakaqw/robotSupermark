/** 商品 */
export interface Goods {
  id: number;
  name: string;
  price: number;
  img: string;
}

/** 购物车元素 */
export interface CartItem {
  goods: Goods;
  quantity: number;
}
