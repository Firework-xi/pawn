<template>
  <div class="login-land">
    <!-- 导航栏 -->
    <van-nav-bar left-arrow @click-left="$router.back()" />
    <!-- /导航栏 -->
    <!-- 春暖阅读 -->
    <div class="login-logo">
      <van-image width="90" round fit="cover" height="90" :src="require('../../../assets/logo.png.png')" />
      <span class="text1">春暖阅读</span>
      <span class="text2">面朝大海，春暖花开</span>
    </div>
    <!-- /春暖阅读 -->
    <!-- 登陆 -->
    <van-form v-show="LoginOrRegister" @submit="onSubmit" class="login-form" ref="login">
      <van-field v-model="username" name="user" placeholder="请输入用户名" :rules="onSubmitFormRules.user" maxlength="11"
        ><template #left-icon> <van-icon name="friends-o" /></template
      ></van-field>
      <van-field v-model="password" type="password" name="pwd" placeholder="请输入密码" :rules="onSubmitFormRules.pwd" maxlength="6">
        <template #left-icon> <van-icon name="bag-o" /></template>
      </van-field>
      <div style="margin: 20px 46px 10px">
        <van-button round block type="info" native-type="submit" color="#ffca4f"> 立即登陆 </van-button>
      </div>
      <div class="register" @click="zhuChu">去注册>></div>
    </van-form>
    <!-- /登陆 -->
    <!-- 去注册 -->
    <van-form v-show="!LoginOrRegister" @submit="toRegister" class="login-form" ref="register">
      <van-field v-model="usermobile" name="mobile" type="number" placeholder="请输入手机号" :rules="toRegisterFormRules.mobile" maxlength="11"
        ><template #left-icon> <van-icon name="friends-o" /></template
      ></van-field>
      <van-field v-model="setpassword" type="password" name="setpwd" placeholder="设置新密码" :rules="toRegisterFormRules.setpwd" maxlength="6">
        <template #left-icon> <van-icon name="bag-o" /></template>
      </van-field>
      <van-field v-model="confirmpassword" type="password" name="confirmpwd" placeholder="确认密码" :rules="toRegisterFormRules.confirmpwd" maxlength="6">
        <template #left-icon> <van-icon name="bag-o" /></template>
      </van-field>
      <div style="margin: 20px 46px 10px">
        <van-button round block type="info" native-type="toRegister" color="#ffca4f"> 去登陆 </van-button>
      </div>
    </van-form>
    <!-- /去注册 -->

    <!-- 一键登陆 -->
    <van-divider @click="showShare = true" :style="{ color: '#ccc', borderColor: '#ccc', padding: '0 80px' }"> 可以使用第三方登陆 </van-divider>

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
  data() {
    return {
      // 接收登陆数据
      username: '',
      password: '',
      // 接收注册数据
      usermobile: '',
      setpassword: '',
      confirmpassword: '',
      showShare: false,
      options: [
        { name: '微信', icon: 'wechat' },
        { name: '微博', icon: 'weibo' },
        { name: 'QQ', icon: 'qq' }
      ],
      onSubmitFormRules: {
        user: [{ required: true, message: '用户名不能为空' }],
        pwd: [{ required: true, message: '密码不能为空' }]
      },
      toRegisterFormRules: {
        mobile: [{ required: true, message: '手机号不能为空' }, { pattern: /^1[3|5|7|8]\d{9}$/, message: '手机号格式错误' }],
        setpwd: [{ required: true, message: '密码不能为空' }],
        confirmpwd: [{ required: true, message: '密码不能为空' }]
      },
      register: {},
      LoginOrRegister: true
    }
  },
  computed: {},
  watch: {},
  created () {
    if (window.localStorage.getItem('token') === true) {
    this.$router.push('/home')
    }
  },
  mounted() {
    window.addEventListener('transitionend', function() {
      // 跳转
    })
  },
  methods: {
    // 第三方登陆
    onSelect(option) {
      this.$toast.loading({
        message: '加载中...',
        forbidClick: true,
        duration: 0
      })
      this.showShare = false
      window.localStorage.setItem('disanfangs', JSON.stringify({ name: 18707482845, password: 123456 }))
      
      this.$router.push('/home')
      this.$toast.success('进入我的')
    },
    // 登陆
    onSubmit(values) {
      this.$toast.loading({
        message: '加载中...',
        forbidClick: true,
        duration: 0
      })
      this.$toast.success('进入我的')
      window.localStorage.setItem('token', true)
      window.localStorage.setItem('land', JSON.stringify({ user: this.username, password: this.password }))
       this.$router.push('/home')
    },
    // 注册
    toRegister() {
         if (this.confirmpassword === this.setpassword) {
           this.$toast('注册成功')
           this.LoginOrRegister = true
           window.localStorage.setItem('register', JSON.stringify({ user: this.usermobile, password: this.setpassword }))
         } else {
           this.$toast('两次密码不一致')
         }
         this.username = this.usermobile
         this.password = this.setpassword
    },
    // 返回
    onClickLeft() {
      console.log('返回')
    },
    // 去注册
    zhuChu() {
      this.LoginOrRegister = false
      // this.username2 = ''
      // this.password2 = ''
      // this.password3 = ''
    }
  }
}
</script>

<style lang="scss" scoped>
.login-land {
  ::v-deep.van-nav-bar {
    .van-icon-arrow-left::before {
      color: #ffca4f;
    }
  }
  .login-logo {
    margin-top: 160px;
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
