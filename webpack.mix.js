let mix = require('laravel-mix');

mix.setPublicPath('./')
    .webpackConfig({
        resolve: {
            extensions: [".*",".wasm",".mjs",".js",".jsx",".json",".vue",".*",".html",".css",".svg"],
        },
    })
    //.sass('src/assets/styles/scss/main.scss', 'chrome/css')
    .js('src/app/*.js', 'chrome/')
    .js('src/app/main.js', 'chrome/js').vue()
    .copy('src/app/assets/icons/*', 'chrome/assets/icons/')
    .copy('src/app/assets/icons/logo/*', 'chrome/assets/logo/')
    .copy('src/app/assets/fonts/', 'chrome/assets/fonts/')
    .copy('src/manifest.json', 'chrome/')
    .copy('src/_locales/', 'chrome/_locales/')
    .copy('src/app/assets/*.html', 'chrome/')
    .postCss('src/app/assets/styles/css/maintailwind.css', 'chrome/css/main.css', [
        require("tailwindcss")
    ])
    .options({
        processCssUrls: false
    });
