<template>
  <div>
    <div class="box-base">
      <van-row>
        <van-col span="7"><van-button>下载</van-button></van-col>
        <van-col span="10"><van-button class="colored" @click="ydnr()">免费试读</van-button></van-col>
        <van-col span="7"><van-button>加入书架</van-button></van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    ydnr() {
      const id = window.localStorage.getItem('完美世界')
      if (id === null) {
        window.localStorage.setItem('完美世界', 0)
        this.$router.push('/read')
      }
      if (!window.localStorage.getItem('coins')) {
        window.localStorage.setItem('coins', 0)
      }
      this.$router.push('/read')
    }
  }
}
</script>

<style lang="scss" scoped>
.box-base {
  .colored {
    background: #ff6666;
    border: 0;
    border-radius: 0;
    color: #fff;
  }
  border-top: 1px solid rgb(194, 194, 194);
  .van-row {
    height: 100%;
  }
  .van-col {
    height: 100%;
  }
  .van-button {
    width: 100%;
    height: 100%;
  }
  position: fixed;
  width: 100%;
  height: 100px;
  bottom: 0;
}
</style>
