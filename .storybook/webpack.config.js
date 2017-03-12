const path = require('path')
const autoprefixer = require('autoprefixer')
const postcssNested = require('postcss-nested')

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
            autoprefixer({
                browsers: [
                    '>1%',
                    'last 4 versions',
                    'Firefox ESR',
                    'not ie < 9'
                ]
            }),
            postcssNested()
        ]
    }
}
