import { mapState } from 'vuex';
<template>
  <!-- 设置页面 -->
  <div class="my-set">
    <!-- 导航栏 -->
    <van-nav-bar title="设置" left-arrow @click-left="onClickLeft = $router.back()" />
    <!-- 设置信息栏 -->
    <van-cell-group>
      <van-cell title="个性主题" is-link />
      <van-cell title="阅读字体" is-link />
      <van-cell title="绑定手机" is-link />
      <van-cell title="通知提醒" is-link />
      <van-cell title="帮助中心" is-link />
      <van-cell title="我要反馈" is-link />
      <van-cell title="账号注销" is-link />
      <van-cell title="隐私设置" is-link />
      <van-cell title="兑换中心" is-link />
      <van-cell title="青少年模式" is-link />
      <van-cell title="我的基因" is-link />
      <van-cell title="清除缓存" is-link />
      <van-cell title="退出登录" class="loginOut" @click="isLoginOutShow" />
    </van-cell-group>
    <!-- 点击退出登录弹出框 -->
    <van-popup v-model="show" :style="{ height: '15%' }" position="bottom" class="popupBtn">
      <div class="exitBtn">
        <van-button type="default" size="large" @click="loginOut">退出登录</van-button>
        <van-button type="default" size="large" @click="editLogin">取消</van-button>
      </div>
    </van-popup>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'MySet',
  components: {},
  props: {},
  data() {
    return {
      // 控制点击退出显示与隐藏
      show: false
    }
  },
  computed: {
    ...mapState(['isLogin'])
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {
    isLoginOutShow() {
      this.show = true
    },
    // 点击取消按钮 隐藏显示框
    editLogin() {
      this.show = false
    },
    // 点击确认退出按钮
    loginOut() {
      this.$store.commit('setIsLogin', '')
      this.$router.push('/my')

      console.log(window.localStorage.getItem('active'))
    }
  }
}
</script>

<style lang="scss" scoped>
.my-set {
  .loginOut {
    color: red;
    text-align: center;
  }
  .popupBtn {
    display: flex;
    background: transparent;
    .exitBtn {
      .van-button {
        width: 685px;
        height: 70px;
        margin-left: 32px;
        margin-top: 20px;
        border-radius: 20px;
        background-color: #f6f6f6;
      }
    }
  }
}
</style>
