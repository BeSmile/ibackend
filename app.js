/*
 * @Description: 
 * @Version: 
 * @Author: linjinzhi
 * @Date: 2020-08-10 21:18:18
 * @LastEditors: linjinzhi
 * @LastEditTime: 2020-08-11 22:31:17
 */
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const {resolve} = require('path');
const  fs = require('fs');
const { initModels } = require('./helpers/init');
const app = new Koa();
const config = require('./config/config.local.js');
app.use(bodyParser());
// require('./models');

const modelsPath = resolve('./models');
fs.readdir(modelsPath, async function(error, dirs) {
  if(error) {
    return console.error(error);
  };
  await initModels(modelsPath, dirs);

  const routes = require('./routes');

  app.use(routes.routes(), routes.allowedMethods());

});


app.listen(config.app.port, () => {
  console.log(`this server has listen by ${config.app.port}`);
});