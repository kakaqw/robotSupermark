const user = require("../db/model/user");

const login = async (username, password) => {
  const data = await user.findOne({ where: { username, password } });
  if (data == null) {
    console.log("fail data is null");
    return null;
  }
  return data.dataValues;
};

const register = async (username, password) => {
  const existingUser = await user.findOne({ where: { username } });
  if (existingUser) {
    console.log("已注册", existingUser);
    return { register: true };
  } else {
    const newUser = await user.create({ username, password });
    console.log("未注册", newUser);
    return { register: false };
  }
};

module.exports = { login, register };
