let mix = require('laravel-mix');

mix.setPublicPath('./')
    .sass('src/assets/styles/scss/main.scss', 'dist/css')
    .js('assets/js/background.js', 'dist/js')
    .js('assets/js/main.js', 'dist/js').vue()
    .copy('assets/icons/', 'dist/assets/icons')
    .copy('assets/logo/', 'dist/assets/logo')
    .copy('assets/fonts/', 'dist/assets/fonts')
    .options({
        processCssUrls: false
    });
