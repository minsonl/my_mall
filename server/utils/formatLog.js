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

let formatError = (ctx, err) => {
    let url = ctx.url
    let method = ctx.method
    let ip = ctx.request.ip
    let body = ctx.request.body
    let responseStatus = ctx.response.status
    let userAgent = ctx.header.userAgent
    return {ip,method, url,responseStatus ,body, err}
}

module.exports = {formatError, formatRes}