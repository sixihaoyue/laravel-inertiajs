const mix = require('laravel-mix');
const path = require('path');
require('laravel-mix-clean');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.extract();
mix.options({ 'cssModuleIdentifier': '[name]__[local]--[hash:base64:5]' })
  .ts('resources/js/app.tsx', 'build/js')
  .react({extractStyles: 'build/css/app.css'})
  .webpackConfig({
    output: { chunkFilename: 'build/js/[name].js?id=[chunkhash]' },
    resolve: {
      alias: {
        'resources': path.resolve('resources')
      }
    },
  })
  .clean({
    cleanOnceBeforeBuildPatterns: [path.resolve(__dirname, 'public/build/**/*')],
   })
  .version()
  .sourceMaps();
