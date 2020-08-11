/*
 * @Description: 
 * @Version: 
 * @Author: linjinzhi
 * @Date: 2020-08-10 23:26:37
 * @LastEditors: linjinzhi
 * @LastEditTime: 2020-08-11 16:37:41
 */
const Router = require('koa-router');
const router = new Router();
const equipment_router = require('./dc/equipment');


router.use('/dc', equipment_router.routes(), equipment_router.allowedMethods());

module.exports = router;


