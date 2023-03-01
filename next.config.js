// const { compose } = require('ramda')
// const nextTranslate = require('next-translate')

// const withExtensions = compose(nextTranslate)

const nextConfig = {
    webpack5: true,
    webpack: (config, options) => {
        config.resolve.fallback = { fs: false }
        // if (!options.isServer) config.node = { fs: 'empty' }
        return config
    },
}

module.exports = nextConfig
