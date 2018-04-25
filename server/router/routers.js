const routers = require('koa-router')();
const fs = require('fs');
const controllersPath = __dirname + "/" +"../controllers";//控制器路径
fs.readdirSync(controllersPath).filter((path) => { //遍历控制器目录下.js文件
	if(path.endsWith('.js')){  
		let _Controller = require(controllersPath+"/"+path);
	    for(let KEY in _Controller){
			if(KEY.startsWith('GET ')){//get请求
				routers.get(KEY.substr(4),_Controller[KEY]);
			}else if(url.startsWith('POST ')){//post请求
				routers.post(KEY.substr(5),_Controller[KEY]);
			}else if(url.startsWith('PUT ')){//put请求
				routers.put(KEY.substr(4),_Controller[KEY]);
			}else if(url.startsWith('DELETE ')){//delete请求
				routers.del(KEY.substr(7),_Controller[KEY]);
			}else{
		        console.log(`invalid URL: ${KEY}`);
		    }
		}
	}
})
module.exports = routers;
