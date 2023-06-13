let mix = require('laravel-mix');

mix.setPublicPath('./')
    .webpackConfig({
        resolve: {
            extensions: [".*",".wasm",".mjs",".js",".jsx",".json",".vue",".*",".html",".css",".svg"],
        },
    })
    .copy('src/background.js', 'chrome/js/')
    .js('src/app/css-outliner.js', 'chrome/js').vue()
    .copy('src/app/assets/logo/*', 'chrome/assets/logo/')
    .copy('src/manifest.json', 'chrome/')
