'use strict';
const V2RAY_URL = process.env.V2RAY_URL
module.exports = {
  url: V2RAY_URL,
  type: 'v2rayn_subscribe',
  // 定义所有的节点都支持 udpRelay
  udpRelay: true,
  // 添加国旗 emoji
  addFlag: true,
};
