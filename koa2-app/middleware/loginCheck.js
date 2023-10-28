const loginCheck = async (ctx, next) => {
  if (ctx.session.username) {
    await next();
    return;
  }
  console.log(ctx.session);
  ctx.body = {
    login: false,
  };
};

module.exports = loginCheck;
