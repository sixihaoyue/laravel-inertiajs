const path = require('path')
const mix = require('laravel-mix')
const nodeExternals = require('webpack-node-externals');

mix
  .options({ manifest: false })
  .ts('resources/js/ssr.tsx', 'public/js')
  .react({extractStyles: true})
  .webpackConfig({
    target: 'node',
    resolve: {
      alias: {
        'resources': path.resolve('resources')
      }
    },
    externals: [nodeExternals()],
  })
