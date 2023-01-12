const mix = require('laravel-mix');
const path = require('path');
const sassGlobImporter = require('node-sass-glob-importer');

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
  .ts('resources/js/app.tsx', 'public/js')
  .sass('resources/css/app.scss', 'public/css', { sassOptions: { importer: sassGlobImporter() } })
  .webpackConfig({
    output: { chunkFilename: 'js/[name].js?id=[chunkhash]' },
    resolve: {
      alias: {
        'resources': path.resolve('resources')
      }
    },
  })
  .version()
  .sourceMaps();
