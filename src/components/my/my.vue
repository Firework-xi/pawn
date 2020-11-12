import { mapState } from 'vuex';
<template>
  <div class="my-page">
    <!-- 用户登录状态 -->
    <div class="my-heard" v-if="isLogin">
      <div class="login-btn">
        <van-image width="100" height="100" fit="cover" round :src="require('../../assets/bj3.jpg')" />
        <span class="text"> </span>
      </div>
    </div>
    <div v-else class="my-heard">
      <div class="login-btn" @click="denglu">
        <van-image width="100" height="100" fit="cover" round src="https://img.yzcdn.cn/vant/cat.jpeg" />
        <span class="text">登录 / 注册</span>
      </div>
    </div>
    <!-- 表格 -->
    <van-cell-group class="cell-group">
      <van-cell title="我的账户" icon="label-o" is-link><van-button type="default" round size="mini" @click="onclick">立即充值</van-button></van-cell>
      <van-cell title="我的阅历" icon="label-o" is-link />
      <van-cell title="充值记录" icon="label-o" is-link />
      <van-cell title="购买记录" icon="label-o" is-link />
      <van-cell title="浏览历史" icon="label-o" is-link />
      <van-cell title="我的阅读基因" icon="label-o" is-link />
      <van-cell title="设置" icon="label-o" is-link to="my-set"> </van-cell>
    </van-cell-group>
  </div>
</template>

<script>
// import { mapState } from 'vuex'
export default {
  name: 'MyPage',
  components: {},
  props: {},
  data() {
    return {
      // 用户信息
      user: {},
      // 用户登录状态
      isLogin: window.localStorage.getItem('token')
    }
  },
  computed: {
    // ...mapState(['isLogin'])
  },
  watch: {},
  created() {
    // this.userInfo()
  },
  mounted() {},
  methods: {
    onclick() {
      this.$router.push('/my-count')
      if (!window.localStorage.getItem('coins')) {
        window.localStorage.setItem('coins', 0)
      }
    },
    denglu() {
      console.log(22222)
      this.$router.push('/loginland')
    }
    // async userInfo() {
    //   const data = await this.$http.get('http://yuedu/myuser')
    //   console.log(data)
    //   this.user = data.data
    // }
  }
}
</script>

<style lang="scss" scoped>
.my-page {
  .my-heard {
    height: 450px;
    background: url('~@/assets/bj2.jpg');
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    .login-btn {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .text {
        height: 30 * 2px;
        font-size: 30px;
        padding-top: 15px;
        color: #333;
      }
    }
  }
  .cell-group {
    .van-cell {
      font-size: 48pxpx;
    }
  }
}
</style>
