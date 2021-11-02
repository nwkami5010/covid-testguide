
getLanguageCn().then(res=>{
//动态插入内容到i18n
this.$i18n.setLocaleMessage(e, res.data);
//本地语言开关切换
this.$i18n.locale = e;
//设置本地存储
localStorage.setItem("lang", e);
})