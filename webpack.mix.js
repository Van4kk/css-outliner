let mix = require('laravel-mix');

mix.setPublicPath('./')
    .sass('src/assets/styles/scss/main.scss', 'dist/css')
    .js('src/assets/js/background.js', 'dist/js')
    .js('src/assets/js/main.js', 'dist/js').vue()
    .copy('src/assets/icons/', 'dist/assets/icons/')
    .copy('src/assets/icons/logo/', 'dist/assets/logo/')
    .copy('src/assets/fonts/', 'dist/assets/fonts/')
    .copy('src/manifest.json', 'dist/manifest.json')
    .copy('src/assets/_locales/', 'dist/_locales/')
    .copy('src/assets/*.html', 'dist/')
    .options({
        processCssUrls: false
    });
