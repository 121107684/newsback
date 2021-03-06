const Mocks = require('./mock.config');
const path = require('path');
const resolve = (dir) => path.join(__dirname, dir);
const pages = require('./multi.config');

class CustomFilterPlugin {
    constructor({ exclude }) {
        this.exclude = exclude;
    }

    apply(compiler) {
        compiler.hooks.afterEmit.tap('CustomFilterPlugin', compilation => {
            compilation.warnings = compilation.warnings.filter(warning => !this.exclude.test(warning.message));
        });
    }
}

module.exports = {
    lintOnSave: false,
    productionSourceMap: false,
    publicPath: './',
    pages,
    configureWebpack: {
        plugins: [
            new CustomFilterPlugin({
                exclude: /Conflicting order between:/
            })
        ]
    },
    chainWebpack: (config) => {
        config.plugins.delete('prefetch-index');
        config.plugins.delete('preload-index');
        // 添加别名
        config.resolve.alias
            .set('@', resolve('src'))
            .set('components', resolve('src/components'))
            .set('common', resolve('src/common'))
            .set('modules', resolve('src/modules'));
    },
    devServer: {
        port: 8080,
        // before: Mocks,
        disableHostCheck: true,
        proxy: {
            '/': {
                target: 'http://lyxh.dev.jingbaotech.com',
                changeOrigin: true
            }
        }
    }
};
