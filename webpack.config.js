var path = require('path');

var config = {
    entry: {
        main: './src/js/module1.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'mix-bundle.js'
    }
};

module.exports = config;