/*
* @Author: steven
* @Date:   2017-09-24 10:25:32
* @Last Modified by:   steven
* @Last Modified time: 2017-10-21 10:57:12
*/
var webpack           = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');

// 环境变量的配置 dev/ online
var WEBPACK_ENV       = process.env.WEBPACK_ENV || 'dev'

console.log(WEBPACK_ENV)

// 获取html-webpack-plugin参数的方法
var getHtmlConfig = function(name){
    return{
        template : './src/view/'+name+'.html',
        filename : 'view/'+name+'.html',
        inject   : true,
        hash     : true,
        chunks  : ['common', name]
    }
}

var config = {
     entry: {
        'common' : ['./src/page/common/index.js',],
        'index'  : ['./src/page/index/index.js'],
        'login'  : ['./src/page/login/index.js'],
        'ordinary_personal'  : ['./src/page/ordinary_personal/ordinary_personal.js'],
        'authentication_personal'  : ['./src/page/authentication_personal/authentication_personal.js'],
        'answer'  : ['./src/page/answer/answer.js'],
        'category'  : ['./src/page/category/category.js'],
        'forgot_password'  : ['./src/page/forgot_password/forgot_password.js'],
        'order'  : ['./src/page/order/order.js'],
        'pay'  : ['./src/page/pay/pay.js'],
        'question'  : ['./src/page/question/question.js'],
        'register'  : ['./src/page/register/register.js'],
        'search'  : ['./src/page/search/search.js'],
     },
     output: {
         path:'./dist',
         publicPath : '/dist',
         filename: 'js/[name].js'
     },
     externals : {
        'jquery' : 'window.jQuery'
     },
     module: {
        loaders: [
          { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader","css-loader")},
          { test: /\.(gif|png|jpg|woff|svg|eot|ttf)\??.*$/, loader: 'url-loader?limit=100&name=resource/[name].[ext]'}
        ]
     },
     resolve : {
        alias : {
            node_modules : __dirname + '/node_modules',
            util         : __dirname + '/src/util',
            page         : __dirname + '/src/page',
            service      : __dirname + '/src/service',
            image        : __dirname + '/src/image',
        }
     },
     plugins : [
        // 独立通用模块js/base.js
        new webpack.optimize.CommonsChunkPlugin({
            name : 'common',
            filename : 'js/base.js'
        }),
        // 把css单独打包到文件
        new ExtractTextPlugin("css/[name].css"),
        new HtmlWebpackPlugin(getHtmlConfig('index')),
        new HtmlWebpackPlugin(getHtmlConfig('login')),
        new HtmlWebpackPlugin(getHtmlConfig('ordinary_personal')),
        new HtmlWebpackPlugin(getHtmlConfig('authentication_personal')),
        new HtmlWebpackPlugin(getHtmlConfig('search')),
        new HtmlWebpackPlugin(getHtmlConfig('register')),
        new HtmlWebpackPlugin(getHtmlConfig('question')),
        new HtmlWebpackPlugin(getHtmlConfig('pay')),
        new HtmlWebpackPlugin(getHtmlConfig('order')),
        new HtmlWebpackPlugin(getHtmlConfig('forgot_password')),
        new HtmlWebpackPlugin(getHtmlConfig('category')),
        new HtmlWebpackPlugin(getHtmlConfig('answer'))
     ]
};
if('dev' === WEBPACK_ENV){
    config.entry.common.push('webpack-dev-server/client?http://localhost:8081/')
}

module.exports = config;