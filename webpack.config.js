const path = require('path')

// 插件
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

//分离css
const ExtractTextPlugin = require('extract-text-webpack-plugin')
    //清理重复文件
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
    mode: 'production',
    stats: { children: false },
    entry: {
        index: './src/javascripts/index.js',
        personalCenter: './src/javascripts/personalCenter.js'
    },
    output: {
        filename: 'javascript/[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.html$/,
            use: 'html-loader'
        }, {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: 'css-loader'
            }),
        }, {
            test: /\.(png|jpg|gif)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'images/[name].[ext]'
                }
            }]
        }]
    },
    devServer: {
        contentBase: path.join(__dirname, "/dist"), //网站的根目录为 根目录/dist
        port: 9000, //端口改为9000
        host: 'localhost', //如果指定的host，这样同局域网的电脑或手机可以访问该网站,host的值在dos下使用ipconfig获取 
        open: true, // 自动打开浏览器
        index: 'index.html', // 与HtmlWebpackPlugin中配置filename一样
        inline: true, // 默认为true, 意思是，在打包时会注入一段代码到最后的js文件中，用来监视页面的改动而自动刷新页面,当为false时，网页自动刷新的模式是iframe，也就是将模板页放在一个frame中
        hot: true,
        compress: true //压缩
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '首页',
            template: './src/index.html',
            filename: 'index.html',
            minify: true,
            hash: true,
            showErrors: true,
        }),
        new HtmlWebpackPlugin({
            title: '个人中心',
            template: './src/personalCenter.html',
            filename: 'personalCenter.html',
            minify: true,
            hash: true,
            showErrors: true
        }),
        new ExtractTextPlugin({
            filename: 'styles/styles.css',
            allChunks: true
        }),
        new CleanWebpackPlugin('dist', {
            root: __dirname,
            verbose: true,
            dry: false
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
        new webpack.NoEmitOnErrorsPlugin(),
    ]

}