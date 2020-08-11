/*
 * @Description: 
 * @Version: 
 * @Author: linjinzhi
 * @Date: 2020-08-10 21:27:18
 * @LastEditors: linjinzhi
 * @LastEditTime: 2020-08-11 17:52:02
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var ObjectId = Schema.Types.ObjectId;

const EquipmentAtk = new Schema({
  _id: ObjectId,
  url: String,
  title: String,
}, { collection: 'equipment_atks' });

module.exports = EquipmentAtk;