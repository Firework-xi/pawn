<template>
  <div class="login-land">
    <!-- 春暖阅读 -->
    <div class="login-logo">
      <van-image width="90" round fit="cover" height="90" :src="require('../../../assets/logo.png.png')" />
      <span class="text1">春暖阅读</span>
      <span class="text2">面朝大海，春暖花开</span>
    </div>
    <!-- /春暖阅读 -->
    <!-- 登陆 -->
    <van-form @submit="onSubmit" class="login-form">
      <van-field v-model="username" name="user" placeholder="请输入用户名" :rules="userFormRules.user" maxlength="11"
        ><template #left-icon> <van-icon name="friends-o" /></template
      ></van-field>
      <van-field v-model="password" type="password" name="password" placeholder="请输入密码" :rules="userFormRules.password" maxlength="6">
        <template #left-icon> <van-icon name="bag-o" /></template>
      </van-field>
      <div style="margin: 20px 46px 10px">
        <van-button round block type="info" native-type="submit" color="#ffca4f"> 立即登陆 </van-button>
      </div>
      <div class="register">去注册>></div>
    </van-form>
    <!-- /登陆 -->
    <!-- 去注册 -->
    <van-form @submit="onSubmit" class="login-form">
      <van-field v-model="username" name="mobile" type="number" placeholder="请输入手机号" :rules="userFormRules.mobile" maxlength="11"
        ><template #left-icon> <van-icon name="friends-o" /></template
      ></van-field>

      <van-field v-model="password" type="password" name="password2" placeholder="请设置密码" :rules="userFormRules.password2" maxlength="6">
        <template #left-icon> <van-icon name="bag-o" /></template>
      </van-field>
      <!-- /设置密码 -->
      <!-- 按钮 -->
      <div style="margin: 20px 46px 10px">
        <van-button round block type="info" native-type="submit" color="#ffca4f"> 去登陆 </van-button>
      </div>
      <!-- /按钮 -->
    </van-form>
    <!-- /去注册 -->

    <!-- 一键登陆 -->
    <van-divider @click="showShare = true" :style="{ color: '#ccc', borderColor: '#ccc', padding: '0 80px' }"> 可以使用第三方登陆 </van-divider>
    <!-- /一键登陆 -->
    <!-- 微信、qq、微博登陆 -->
    <!-- <div class="three-party-landing">
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
    </div> -->
    <!-- /微信、qq、微博登陆 -->
    <!-- 第三方登陆 -->
    <van-share-sheet v-model="showShare" title="一键登陆" :options="options" @select="onSelect" />
    <!-- /第三方登陆 -->
  </div>
</template>

<script>
  export default {
    
    name: 'LoginLand',
  components: {},
  props: {},
  data () {
    return {
      username: '',
      password: '',
      showShare: false,
       options: [
        { name: '微信', icon: 'wechat' },
        { name: '微博', icon: 'weibo' },
        { name: 'QQ', icon: 'qq' }
      ],
      userFormRules: {
        user: [{ required: true, message: '用户名不能为空' }],
        password: [{ required: true, message: '密码不能为空' }],
         mobile: [{ required: true, message: '手机号不能为空' }, { pattern: /^1[3|5|7|8]\d{9}$/, message: '手机号格式错误' }],
        password2: [{ required: true, message: '密码不能为空' }]
      }
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
     onSelect(option) {
       this.$toast.loading({
       message: '加载中...',
       forbidClick: true
      })
      this.showShare = false
    },
     onSubmit(values) {
      console.log('submit', values)
    }
  }
  }
</script>

<style lang="scss" scoped>
.login-land {
  .login-logo {
    margin-top: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .text1 {
      color: rgb(59, 60, 60);
      font-size: 60px;
    }
    .text2 {
      color: rgb(149, 149, 149);
      font-size: 28px;
    }
  }
  .login-form {
    padding: 50px;
    padding-bottom: 0;
    .van-icon {
      font-size: 46px;
    }
    .van-button {
      font-size: 34px;
    }
    .register {
      color: rgb(149, 149, 149);
      font-size: 32px;
      text-align: center;
    }
    .verification {
      font-size: 24px;
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
}
</style>