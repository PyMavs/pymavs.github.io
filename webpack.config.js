const path = require('path');

module.exports = {
    entry: './src/index.scss',
    output: {
        path: path.resolve(__dirname, 'assets'),
        filename: 'dist/bundle.js',
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: [{
                "style-loader",
                "css-loader", // translate CSS into common js
                "sass-loader" // compiles sass to css
                
            }]
        }]
    }
};



