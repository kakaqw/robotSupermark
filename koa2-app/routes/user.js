const router = require("koa-router")();
const { login, register } = require("../controller/user");
const loginCheck = require("../middleware/loginCheck");

router.prefix("/user");

router.post("/login", async (ctx, next) => {
  const { username, password } = ctx.request.body;

  const data = await login(username, password);

  ctx.body = {};

  if (data == null) {
    ctx.body.login = false;
  } else {
    ctx.body.login = true;
    ctx.session.username = data.username;
    console.log(ctx.session);
    return;
  }
});

router.post("/register", async (ctx, next) => {
  const { username, password } = ctx.request.body;
  const data = await register(username, password);

  console.log(data.register);
  console.log(data);
  if (data.register) {
    //刚注册的
    ctx.body = {
      register: false,
    };
  } else {
    //已经注册过的
    ctx.body = {
      register: true,
    };
  }
});

module.exports = router;

// // session测试
// router.get("/login-test", async (ctx, next) => {
//   const { username, password } = ctx.query;
//   ctx.session.username = username;
//   ctx.session.password = password;

//   if (ctx.session.viewCount == null) {
//     ctx.session.viewCount = 0;
//   }

//   ctx.session.viewCount++;

//   ctx.body = {
//     errno: 0,
//     viewCount: ctx.session.viewCount,
//     username: ctx.session.username,
//     password: ctx.session.password,
//   };
// });

// router.get("/login-testvr", async (ctx, next) => {
//   ctx.body = {
//     username: ctx.session.username,
//     password: ctx.session.password,
//   };
// });
