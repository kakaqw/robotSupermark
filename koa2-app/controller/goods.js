const goods = require("../db/model/goods");
const bought = require("../db/model/bought");

const buyGoods = async ({ id, name, price, img }, username) => {
  try {
    console.log("controller data is", id, name, price, img, username);
    const goodsId = id;
    const goodsName = name;
    const goodsPrice = price;

    const data = await bought.create({
      goodsId,
      goodsName,
      goodsPrice,
      username,
    });

    return { buy: true };
  } catch (error) {
    console.log("controller fail", error);
  }
  return "buyGoods";
};

const addToCart = async ({ id, name, price, img }, username) => {
  try {
    const goodsId = id;
    const goodsName = name;
    const goodsPrice = price;

    const data = await goods.create({
      goodsId,
      goodsName,
      goodsPrice,
      username,
    });

    return { addToCart: true };
  } catch (error) {
    console.log(error);
  }
  return "addToCart";
};

const delGoods = async (goodsName, username) => {
  try {
    const duplicateRecord = await goods.findAll({
      where: {
        goodsName: goodsName,
        username: username,
      },
    });
    console.log("duplicateRecord is", duplicateRecord);

    if (duplicateRecord) {
      await duplicateRecord[0].destroy();
      console.log("删除成功");
    } else {
      console.log("未找到匹配的记录");
    }
  } catch (error) {
    console.log(error);
  }
  return "delGoods";
};

const buyAllCartGoods = async (goodsItems, username) => {
  try {
    const userAllGoods = await goods.findAll({
      where: { username },
      attributes: { exclude: ["id"] },
    });

    let cartGoodsInfo = [];
    userAllGoods.forEach((i) => {
      cartGoodsInfo.push(i.dataValues);
    });

    cartGoodsInfo.forEach((i) => {
      goods.destroy({
        where: { createdAt: i.createdAt, updatedAt: i.updatedAt },
      });
    });

    const buyCartData = await bought.bulkCreate(cartGoodsInfo);
    console.log(buyAllCartGoods);
    // console.log(delCartData);
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
