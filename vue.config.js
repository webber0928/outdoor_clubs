module.exports = {
  // publicPath: process.env.NODE_ENV === 'production' ? '/dist/' : '/',
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/styles/main.scss";`
      }
    }
  },
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        /* eslint-disable no-return-assign, no-param-reassign */
        /* eslint-enable no-return-assign, no-param-reassign */
        args[0].title = process.env.npm_package_title;
        args[0].meta = [
          { charset: 'utf-8'},
          { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge'},
          { name: 'viewport', content: 'width=device-width,initial-scale=1.0,user-scalable=no'},
          { name: 'name', content: process.env.npm_package_title},
          { name: 'description', content: process.env.npm_package_description},
          { name: 'keywords', content: 'wistron, outdoors, Wistron Going Outdoors'},
          { name: 'author', content: 'Webber'},
          // Facebook meta data
          { property: 'og:title', content: process.env.npm_package_title},
          { property: 'og:description', content: process.env.npm_package_description},
          { property: 'og:site_name', content: process.env.npm_package_title},
          // Twitter meta data
          { name: 'twitter:card', content: 'summary'},
          { name: 'ttwitter:creator', content: 'Webber'},
          { name: 'twitter:title', content: process.env.npm_package_title},
          { name: 'twitter:card', content: process.env.npm_package_description},
        ]
        return args
    })
    config
      .plugin('define')
      .tap(args => {
        args[0]['process.env'].version = JSON.stringify(require('./package.json').version);
        return args;
      });
  }
};