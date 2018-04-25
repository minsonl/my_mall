let formatError = (ctx, err,costTime) => {
    let method = ctx.method
    let url = ctx.url
    let body = ctx.request.body
    let userAgent = ctx.header.userAgent
    return {method, url, body, costTime, err}
}
let formatRes = (ctx,costTime) => {
    let method = ctx.method
    let url = ctx.url
	let ip = ctx.request.ip
	let query = ctx.request.query
    let body = ctx.request.body
    let responseStatus = ctx.response.status
    let responseMsg = ctx.response.message
    return {method, url, ip,query,body, costTime, responseStatus , responseMsg}
}
module.exports = {formatError, formatRes}