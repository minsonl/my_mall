const Router = require('koa-router'); //路由中间件
const getGoods = require('../models/getGoodsType.js');
var homeRouter = new Router();

homeRouter.get('/', async(ctx, next) => { // -> host/
	let datas = await getGoods.getGoodsType('SELECT * FROM goods_type');
	let datas2 = await getGoods.getGoodsType('SELECT * FROM goods');
	await ctx.render('home', {datas,datas2})
})
module.exports = homeRouter;