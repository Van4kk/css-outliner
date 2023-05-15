module.exports = {
    productionSourceMap: false,
    chainWebpack: (config) => {
        const rules = ['css', 'postcss'];
        const types = ['vue-modules', 'vue', 'normal-modules', 'normal'];

        rules.forEach((rule) => {
            types.forEach((type) => {
                config.module
                    .rule(rule)
                    .oneOf(type)
                    .use('vue-style-loader')
                    .loader('vue-style-loader')
                    .tap((options) => {
                        if (options) {
                            options.shadowMode = true;
                        }

                        return options;
                    });
            });
        });
        config.module
            .rule('vue')
            .use('vue-loader')
            .tap((options) => {
                if (options) {
                    options.shadowMode = true;
                }

                return options;
            });

        config.module
            .rule('fonts')
            .use('url-loader')
            .loader('url-loader')
            .tap((options) => Object.assign(options, { limit: 30240 }))
    },
    pages: {
      popup: {
        template: 'public/browser-extension.html',
        entry: './src/popup/main.js',
        title: 'Popup'
      }
    },
    pluginOptions: {
        browserExtension: {
            componentOptions: {
                background: {
                    entry: 'src/background.js',
                },
                contentScripts: {
                    entries: {
                        'content-script': [
                          'src/css-outliner.js',
                          'src/content-scripts/content-script.js'
                        ],
                    },
                },
            },
        },
    },
};
