const webpack = require("webpack")
const path = require("path")
const {VueLoaderPlugin} = require('vue-loader')

module.exports= {
    mode: 'development',
    entry: "assets/js/index.js",
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename: '[name].js'
    },
    module:{
        rules: [
            {
                test: /\.(s*)css$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.vue$/,
                use: "vue-loader",
                include: /(clientApp)/
                
            },
            {
                test: /\.js$/,
                use: "babel-loader",
                include: /(clienApp)/,
                exclude: /(node_modules)/
            },
            { 
                test: /\.(png|jpg|jpeg|gif|svg)$/, 
                use: 'url-loader?limit=25000' 
            },
            { 
                test: /\.(eot|svg|ttf|woff|woff2)$/, 
                use: 'url-loader?limit=25000' 
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue',
        }
    },
    devServer: {
        hot: true,
        watchOptions: {
            poll: true
        }
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new VueLoaderPlugin()
    ]
}