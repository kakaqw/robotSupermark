const env = process.env.NODE_ENV; //环境参数

//配置
let MYSQL_CONF;
let REDIS_CONF;

//mysql配置
MYSQL_CONF = {
  host: "localhost",
  user: "root",
  password: "zhuhaojun2527",
  port: "3306",
  database: "robotSupermarket",
};

//redis配置
REDIS_CONF = {
  port: 6379,
  host: "127.0.0.1",
};

module.exports = {
  MYSQL_CONF,
  REDIS_CONF,
};

if (env === "production") {
  //mysql配置
  MYSQL_CONF = {
    host: "localhost",
    user: "root",
    password: "zhuhaojun2527",
    port: "3306",
    database: "myblog",
  };
  //redis配置
  REDIS_CONF = {
    port: 6379,
    host: "127.0.0.1",
  };
}
