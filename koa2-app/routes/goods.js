const router = require("koa-router")();
const {
  buyGoods,
  addToCart,
  delGoods,
  buyAllCartGoods,
} = require("../controller/goods");
const loginCheck = require("../middleware/loginCheck");

router.prefix("/goods");

router.post("/buyGoods", loginCheck, async (ctx, next) => {
  console.log("session", ctx.session);
  console.log("session", ctx.session.username);
  ctx.body = {
    login: true,
  };
});

router.post("/addToCart", async (ctx, next) => {
  /////////////////////////////////////////
  /*   后续这里要获得username，用来对应记录   */
  /////////////////////////////////////////

  const { id, name, price } = ctx.request.body;
  const data = await addToCart(id, name, price);
  ctx.body = {
    message: data,
  };
});

router.post("/delGoods", async (ctx, next) => {
  const { id, name } = ctx.request.body;
  const data = await delGoods(id, name);
  ctx.body = {
    message: data,
  };
});

router.post("/buyAllCartGoods", async (ctx, next) => {
  const username = ctx.request.body;
  console.log(username);
  const data = await buyAllCartGoods(username);

  ctx.body = {
    message: data,
  };
});

module.exports = router;
