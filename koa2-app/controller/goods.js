const goods = require("../db/model/goods");
const bought = require("../db/model/bought");

const buyGoods = async ({ id, name, price, img }) => {
  try {
    const data = bought.create({ id, name, price, img });
  } catch (error) {
    console.log("controller fail", error);
  }
  return "buyGoods";
};

const addToCart = async ({ id, name, price, img }) => {
  try {
    console.log("addToCart controller success");
  } catch (error) {
    console.log(error);
  }
  return "addToCart";
};

const delGoods = async ({ id, name }) => {
  try {
    console.log("delGoods controller success");
  } catch (error) {
    console.log(error);
  }
  return "delGoods";
};

const buyAllCartGoods = async (name) => {
  try {
    console.log("buyAllCartGoods controller success");
  } catch (error) {
    console.log(error);
  }
  return "buyAllCartGoods";
};

module.exports = {
  buyGoods,
  addToCart,
  delGoods,
  buyAllCartGoods,
};
