const mysql = require('../utils/mysql.js');
async function getGoodsType(sql) {
  let dataList = await mysql.query( sql )
  return dataList
}
module.exports = {
    getGoodsType : getGoodsType
};