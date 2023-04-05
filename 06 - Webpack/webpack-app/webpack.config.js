//Creando configuracion para modo de desarrollo o produccion
//npm install --save-dev html-loader    instalar esta libreria o pluggin
//npm install --save-dev html-webpack-plugin    instalar esta libreria o pluggin

const HtmlWebpackPlugin = require('html-webpack-plugin');//Requiere estos plugin
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode : 'development',

    //Para que limpie automaticamente
    output:{clean:true},

    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader',
                options: {
                    sources:false
                }
            },
            {//Poner esta configuracion para css
                test: /\.css$/i,
                exclude: /main.css$/i,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /main.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.png/,
                type: 'asset/resource',
                generator: {
                    filename: 'static/[hash][ext][query]'
                }
            }
        ]
    },

    plugins:[
        new HtmlWebpackPlugin({
            template: 'src/index.html',//Conserva todo lo que tiene el archivo
            title: 'Mi Webpack App',
            filename: 'main.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'main.css'
        })
    ]

}