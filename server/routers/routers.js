const routers = require('koa-router')(); //路由中间件
const home = require("./home.js");
const goods = require("./goods.js")
//let routers = new Router(); //主路由
//
//routers.get('/', async(ctx, next) => { // -> host/
//  ctx.response.body = '<h1>HOME page</h1>'
//})
//
//var goods = new Router(); //子路由
//goods.get('/', async(ctx, next)=>{  // -> host/goods/
//	ctx.response.body = `<h1>you can go to /goodslist or /goodsdetails</h1>`
//});
//goods.get('/goodslist', async(ctx, next)=>{   // -> host/goods/goodslist
//	ctx.response.body = "<h1>goodslist</h1>"
//});
//goods.get('/goodsdetails', async(ctx, next)=>{  // -> host/goods/goodsdetails
//	ctx.response.body = "<h1>goodsdetails</h1>"
//});
//routers.use('/goods', goods.routes(), goods.allowedMethods());

routers.use('/', home.routes(), home.allowedMethods());
routers.use('/goods', goods.routes(), goods.allowedMethods());
module.exports = routers;