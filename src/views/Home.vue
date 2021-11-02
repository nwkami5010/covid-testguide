<template>
  <div class="text-center">
    <div class="topNavbar">
      <TopNavbar />
    </div>
    <el-button type="primary"
               @click="toRouter"
               class="btn btn-lg btn-primary btn-block">Start Testing</el-button>
  </div>
  <!--  <div class>-->
  <!--    <a href="/guide/admin">Team & Record </a>-->
  <!--    "|"-->
  <!--    <a>-->
  <!--  </div>-->
</template>

<style lang="scss">

.text-center {
  // text-align: center!important;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #ffffff ;
}


.btn-block {
  display: block;
  // width: 100%;
}
.btn, .btn-lg {
  padding: .5rem 5rem;
  font-size: 1.25rem;
  line-height: 1.5;
  border-radius: .3rem;
}
.btn-primary {
  color: #fff;
  background-color: #007bff;
  border-color: #007bff
}
.btn {
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  transition:.15s;
}
</style>