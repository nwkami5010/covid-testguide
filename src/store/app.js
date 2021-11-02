// app.js  这是我的store文件

import { getLanguage } from '@/i18n/'; // 引入之前写好的方法
// state里增加language字段
const state = {
    language: getLanguage()
};

const mutations = {
    SETLANGE: (state, language) => {
        state.language = language;
        Cookies.set('language', language);
    }
};


const actions = {
    setLanguage({ commit }, language) {
        commit('SETLANGE', language);
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions
};

