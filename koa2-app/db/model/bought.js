const sequelize = require("sequelize");
const seq = require("../connect");

const bought = seq.define("bought", {
  goodsId: {
    type: sequelize.INTEGER,
    allowNull: false,
    // primaryKey: true,
  },
  goodsName: {
    type: sequelize.STRING,
    allowNull: false,
  },
  goodsPrice: {
    type: sequelize.INTEGER,
    allowNull: false,
  },
  // img: {
  //   type: sequelize.STRING,
  //   allowNull: false,
  // },
  username: {
    type: sequelize.STRING,
    allowNull: false,
  },
});

module.exports = bought;
//用来存购物车的数据
