const path = require('path')
const mix = require('laravel-mix')
const nodeExternals = require('webpack-node-externals');

mix
  .options({ 'cssModuleIdentifier': '[name]__[local]--[hash:base64:5]', manifest: false })
  .ts('resources/js/ssr.tsx', 'public/ssr/app.js')
  .react({extractStyles: 'public/ssr/app.css'})
  .webpackConfig({
    target: 'node',
    resolve: {
      alias: {
        'resources': path.resolve('resources')
      }
    },
    externals: [nodeExternals()],
  })
