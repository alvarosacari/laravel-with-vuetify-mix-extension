const mix = require('laravel-mix')
const path = require('path')
require('vuetifyjs-mix-extension')

mix.alias({
  '@': path.join(__dirname, 'resources/js')
})

mix
  .js('resources/js/main.js', 'public/js_generated')
  .vuetify('vuetify-loader', 'resources/js/plugins/vuetify/vuetify-variables.scss', {
    progressiveImages: true,
  })
  .vue()

