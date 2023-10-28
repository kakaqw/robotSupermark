const sequelize = require("sequelize");
const seq = require("../connect");

const user = seq.define("user", {
  username: {
    type: sequelize.STRING, //定义字段的类型
    allowNull: false, //不允许为空
  },
  password: {
    type: sequelize.STRING, //定义字段的类型
    allowNull: false, //不允许为空
  },
});

module.exports = user;
//用来存用户数据的
