const webpack = require("webpack")
const path = require("path")
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    mode: 'development',
    entry: "./app.js",
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
                exclude: /(node_modules)/
                
            },
            {
                test: /\.js$/,
                use: "babel-loader",
                
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
            'css': path.resolve(__dirname, './assets/css'),
            'views': path.resolve(__dirname, './views'),
            'store': path.resolve(__dirname, './store')
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