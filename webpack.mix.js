const mix = require('laravel-mix');
const path = require('path');
//
const cssModuleIdentifier = '[name]__[local]--[hash:base64:5]';
const alias =  {
  'resources': path.resolve('resources')
}
if (process.env.npm_config_ssr) {
  const nodeExternals = require('webpack-node-externals');
  mix.options({ cssModuleIdentifier, manifest: false })
    .ts('resources/js/ssr.tsx', 'public/ssr/app.js')
    .react({extractStyles: 'public/ssr/app.css'})
    .webpackConfig({
      target: 'node',
      resolve: { alias },
      externals: [nodeExternals()],
    })
} else {
  require('laravel-mix-clean');
  mix.extract();
  mix.options({ cssModuleIdentifier })
    .ts('resources/js/app.tsx', 'release/js')
    .react({extractStyles: 'release/css/app.css'})
    .webpackConfig({
      output: { chunkFilename: 'release/js/[name].js?id=[chunkhash]' },
      resolve: { alias },
    })
    .clean({
      cleanOnceBeforeBuildPatterns: ['release'],
    })
    .version()
    .sourceMaps();
}

