/*
 * @Description: 
 * @Version: 
 * @Author: linjinzhi
 * @Date: 2020-08-11 17:36:15
 * @LastEditors: linjinzhi
 * @LastEditTime: 2020-08-11 17:36:31
 */
module.exports = {
  namespace: 'admin', // 注册model的域
  db: {
    url: 'mongodb://admin:mgb123.x@120.92.150.210:32383/admin?authSource=admin&w=1',
    options: {
      poolSize: 20,
      useNewUrlParser: true,
      useUnifiedTopology: true 
    }
  },// db配置信息
  schemas: {
    // equipment_atk: {
    //   path: './app/beans/dc/equipment_atk',
    //   alias: 'equipment_atk',// 注册的别名 不存在使用顶部key值
    //   // collection: 'equipment_atk', // collection名
    // },
  },
};