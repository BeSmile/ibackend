/*
 * @Description: 
 * @Version: 
 * @Author: linjinzhi
 * @Date: 2020-08-11 16:44:42
 * @LastEditors: linjinzhi
 * @LastEditTime: 2020-08-11 23:10:50
 */
const mongoose = require('mongoose');
const {resolve} = require('path')
const { initPools } = require('../db/pool');

/**
 * 初始化models
 * @param {*} root 根目录
 * @param {*} path 文件路径
 */
const initModels = async function(root, path) {
  const promiseAll = path.map(async (p) => {
    const modelPath = `${root}/${p}`;// model路径
    const {
      namespace,
      db,
      schemas,
    } = require(modelPath);// model模型
    // 初始化mongodb池
    const dbPool = await initPools(namespace, db);
    // 注册scheme
    for(const key in schemas) {
      const schema = schemas[key];
      const path = resolve(schema.path);
      const schemaBean = require(path);
      let modelName = key;
      if(schema.hasOwnProperty('alias')) {
        modelName = schema.alias;
      }
      // schema注册model
      dbPool.model(modelName, schemaBean);
    };
  });
  await Promise.all(promiseAll);
}

module.exports = {
  initModels: initModels,
}