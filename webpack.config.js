//配置文件，需要暴露一个对象，使用commonjs
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
    //入口
    entry: "./src/hello.js",

    // entry: {
    //     index: "./src/hello.js",
    //     hello:"./src/index.js"
    // },

    output: {
        path: path.resolve(__dirname,"./dist"),
        // filename:"dai.js"
        // filename:"[name].js"
        filename:"[name]-[hash].js"
    },
    module: {
        //配置转换器规则
        rules: [
            {
                test: /\.css$/,
                use:["style-loader","css-loader"]
            },
            {
                test: /\.(scss|sass)$/,
                use:["style-loader","css-loader","sass-loader"],
            },
            {
                test: /\.less$/,
                use:["style-loader","css-loader","less-loader"]
            },
            {
                test: /\.(png|jpeg|gif|jpg)/,
                use:"file-loader"
            }
        ]

    },
    plugins: [new HtmlWebpackPlugin({
        template: path.resolve(__dirname,"./public/index.html")
    }),
        new CleanWebpackPlugin(),
    //copywebpackplugin
        new CopyWebpackPlugin([
            {
                from:"./public"
            }
        ])
    ]
}