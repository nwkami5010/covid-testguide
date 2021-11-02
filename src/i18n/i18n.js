import Vue from 'vue';
import VueI18n from 'vue-i18n';
import Cookies from 'js-cookie';
// import enLocaleElement from 'element-ui/lib/locale/lang/en';
// import zhLocaleElement from 'element-ui/lib/locale/lang/zh-CN';
// import zhLocale from './zh';
// import enLocale from './en';
import locale from 'element-ui/lib/locale';
import messages from './langs';
Vue.use(VueI18n);



// 获取语言环境并保留状态
export function getLanguage() {
    const cookieLanguage = Cookies.get('language');
    if (cookieLanguage) return cookieLanguage;

    const browserLanguage = (navigator.language || navigator.browserLanguage).toLowerCase();
    const locales = Object.keys(messages);

    for (const locale of locales) {
        if (browserLanguage.indexOf(locale) > -1) {
            return locale;
        }
    }
}

const i18n = new VueI18n({
    locale: getLanguage(),
    messages,
    fallbackLocale: 'zh'
});
locale.i18n((key, value) => i18n.t(key, value)) //重点：为了实现element插件的多语言切换
// // 热更新
// if (module.hot) {
//     module.hot.accept(['./en', './zh'], function() {
//         i18n.setLocaleMessage('en', require('./en').default);
//         i18n.setLocaleMessage('zh', require('./zh').default);
//     });
// }

export default i18n;


// // 配置elementUI 语言转换关系
// i18n.i18n((key, value) => i18n.t(key, value))
// export default i18n