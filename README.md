# rule-server
Surgio 工具 web控制更新

## surgio

[项目地址](https://github.com/geekdada/surgio)

[surgio文档](https://surgio.royli.dev/)

> 感谢surgio开发者提供的非常好的工具

## 背景

surgio是一站式各类代理规则生成器，支持本地生成多种代理工具的规则文件，同时支持同步阿里oss。
但是目前surgio需要手动触发或gitlab-CL的构建容器或托管到serverLess平台使用。本项目提供给个人vps搭建服务，web页面管理构建

## 服务搭建

### 安装 Node.js

[前往下载 Node.js](https://nodejs.org/en/)
> node版本大于8.10.0版本

```sh
# 安装好node后全局安装pm2
npm install pm2 -g
```

#### 拉取项目 && 安装依赖

```sh
git clone git@github.com:liu20115342/rule-server.git
cd rule-server
# 安装依赖
npm install # 如果安装慢可以使用npm淘宝源 或 cnpm
```
#### 环境变量说明

拷贝`.env.template`文件为`.env`
```

# v2ray订阅地址 具体配置自行修改 因为我只用到了v2ray，所以只配置了这个
V2RAY_URL=https://example.com
# 域名 生成得配置文件链接的域名，不配置则为当前ip:port
DOMAIN=https://example.com
# web服务端口
PORT=4000
```

#### 启动服务

```sh
# 本地启动调试
npm start
# vps上静默启动
pm2 start pm2.json

# 其实项目暂时没区分环境
```

## 说明

上班摸鱼写的,目前页面只有一个构建按钮，页面简单的一匹，api没有做错误的返回，所以报错需看pm2的日志

### TODO

1. 完善页面
2. api层错误捕获
3. 部分配置项可前端填写
