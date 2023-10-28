const sequelize = require("sequelize");
const seq = require("../connect");

const goods = seq.define("good", {
  goodsId: {
    type: sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  goodsName: {
    type: sequelize.STRING,
    allowNull: false,
  },
  goodsPrice: {
    type: sequelize.INTEGER,
    allowNull: false,
  },
  img: {
    type: sequelize.STRING,
    allowNull: false,
  },
});
module.exports = goods;
//用来存已经购买的数据
