const path = require('path');
const argv = require('yargs').argv;

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isDevelopment = argv.mode === 'development';
const isProduction = !isDevelopment;
const distPath = path.join(__dirname, 'dist');

const config = {
    entry: {
        main: './src/js/index.js'
    },
    output: {
        filename: 'bundle.js',
        path: distPath
    },
    module: {
        rules: [{
            test: /\.html$/,
            use: 'html-loader'
        }, {
            test: /\.js$/,
            exclude: /node_modules/,
            use: [{
                loader: 'eslint-loader'
            }]
        }, {
            test: /\.scss$/,
            exclude: /node_modules/,
            use: [
                isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
                'css-loader',
                {
                    loader: 'postcss-loader',
                    options: {
                        plugins: [
                            isProduction ? require('cssnano') : () => {},
                            require('autoprefixer')({
                                browsers: ['last 2 versions']
                            })
                        ]
                    }
                },
                'sass-loader'
            ]
        }, {
            test: /\.(eot|svg|ttf|woff|woff2|jpg|gif|png)$/,
            use: {
                loader: 'file-loader',
                options: {
                    name: 'fonts/[name][hash].[ext]'
                }
            },
        }]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    optimization: isProduction ? {
        minimizer: [
            new UglifyJsPlugin({
                sourceMap: true,
                uglifyOptions: {
                    compress: {
                        inline: false,
                        drop_console: true
                    },
                },
            }),
        ],
    } : {},
    devServer: {
        contentBase: distPath,
        port: 9000,
        compress: true,
        open: true,
        index: 'index.html',
        historyApiFallback: true
    }
};

module.exports = config;
