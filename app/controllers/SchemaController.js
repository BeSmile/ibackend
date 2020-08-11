/*
 * @Description: 
 * @Version: 
 * @Author: linjinzhi
 * @Date: 2020-08-11 22:59:04
 * @LastEditors: linjinzhi
 * @LastEditTime: 2020-08-11 23:00:51
 */
const { dbPools } = require('../../db/pool');

class SchemaController {
  constructor(namespace) {
    this.schema = dbPools[namespace];
  }
  resolve() {
    return new Proxy(this, {
      get(target, name) {
        return target[name].bind(target);
      }
    })
  }
}

module.exports = SchemaController;

