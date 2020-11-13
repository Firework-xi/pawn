<template>
  <div class="home">
    <router-view />
    <van-tabbar v-model="active" @change="conservev">
      <van-tabbar-item icon="column" to="/bookrack">书架</van-tabbar-item>
      <van-tabbar-item icon="shop-o" to="/booktown">书城</van-tabbar-item>
      <van-tabbar-item icon="contact" to="/my">我的</van-tabbar-item>
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
    this.add()
  },
  methods: {
    add() {
      this.active = window.sessionStorage.getItem('active') - 0
    },
    conservev() {
      window.sessionStorage.setItem('active', this.active)
    }
  }
}
</script>
<style lang="scss" scoped></style>
