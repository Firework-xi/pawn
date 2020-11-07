<template>
  <div class="home">
    <router-view />
    <van-tabbar v-model="active">
      <van-tabbar-item to='/'>书架</van-tabbar-item>
      <van-tabbar-item to='/'>书城</van-tabbar-item>
      <van-tabbar-item to='/'>我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {

}
</script>
<style lang="scss" scoped>
</style>
