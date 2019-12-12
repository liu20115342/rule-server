'use strict';

const { utils } = require('surgio');

/**
 * 使用文档：https://surgio.royli.dev/
 */
module.exports = {
  /**
   * 远程片段
   * 文档：https://surgio.royli.dev/guide/custom-config.html#remotesnippets
   */
  remoteSnippets: [
    {
      name: 'telegram', // 模板中对应 remoteSnippets.telegram
      url: 'https://raw.githubusercontent.com/ConnersHua/Profiles/master/Surge/Ruleset/Telegram.list'
    },
    // {
    //   name: 'netflix', // 模板中对应 remoteSnippets.netflix
    //   url: 'https://raw.githubusercontent.com/ConnersHua/Profiles/master/Surge/Ruleset/Media/Netflix.list'
    // },
    {
      name: 'hbo', // 模板中对应 remoteSnippets.hbo
      url: 'https://raw.githubusercontent.com/ConnersHua/Profiles/master/Surge/Ruleset/Media/HBO.list'
    },
    {
      name: 'hulu', // 模板中对应 remoteSnippets.hulu
      url: 'https://raw.githubusercontent.com/ConnersHua/Profiles/master/Surge/Ruleset/Media/Hulu.list'
    },
    {
      name: 'paypal', // 模板中对应 remoteSnippets.paypal
      url: 'https://raw.githubusercontent.com/ConnersHua/Profiles/master/Surge/Ruleset/PayPal.list',
    },
  ],
  customFilters: {
    hktFilter: utils.useKeywords(['hkt', 'HKT']),
  },
  artifacts: [
    {
      name: 'SurgeV3.conf', // 新版 Surge
      template: 'surge3',
      provider: 'demo',
    },
    {
      name: 'SurgeV3_combine.conf',
      template: 'surge3',
      provider: 'demo',
      combineProviders: ['v2ray_subscribe_demo'],
    },
  ],
  surgeConfig: {
    v2ray: 'native',
    resolveHostname: true,
  },
  /**
   * 订阅地址的前缀部分，以 / 结尾
   * 例如阿里云 OSS 的访问地址 https://xxx.oss-cn-hangzhou.aliyuncs.com/
   */
  urlBase: 'https://example.com/',
  upload: {
    // 默认保存至根目录，可以在此修改子目录名，以 / 结尾，默认为 /
    prefix: '/',
    bucket: 'surgio-store',
    // 支持所有区域
    region: 'oss-cn-hangzhou',
    // 以下信息于阿里云控制台获得
    accessKeyId: 'YOUR_ACCESS_KEY_ID',
    accessKeySecret: 'YOUR_ACCESS_KEY_SECRET',
  },
  // 非常有限的报错信息收集
  analytics: false,
};

