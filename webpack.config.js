const devMode = process.env.NODE_ENV !== 'production'

const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: devMode? 'development' : 'production',
    entry: './src/main.js',
    output: {
        filename: devMode? 'assets/js/main.js' : 'assets/js/main.min.js' ,
        path: __dirname + '/public'
    },
    devServer: {
        contentBase: "./public",
        port: 9000,
        writeToDisk: true
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'assets/css/style.css'
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html'
        })
    ],
    module: {
        rules: [{
            test: /\.s?[ac]ss$/,
            use: [
                {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        publicPath: '../../'
                    }
                },
                'css-loader', // Interpreta @import, url()...
                'sass-loader'
            ]
        },
        {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        },
        {
            test: /\.(png|svg|jpg|gif)$/,
            loader: 'file-loader',
            options: {
                outputPath: 'assets/img',
            }
        },
        {
            test:/\.html$/,
            loader: 'html-loader'
        }
        ]
    }
}