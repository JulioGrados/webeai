const withCSS = require('@zeit/next-css')

module.exports = withCSS({
  /* config options here */
  trailingSlash: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.node = {
        fs: 'empty',
        net: 'empty'
      }
    }
    config.resolve.mainFields = ['main', 'browser', 'module']
    return config
  },
  
})
