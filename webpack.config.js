/* eslint-disable */
var path = require('path');
var webpack = require('webpack');
var cssnext = require('cssnext');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var postcssImport = require('postcss-import');
var postMixins = require('postcss-mixins');
var postNested = require('postcss-nested');

/* eslint-enable */
module.exports = {
    context: path.join(__dirname, '/src'),
    entry: {
        vendor: ['jquery'],
        home: './home',
        login: './login',
    },
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'js/[name].bundle.js',
    },
    module: {
        loaders: [
            {test: /\.js$/, exclude: /node_modules/, loader: 'babel'},
            {test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader')},
            {test: /\.json$/, loader: 'json'},
            {test: /\.(png|jpg)$/, loader: 'url?limit=25000'},
            {test: /\.html$/, exclude: /node_modules/, loader: 'html!html-minify'},
            {test: /\.(ttf|eot|svg|otf)(\?v=\d(\.\d){2})?$/, loader: 'file'},
            {test: /\.woff(2)?(\?v=\d(\.\d){2})?$/, loader: 'url?limit=10000&minetype=application/font-woff'},
        ],
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
                    'browers': ['last 2 version'],
                },
            }),
            postMixins,
            postNested,
        ];
    },
    plugins: [
        new ExtractTextPlugin('css/[name].css?[hash]-[chunkhash]-[contenthash]-[name]', {
            disable: false,
            allChunks: true,
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            _: 'lodash',
        }),
        new webpack.optimize.CommonsChunkPlugin('vendor', 'js/vendor.bundle.js'),
    ],
};
