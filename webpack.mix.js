const mix = require('laravel-mix')
const path = require('path')
require('vuetifyjs-mix-extension')

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
  '@': path.join(__dirname, 'resources/js')
})

mix
  .js('resources/js/main.js', 'public/js_generated')
  .vuetify('vuetify-loader', 'resources/js/plugins/vuetify/vuetify-variables.scss', {
    progressiveImages: true,
  })
  .vue()

