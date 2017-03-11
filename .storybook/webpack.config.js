const path = require('path');

module.exports = {
    module: {
        loaders: [{
            test: /\.css$/,
            loader: 'style!css?modules&localIdentName=[name]_[local]_[hash:base64:3]',
            include: path.resolve(__dirname, '../')
        }]
    },
    postcss: function () {
        return [
            autoprefixer({
                browsers: [
                    '>1%',
                    'last 4 versions',
                    'Firefox ESR',
                    'not ie < 9'
                ]
            })
        ]
    }
}
