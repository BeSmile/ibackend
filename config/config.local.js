/*
 * @Description: 
 * @Version: 
 * @Author: linjinzhi
 * @Date: 2020-08-10 21:23:04
 * @LastEditors: linjinzhi
 * @LastEditTime: 2020-08-11 00:55:40
 */
module.exports = {
	app: {
		port: 8888
	},
	redis: {
		
	},
	mongodb: {
    db: 'mongodb://admin:mgb123.x@120.92.150.210:32383/dc?authSource=admin&w=1',
    server: {poolSize: 20},
		config: {
      // user: 'admin',
      // pass: 'mgb123.x',
      // auth: {
      //   authdb: 'dc'
      // },
      useNewUrlParser: true,
      useUnifiedTopology: true 
		}
	}
};