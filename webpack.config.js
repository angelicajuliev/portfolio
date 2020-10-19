const path = require('path');

module.exports = {
    resolve: {
        img: path.resolve(__dirname, 'src/assets/img/')
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader', {
                loader: 'style-resources-loader',
                options: {
                    patterns: [
                        './src/assets/scss/variables/*.scss'
                    ]
                }
            }]
        }]
    },
    // ...
}