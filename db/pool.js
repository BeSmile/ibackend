/*
 * @Description: 
 * @Version: 
 * @Author: linjinzhi
 * @Date: 2020-08-11 16:49:00
 * @LastEditors: linjinzhi
 * @LastEditTime: 2020-08-11 17:20:35
 */
const chalk = require('chalk');
const mongoose = require('mongoose');
let dbPools = Object.create({});

const dbConnect = async (config) => {
  let db = null;
  try {
      /** In real-time you'll split DB connection(into another file) away from DB calls */
      db = await mongoose.createConnection(config.url, config.options); // await on a step makes process to wait until it's done/ err'd out.
      // let dbResp = await Users.find({}).lean(); /** Gets all documents out of users collection. 
      // db.close(); // Needs to close connection, In general you don't close & re-create often. But needed for test scripts - You might use connection pooling in real-time. 
      // return dbResp;
      return db;
  } catch (err) {
      (db) && db.close(); /** Needs to close connection -
                 Only if mongoose.connect() is success & fails after it, as db connection is established by then. */
      console.log('Error at dbConnect ::', err)
      throw err;
  }
}

const initSchemas = function() {
  
}

// 初始化连接
const initPools = async function(namespace, options) {
  return dbConnect(options).then(conn => {
    console.log(chalk.green(`init pool ${options.url} success`));
    dbPools[namespace] = conn;
    return conn;
  }).catch(err => console.log('Err at Call ::', err));
}

module.exports = {
  dbPools: dbPools,
  initPools: initPools,
}