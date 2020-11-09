<template>
  <div class="home">
    <router-view />
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o" to="/">书架</van-tabbar-item>
      <van-tabbar-item icon="shop-o" to="/">书城</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/">我的</van-tabbar-item>
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
