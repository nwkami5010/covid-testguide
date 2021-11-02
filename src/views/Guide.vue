<template>
  <div class="wrapper">
    <div class="container">
      <el-dropdown trigger="click" class="international" @command="handleSetLanguage">
        <div>
          语言切换
        </div>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item :disabled="language==='zh'" command="zh">
            中文
          </el-dropdown-item>
          <el-dropdown-item :disabled="language==='en'" command="en">
            English
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>


    </div>
    <div class="section">
      <el-button @click="toRouter" > 开始测试</el-button>
<!--      <div class="page-title">{{ $t(menu.username) }}</div>-->

<!--        <button @click="changeLanguage">change language</button>-->

    </div>

  </div>

</template>

<script>

export default {
  data(){
    return {

      value: ''
    }
  },
  computed: {
    language() {
      return this.$store.getters.language; //这里我用getters处理，代码不贴了，你么你随意
    }
  },
  methods:{
    handleSetLanguage(lang) {
      // 通过VueI18n的根实例设置当前的语言环境  不懂请看文档 http://kazupon.github.io/vue-i18n/zh/api/#%E9%9D%99%E6%80%81%E5%B1%9E%E6%80%A7
      this.$i18n.locale = lang;
      this.$store.dispatch('app/setLanguage', lang);
      this.$message({
        message: 'Switch Language Success',
        type: 'success'
      });
    }
  }




  // watch:{
  //   changeLocale (langs) {
  //     this.$i18n.i18n = langs
  //   },
  //   immediate:true
  // }

}
</script>

<style lang="scss"></style>