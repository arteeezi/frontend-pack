"use strict";


module.exports = {
	entry: ["@babel/polyfill", "./src/js/index.js"],
    output: {
        filename: "[name].js",
    },

    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /node_modules/,
                    chunks: "initial",
                    name: "vendor",
                    enforce: true
                }
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,

            }
        ]
    },

};