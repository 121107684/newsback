export function objToParams(json, slice = '&') {
    return Object.keys(json).reduce((acc, item) => {
        return String(acc) + item + '=' + json[item] + slice;
    }, '').slice(0, -1);
}

export function num2Str(strs) {
    if (!strs) {
        return new TypeError('请传入需要转化的参数');
    }
    let reg = /[^\\]\"\:\d{16,19}/g;
    strs = strs.replace(reg, (v) => {
        return v.substring(0, 3) + '"' + v.substring(3) + '"';
    });
    return strs;
}
