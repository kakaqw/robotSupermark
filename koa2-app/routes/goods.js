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
  const data = ctx.request.body;
  const dataBuy = await buyGoods(data, ctx.session.username);
  console.log(dataBuy.buy);

  if (dataBuy.buy) {
    ctx.body = {
      message: true,
    };
  } else {
    ctx.body = {
      message: false,
    };
  }
});

router.post("/addToCart", loginCheck, async (ctx, next) => {
  const data = ctx.request.body;
  const dataCart = await addToCart(data, ctx.session.username);
  console.log("session.username is", ctx.session.username);
  console.log(dataCart);
  if (dataCart.addToCart) {
    ctx.body = {
      message: true,
    };
  } else {
    ctx.body = {
      message: false,
    };
  }
});

router.post("/delCartGoods", loginCheck, async (ctx, next) => {
  const { name } = ctx.request.body;
  const data = await delGoods(name, ctx.session.username);
  ctx.body = {
    message: data,
  };
});

router.post("/buyAllCartGoods", loginCheck, async (ctx, next) => {
  const goodsItems = ctx.request.body;
  const data = await buyAllCartGoods(goodsItems, ctx.session.username);
  // console.log("data is", data);

  ctx.body = {
    message: data,
  };
});

module.exports = router;
