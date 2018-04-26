const Koa = require('koa');
const onerror = require('koa-onerror');
const koa_static = require('koa-static');
const views = require('koa-views');
const path = require('path');
const Routers = require("./router/routers.js");
const logger = require('./utils/writeLog');
const app = new Koa();
onerror(app);

//设置静态资源目录
app.use(require('koa-static')(__dirname + '/static'));
//设置模板引擎
app.use(views(path.join(__dirname, './views'), {extension: 'ejs'}))
//打印、保存响应信息
app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  logger.res(ctx,ms);
  console.log(`${ctx.method} ${ctx.url} - ${ms}`);
});
//打印、保存错误信息
app.on('error', (err, ctx) => {
	logger.error(ctx,err);
  console.error('server error', err, ctx)
});
//加载路由
app.use(Routers.routes(),Routers.allowedMethods());

app.listen(3000);