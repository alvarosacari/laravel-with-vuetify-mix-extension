const mix = require('laravel-mix')
const path = require('path')
require('vuetifyjs-mix-extension')

const RESOURCES_CONTEXT = 'resources/js'
const JS_FOLDER = 'js_generated'
const IMG_FOLDER = 'img_generated'
const MEDIA_FOLDER = 'media_generated'

if (Config.hmr) {
  Config.hmrOptions = {
    https: false,
    host: 'localhost',
    port: '8888'
  }
  const { https, host, port } = Config.hmrOptions
  Config.resourceRoot = `http${https ? 's' : ''}://${host}:${port}/`
}

mix.alias({
  '@': path.join(__dirname, RESOURCES_CONTEXT)
})

mix.options({
  terser: {
    extractComments: false
  },
  postCss: [require('autoprefixer')]
})

mix.webpackConfig({
  module: {
    rules: [
      {
        test: /(\.(png|jpe?g|gif|webp)$|^((?!font).)*\.svg$)/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: `${IMG_FOLDER}/[path][name].[ext]?[hash]`,
              context: RESOURCES_CONTEXT,
              esModule: false
            }
          }
        ]
      },
      {
        test: /\.(mp3|mp4)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: `${MEDIA_FOLDER}/[path][name].[ext]?[hash]`,
              context: RESOURCES_CONTEXT,
              esModule: false
            }
          }
        ]
      }
    ]
  }
})

mix
  .js(`${RESOURCES_CONTEXT}/main.js`, `public/${JS_FOLDER}`)
  .vuetify('vuetify-loader', `${RESOURCES_CONTEXT}/plugins/vuetify/vuetify-variables.scss`)
  .vue({ version: 2 })
  .extract(['vue', 'vuetify'])

if (process.env.NODE_ENV !== 'development') {
  mix.version()
}
