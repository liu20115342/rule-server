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
    {
      name: 'netflix', // 模板中对应 remoteSnippets.netflix
      url: 'https://raw.githubusercontent.com/ConnersHua/Profiles/master/Surge/Ruleset/Media/Netflix.list'
    },
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
    /**
     * Surge
     */
    {
      name: 'SurgeV3.conf', // 新版 Surge
      template: 'surge_v3',
      provider: 'demo',
    },
    {
      name: 'Surge_simple.conf', // 旧版 Surge
      template: 'surge_simple',
      provider: 'subscribe_demo',
    },
    // 合并 Provider
    {
      name: 'SurgeV3_combine.conf',
      template: 'surge_v3',
      provider: 'demo',
      combineProviders: ['subscribe_demo'],
    },

    /**
     * Clash
     */
    {
      name: 'Clash.yaml',
      template: 'clash',
      provider: 'subscribe_demo',
      proxyGroupModifier(nodeList, filters) {
        return [
          {
            name: '🚀 Proxy',
            type: 'select',
          },
          {
            name: '🎬 Netflix',
            filter: filters.netflixFilter,
            type: 'select',
          },
          {
            name: 'US',
            filter: filters.usFilter,
            type: 'url-test',
          },
          {
            name: 'HK',
            filter: filters.hkFilter,
            type: 'url-test',
          },
          {
            name: '🍎 Apple',
            proxies: ['DIRECT', '🚀 Proxy', 'US', 'HK'],
            type: 'select',
          },
          {
            name: '🍎 Apple CDN',
            proxies: ['DIRECT', '🍎 Apple'],
            type: 'select',
          },
        ];
      },
    },

    /**
     * Quantumult
     */
    {
      name: 'Quantumult_rules.conf',
      template: 'quantumult_rules',
      provider: 'subscribe_demo',
    },
    {
      name: 'Quantumult.conf',
      template: 'quantumult',
      provider: 'subscribe_demo',
    },
    {
      // 给 Quantumult 提供订阅地址
      name: 'Shadowsocks_subscribe.conf',
      template: 'shadowsocks_subscribe',
      provider: 'subscribe_demo',
    },

    /**
     * Quantumult X
     */
    {
      name: 'QuantumultX_rules.conf',
      template: 'quantumultx_rules',
      provider: 'demo',
    },
    {
      name: 'QuantumultX.conf',
      template: 'quantumultx',
      provider: 'demo',
    },
    {
      name: 'QuantumultX_subscribe_us.conf',
      template: 'quantumultx_subscribe',
      provider: 'demo',
      customParams: {
        magicVariable: utils.usFilter,
      },
    },
    {
      name: 'QuantumultX_subscribe_hk.conf',
      template: 'quantumultx_subscribe',
      provider: 'demo',
      customParams: {
        magicVariable: utils.hkFilter,
      },
    },
  ],
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

