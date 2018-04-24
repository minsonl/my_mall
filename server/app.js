const Koa = require('koa');
const Routers = require("./routers/routers.js");
const static = require('koa-static');
const views = require('koa-views')
const path = require('path')
const app = new Koa();

app.use(require('koa-static')(__dirname + '/static'));

app.use(views(path.join(__dirname, './views'), {
  extension: 'ejs'
}))

 // 调用路由中间件
app.use(Routers.routes(),Routers.allowedMethods());
app.listen(3000, ()=>{
  console.log('server is running at http://localhost:3000');
})