module.exports = {
  apps: [{
    name: 'rule-server',
    script: './server/index.js',
    watch: false,
    autorestart: true // 程序崩溃后自动重启
  }]
}