const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename:"[name]-[hash].js"
    },
    module: {
        rules: [{
            test: "/\.(sass|scss)$/",
            use: ["style-loader", "css-loader", "sass-loader"]
        },
        {
            test: "/\.(jpg|jpeg|gif|png)$/",
            use: "file-loader"
        },
        {
            test: /\.vue$/,
            use: "vue-loader"
        }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template:path.resolve(__dirname,"./public/index.html")
        }),
        new CopyWebpackPlugin([{ from: path.resolve(__dirname, "./public") }]),
        new VueLoaderPlugin()
    ],
    // resolve: {
    //     alias: {
    //       'vue$': 'vue/dist/vue.esm.js' // 用 webpack 1 时需用 'vue/dist/vue.common.js'
    //     }
    //   }
    devServer: {
        // port:"9090"//配置端口号
        contentBase:path.resolve(__dirname,"./dist")
    }
    
}