const Sequelize = require("sequelize");
const { MYSQL_CONF } = require("./conf");

const env = process.env.NODE_ENV;

const conf = {
  host: MYSQL_CONF.host,
  dialect: "mysql",
};

const seq = new Sequelize(
  MYSQL_CONF.database, //数据库名称
  MYSQL_CONF.user, //用户名
  MYSQL_CONF.password, //密码
  conf //配置
);

// seq
//   .authenticate()
//   .then(() => {
//     console.log("connection success ");
//   })
//   .catch((err) => {
//     console.log("connection fail", err);
//   });

module.exports = seq;
