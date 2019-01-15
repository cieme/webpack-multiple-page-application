
### 对应多页面应用准备的webpack配置

#### 但是目前有以下几个问题还没能够解决
* loader：
  * js-loader
  * babel-loader
* plugin：
  * ExtractTextPlugin：
    * 在抽离css文件时，需要将css引入对应js文件中
    * 并且输出文件时，只能生成单一样式文件
  * HotModuleReplacementPlugin：
    * 模块的热更新任然需要刷新页面才生效
* 目前只有一个config文件，未能拆分成多个配置文件

#### 有几个可以注意的地方
* dev-server是webpack内置插件，但是需要install webpack-dev-server，并且需要在` package.json `中配置指令
* HtmlWebpackPlugin 有多个页面时，需要多次new这个方法
* 当webpack对插件兼容不好时，可以使用在`module.exports`对象中新增 `stats: { children: false }`,
