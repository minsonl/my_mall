const Koa = require('koa');
const Routers = require("./router/routers.js");
const static = require('koa-static');
const views = require('koa-views');
const config = require('./config/config')
const path = require('path');
const app = new Koa();
app.use(require('koa-static')(__dirname + '/static'));

app.use(views(path.join(__dirname, './views'), {
  extension: 'ejs'
}))

 // 调用路由中间件
app.use(Routers.routes(),Routers.allowedMethods());
app.listen(config.port, ()=>{
  console.log(`server is running at http://localhost:${config.port}`);
})