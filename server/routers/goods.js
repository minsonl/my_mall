const Router = require('koa-router'); //路由中间件

var goodsRouter = new Router(); //子路由
goodsRouter.get('/', async(ctx, next)=>{  // -> host/goods/
	ctx.response.body = `<h1>you can go to /goodslist or /goodsdetails</h1>`
});
goodsRouter.get('/goodslist', async(ctx, next)=>{   // -> host/goods/goodslist
	ctx.response.body = "<h1>goodslist</h1>"
});
goodsRouter.get('/goodsdetails', async(ctx, next)=>{  // -> host/goods/goodsdetails
	ctx.response.body = "<h1>goodsdetails</h1>"
});
module.exports = goodsRouter