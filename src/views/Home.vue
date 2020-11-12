<template>
  <div class="home">
    <router-view />
    <van-tabbar v-model="active" @change="onChange">
      <van-tabbar-item to="/">书架</van-tabbar-item>
      <van-tabbar-item to="/booktown">书城</van-tabbar-item>
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
  },
  created() {
    this.getItems()
  },
  methods: {
    getItems() {
      // console.log(window.sessionStorage.getItem('actives'))
      this.active = parseInt(window.sessionStorage.getItem('actives'))
      // console.log('getItems -> this.active', this.active)
    },
    onChange() {
      window.sessionStorage.setItem('actives', this.active)
      console.log(this.active)
    }
  }
}
</script>
<style lang="scss" scoped></style>
