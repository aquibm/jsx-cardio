const path = require('path')
const cssnext = require('postcss-cssnext')

module.exports = {
    module: {
        loaders: [{
            test: /\.css$/,
            loader: 'style!css?modules&localIdentName=[name]_[local]_[hash:base64:3]!postcss',
            include: path.resolve(__dirname, '../')
        }]
    },
    postcss: function () {
        return [
            cssnext()
        ]
    }
}
