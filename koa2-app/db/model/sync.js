const user = require("./user");
const goods = require("./goods");
const bought = require("./bought");

async function sync() {
  // user.sync({ force: true });
  goods.sync({ force: true });
  bought.sync({ force: true });
}
sync().then(() => console.log("success"));
