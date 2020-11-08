<template>
  <div class="home">
    <router-view />
    <van-tabbar v-model="active">
      <van-tabbar-item to="/">书架</van-tabbar-item>
      <van-tabbar-item to="/">书城</van-tabbar-item>
      <van-tabbar-item to="/my">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0
    }
  }
}
</script>
<style lang="scss" scoped></style>
