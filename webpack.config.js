const webpack = require("webpack")
const path = require("path")
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    mode: 'development',
    entry: "./assets/js/app.js",
    output: {
        path: path.resolve(__dirname, "./dist"),
        publicPath: "/dist/",
        filename: "[name].js"
    },
    module:{
        rules: [
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
                test: /\.(s*)css$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.vue'],
        alias:{
            'vue$': 'vue/dist/vue',
            'css': path.resolve(__dirname, './assets/css')
        }
    },
    devServer: {
        hot: true,
        watchOptions: {
            poll: true
        }
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()    
    ]
}