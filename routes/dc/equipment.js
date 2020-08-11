/*
 * @Description: 
 * @Version: 
 * @Author: linjinzhi
 * @Date: 2020-08-10 23:16:00
 * @LastEditors: linjinzhi
 * @LastEditTime: 2020-08-11 22:51:24
 */
const router = require('koa-router')();

const equipment_controller = require('../../app/controllers/dc/EquipmentController');

router.get('/equipment_five', equipment_controller.fiveList);

module.exports = router;