var path = require('path')
var htmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
module.exports ={
    entry:path.join(__dirname,'./src/main.js'),
    output:{
       path: path.join(__dirname,'./dist'),
       filename:'boudle.js'
    },
    plugins:[

        new htmlWebpackPlugin({
            template:path.join(__dirname,'./src/index.html'),
            filename:'index.html'
        }),
        new VueLoaderPlugin()
    ],
    module:{
        rules:[
            {test:/\.css$/,use:['style-loader','css-loader']},
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
            {test:/\.scss$/,use:['style-loader','css-loader','scss-loader']},
            {test:/\.(jpg|png|gif|bmp|jpeg)$/,use:'url-loader'},
            {test: /\.js$/, use: 'babel-loader', exclude: /node_modules/},
            {test: /\.vue$/,use:'vue-loader'},
            {test:/\.(ttf|eot|svg|woff|woff2)$/,use:'url-loader'}
            

        ]
    },
    resolve:{
        alias:{
           // "vue$":"vue/dist/vue.js"
        }
    }
}