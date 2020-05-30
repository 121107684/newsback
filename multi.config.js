const path = require('path');
const glob = require('glob');
const fs = require('fs');
// 单页面编译
let onePage = '';
if (process.env.NODE_ENV === 'development') {
    onePage = process.env.url;
}
const files = fs.readdirSync('./src').some(v=>{
    return fs.lstatSync('./src/' + v).isDirectory() && v === 'pages'
})
const onlyOne =  {
    index: {
        entry: 'src/index.js',
        template: 'public/index.html'
    }
}
// 配置pages多页面获取当前文件夹下的html和js
function getEntry(globPath) {
    const entries = {};
    return glob.sync(globPath).reduce((result, entry) => {
        let basename = path.basename(entry, path.extname(entry));
        const tmp = entry.split('/').splice(-3);

        if (onePage && onePage !== tmp[1]) {
            return result;
        }
        // 正确输出js和html的路径
        result[basename] = {
            entry: 'src/' + tmp[0] + '/' + tmp[1] + '/' + tmp[1] + '.js',
            // template: 'src/' + tmp[0] + '/' + tmp[1] + '/' + tmp[2],
            template: 'public/index.html',
            title: tmp[2],
            filename: onePage ? 'index.html' : tmp[2]
        };
        return result;
    }, entries);
}
const pages =  files ? getEntry('./src/pages/**?/*.html') : onlyOne;
console.debug(pages)
if (onePage && !pages[onePage]) {
    throw Error(`${onePage}页面不存在`);
}

module.exports = pages;
// 配置end
