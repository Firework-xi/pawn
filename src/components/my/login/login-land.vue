<template>
  <div class="login-land">
    <!-- 春暖阅读 -->
    <div class="login-logo">
      <van-image width="90" round fit="cover" height="90" src="https://img.yzcdn.cn/vant/cat.jpeg" />
      <span class="text1">春暖阅读</span>
      <span class="text2">面朝大海，春暖花开</span>
    </div>
    <!-- /春暖阅读 -->
    <!-- 一键登陆 -->
    <div class="one-click-login"></div>
    <!-- /一键登陆 -->
    <!-- 微信、qq、微博登陆 -->
    <div class="three-party-landing">
      <div>
        <van-image width="50" round fit="cover" height="50" src="https://img.yzcdn.cn/vant/cat.jpeg" />
        <span>微信登陆</span>
      </div>
      <div>
        <van-image width="50" round fit="cover" height="50" src="https://img.yzcdn.cn/vant/cat.jpeg" />
        <span>微信登陆</span>
      </div>
      <div>
        <van-image width="50" round fit="cover" height="50" src="https://img.yzcdn.cn/vant/cat.jpeg" />
        <span>微信登陆</span>
      </div>
    </div>
    <!-- /微信、qq、微博登陆 -->
  </div>
</template>

<script>
  export default {
    
    name: 'LoginLand',
  components: {},
  props: {},
  data () {
    return {}
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {}
  }
</script>

<style lang="scss" scoped>
.login-land {
  .login-logo {
    margin-top: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .text1 {
      font-size: 60px;
    }
    .text2 {
      font-size: 28px;
    }
  }
  .three-party-landing {
    margin: 50px;
    display: flex;
    div {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      span {
        font-size: 20px;
      }
    }
  }
  .one-click-login {
    margin: 0 auto;
    margin-top: 100px;
    width: 600px;
    height: 1px;
    background-color: #eee;
  }
}
</style>