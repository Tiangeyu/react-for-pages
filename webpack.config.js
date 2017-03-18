const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    // 入口文件，可以是多个入口
    entry: {
        'index' : './app/page/index/index.js',
        'home' : './app/page/home/index.js',
        'vendors' : ['jquery','react','react-dom']
    },
    // [name]根据打包文件命名
    // ${__dirname}指向当前执行脚本所在的目录，es6对应语法 _dirname
    output: {
        path: `${__dirname}/dist`, // 注意是反引号
        filename: '[name].js',
    },
    module: {
        //将.js文件转换成浏览器可以识别的javascript
        // preset表示使用的转换规则
        //若单独使用.babelrc作为设定，则可以省略query
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react'],
                },
            },
            {
                test: /\.css$/,
                loader : "style-loader!css-loader"
            },
            {
                test: /\.png/,
                loader: "url-loader?limit=10000"
            },
        ],
    },
    // webpack-dev-server相关参数设定
    devServer: {
        inline: true,
        port: 8000,
        open: true,    // 自开启
        // 处理跨域问题 什么get、post都能跨 而且非常智能，存在跨域就跨，不存在就正常获取，牛
        // '/'指target要跨的目标路径下的文件目录
        proxy:{
            "/" : {
                target : 'http://localhost:8080/jneb'
            }
        }
    },
    // plugins   使用html模版插件，webpack全套打包
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendors'),
        // 套用模版
        new HtmlWebpackPlugin({
            template: `${__dirname}/app/template/index.html`,
            filename: 'index.html',
            chunks:['index','vendors'],  //指定使用的入口文件
            inject: 'body',         //script引入的位置
        }),
        new HtmlWebpackPlugin({
            template: `${__dirname}/app/template/home.html`,
            filename: 'home.html',
            chunks:['home','vendors'],
            inject: 'body',
        })
    ],
};

