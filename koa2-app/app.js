const Koa = require("koa");
const app = new Koa();
const views = require("koa-views");
const json = require("koa-json");
const onerror = require("koa-onerror");
const bodyparser = require("koa-bodyparser");
const logger = require("koa-logger");
const cors = require("koa2-cors");
const session = require("koa-generic-session");
const redisStore = require("koa-redis");
const { REDIS_CONF } = require("./db/conf");

const user = require("./routes/user");
const goods = require("./routes/goods");

// error handler
onerror(app);

// middlewares
app.use(
  bodyparser({
    enableTypes: ["json", "form", "text"],
  })
);
app.use(cors({ credentials: true }));
app.use(json());
app.use(logger());
app.use(require("koa-static")(__dirname + "/public"));

app.use(
  views(__dirname + "/views", {
    extension: "pug",
  })
);

// logger
app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

app.keys = ["zhu_2527$"];
app.use(
  session({
    // 配置 cookie
    cookie: {
      path: "/",
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
    },
    // 配置 redis
    store: redisStore({
      all: `${REDIS_CONF.host}:${REDIS_CONF.port}`,
    }),
  })
);

// routes
app.use(user.routes(), user.allowedMethods());

app.use(goods.routes(), goods.allowedMethods());

// error-handling
app.on("error", (err, ctx) => {
  console.error("server error", err, ctx);
});

module.exports = app;
