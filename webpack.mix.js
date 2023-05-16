let mix = require('laravel-mix');

mix.setPublicPath('./')
    .sass('src/assets/styles/scss/main.scss', 'chrome/css')
    .js('src/assets/js/background.js', 'chrome/js')
    .js('src/assets/js/main.js', 'chrome/js').vue()
    .copy('src/assets/icons/', 'chrome/assets/icons/')
    .copy('src/assets/icons/logo/', 'chrome/assets/logo/')
    .copy('src/assets/fonts/', 'chrome/assets/fonts/')
    .copy('src/manifest.json', 'chrome/manifest.json')
    .copy('src/assets/_locales/', 'chrome/_locales/')
    .copy('src/assets/*.html', 'chrome/')
    .options({
        processCssUrls: false
    });
