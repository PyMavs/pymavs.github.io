const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'resc'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [ 
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../',
                            useRelativePaths: true
                        }
                    },
                    'css-loader',
                    'sass-loader'
                ]
            },
            { 
                test: /\.(png|woff|woff2|eot|ttf|svg|jpg)$/, 
                use: { loader: 'url-loader', }, 
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            path: path.resolve(__dirname, 'resc'),
            filename: 'styles.css'
        })
      ]
};



