/**
 * @file 观察者, 全局事件观察和处理
 *
 */

import eventBus from 'common/eventBus';

// TODO Logger使用公共日志服务，临时写一个简单的
const logger = window.console;
logger.show = logger.warn;

export default {
    watch: (uiAlert) => {
        uiAlert = uiAlert || logger;
        eventBus.$on('requestError', () => {
            setTimeout(() => {
                uiAlert.show('网络异常');
            }, 300);
        });
        eventBus.$on('statusError', (data) => {
            switch (parseInt(data.code, 10)) {
                case 502:
                    // location.href = '/#/login';
                    break;
                case 401:
                    break;
                default:
                    setTimeout(() => {
                        uiAlert.show(data.message[0].details || '请求失败');
                    }, 300);
                    // uiAlert.show(data.errstr || '请求失败');
            }
        });
        eventBus.$on('valueError', err => {
            setTimeout(() => {
                uiAlert.show('错误提示', err);
            }, 300);
        });
    }
};
