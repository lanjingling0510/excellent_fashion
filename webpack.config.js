/* eslint-disable */
var path = require('path');
var webpack = require('webpack');
var merge = require('webpack-merge');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var cssnext = require('cssnext');
var postcssImport = require('postcss-import');
var postMixins = require('postcss-mixins');
var postNested = require('postcss-nested');

var TARGET = process.env.npm_lifecycle_event;
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'src');
var BUILD_PATH = path.resolve(ROOT_PATH, 'dist');

/* eslint-enable */
var common = {
    entry: {
        vendor: ['jquery'],
        index: path.join(APP_PATH, 'index'),
        development: path.join(APP_PATH, 'development'),
        groupIntro: path.join(APP_PATH, 'groupIntro'),
        learn: path.join(APP_PATH, 'learn'),
        main: path.join(APP_PATH, 'main'),
        news: path.join(APP_PATH, 'news'),
        newsDetail: path.join(APP_PATH, 'newsDetail'),
        public: path.join(APP_PATH, 'public'),
        payment: path.join(APP_PATH, 'payment'),
        subbrand: path.join(APP_PATH, 'subbrand'),
        webstore: path.join(APP_PATH, 'webstore'),
    },
    output: {
        path: 'dist',
        filename: '[name].bundle.js',
    },
    module: {
        loaders: [{
            test: /\.json$/,
            loader: 'json'
        }, {
            test: /\.(png|jpg)$/,
            loader: 'url?limit=25000'
        }, {
            test: /\.html$/,
            exclude: /node_modules/,
            loader: 'html'
        }, {
            test: /\.(ttf|eot|svg|otf)(\?v=\d(\.\d){2})?$/,
            loader: 'file'
        }, {
            test: /\.woff(2)?(\?v=\d(\.\d){2})?$/,
            loader: 'url?limit=10000&minetype=application/font-woff'
        }, ]
    },
    postcss: function () {
        return [
            postcssImport({
                onImport: function (files) {
                    files.forEach(this.addDependency);
                }.bind(this),
            }),
            cssnext({
                features: {
                    'browers': ['> 10%, last 2 versions, ie >= 9, not opera >= 33'],
                },
            }),
            postMixins,
            postNested,
        ];
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'main.html',
            template: './src/main.html',
            chunks: ['vendor', 'index'],
        }),
        new HtmlWebpackPlugin({
            filename: 'development.html',
            template: './src/development.html',
            chunks: ['vendor', 'development'],
        }),
        new HtmlWebpackPlugin({
            filename: 'groupIntro.html',
            template: './src/groupIntro.html',
            chunks: ['vendor', 'groupIntro'],
        }),
        new HtmlWebpackPlugin({
            filename: 'learn.html',
            template: './src/learn.html',
            chunks: ['vendor', 'learn'],
        }),
        new HtmlWebpackPlugin({
            filename: 'main.html',
            template: './src/main.html',
            chunks: ['vendor', 'main'],
        }),
        new HtmlWebpackPlugin({
            filename: 'news.html',
            template: './src/news.html',
            chunks: ['vendor', 'news'],
        }),
        new HtmlWebpackPlugin({
            filename: 'public.html',
            template: './src/public.html',
            chunks: ['vendor', 'public'],
        }),
        new HtmlWebpackPlugin({
            filename: 'newsDetail.html',
            template: './src/newsDetail.html',
            chunks: ['vendor', 'newsDetail'],
        }),
        new HtmlWebpackPlugin({
            filename: 'payment.html',
            template: './src/payment.html',
            chunks: ['vendor', 'payment'],
        }),
        new HtmlWebpackPlugin({
            filename: 'subbrand.html',
            template: './src/subbrand.html',
            chunks: ['vendor', 'subbrand'],
        }),
        new HtmlWebpackPlugin({
            filename: 'webstore.html',
            template: './src/webstore.html',
            chunks: ['vendor', 'webstore'],
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
        }),
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
    ],
};


/* ------------------------------------------------------------
 * development
 * ------------------------------------------------------------ */

if (TARGET === 'start' || !TARGET) {
    module.exports = merge(common, {
        module: {
            loaders: [{
                test: /\.css$/,
                loader: 'style!css!postcss'
            }, ]
        }
    });
}

/* ------------------------------------------------------------
 * product
 * ------------------------------------------------------------ */


if (TARGET === 'build') {
    module.exports = merge(common, {
        module: {
            loaders: [{
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader')
            }]
        },
        plugins: [
            new ExtractTextPlugin('[name].css', {
                disable: false,
                allChunks: true,
            })
        ]
    });
}
