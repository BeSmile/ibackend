/*
 * @Description: 
 * @Version: 
 * @Author: linjinzhi
 * @Date: 2020-08-10 23:17:11
 * @LastEditors: linjinzhi
 * @LastEditTime: 2020-08-11 23:38:47
 */
const SchemaController = require('../SchemaController');
const bodyparser = require('../../../helpers/bodyparser');

class EquipmentController extends SchemaController {
  constructor(namespace) {
    super(namespace);
  }
  async fiveList(ctx, next) {
    const EquipmentAtkModel = this.schema.model('equipment_atk');
    const data  = await EquipmentAtkModel.find({}).select('title url');
    ctx.body = (bodyparser("0", 'success', {
        rows: data,
        total:  data.length,
    }));
    await next();
  }
}

module.exports = new EquipmentController('dc').resolve();