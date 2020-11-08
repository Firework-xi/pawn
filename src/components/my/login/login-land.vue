<template>
  <div class="login-land">
    <!-- 春暖阅读 -->
    <div class="login-logo">
      <van-image width="90" round fit="cover" height="90" :src="require('../../../assets/logo (2).png')" />
      <span class="text1">春暖阅读</span>
      <span class="text2">面朝大海，春暖花开</span>
    </div>
    <!-- /春暖阅读 -->
    <!-- 登陆-->
    <van-form @submit="onSubmit" class="land">
      <van-field v-model="username" name="user" placeholder="请输入用户名" :rules="userFormRules.user" maxlength="6"
        ><template #left-icon><van-icon name="friends-o" /> </template>
      </van-field>
      <van-field v-model="password" type="password" name="密码" placeholder="请输入密码" :rules="userFormRules.password" maxlength="6"
        ><template #left-icon><van-icon name="bag-o" /> </template
      ></van-field>

      <div style="margin: 20px 30px 10px">
        <van-button round block color="#ffca4f" size="normal"> 登陆 </van-button>
      </div>
      <!-- 去注册 -->
      <div class="register">去注册>></div>
      <!-- /去注册 -->
    </van-form>
    <!-- /登陆 -->
    <!-- 去注册 -->
    <van-form @submit="onSubmit" class="land">
      <van-field v-model="username" name="user2" placeholder="请输入手机号" :rules="userFormRules.user2" maxlength="11" type="number"
        ><template #left-icon><van-icon name="friends-o" /> </template>
      </van-field>
      <van-field v-model="password" type="password" name="密码" placeholder="请输入密码" :rules="userFormRules.password" maxlength="6"
        ><template #left-icon><van-icon name="bag-o" /> </template
      ></van-field>

      <div style="margin: 20px 30px 10px">
        <van-button round block color="#ffca4f" size="normal"> 去登陆 </van-button>
      </div>
    </van-form>

    <!-- /去注册 -->
    <!-- 一键登陆 -->
    <van-divider @click="showShare = true" class="one-click-login" :style="{ color: '#999', borderColor: '#222', padding: '0 80px' }">使用第三方登陆 </van-divider>
    <!-- /一键登陆 -->
    <!-- 微信、qq、微博登陆 -->
    <!-- <div class="three-party-landing">
      <div>
        <van-image width="50" round fit="cover" height="50" :src="require('../../../assets/wx.png')" @click="showShare = true" />
        <span>微信登陆</span>
      </div>
      <div>
        <van-image width="50" round fit="cover" height="50" :src="require('../../../assets/wb.png')" @click="showShare = true" />
        <span>微信登陆</span>
      </div>
      <div>
        <van-image width="50" round fit="cover" height="50" :src="require('../../../assets/qq.png')" @click="showShare = true" />
        <span>QQ登陆</span>
      </div>
    </div> -->
    <!-- /微信、qq、微博登陆 -->
    <!-- 弹框 -->
    <van-share-sheet v-model="showShare" title="一键登陆" :options="options" @select="onSelect" />
    <!-- /弹框 -->
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
      // 第三方登陆
      options: [
        { name: '微信', icon: 'wechat' },
        { name: '微博', icon: 'weibo' },
         { name: 'QQ', icon: 'qq' }
      ],
      userFormRules: {
        user: [{ required: true }],
        user2: [{ required: true }],
        password: [{ required: true }]
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
      // this.$toast(option.name)
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
  color: #333;
  // .van-image {
  //   border: 4px solid #eee;
  // }
  .login-logo {
    margin-top: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .text1 {
      font-size: 60px;
      color: #333;
    }
    .text2 {
      font-size: 28px;
      color: rgb(149, 149, 149);
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
        color: rgb(149, 149, 149);
      }
    }
  }
  // .one-click-login {
  //   margin-top: 20px;
  // }
  ::v-deep .land {
    padding: 50px;
    .van-icon {
      font-size: 60px;
      // color: #ffca4f;
    }
    .register {
      font-size: 26px;
      text-align: center;
      color: rgb(149, 149, 149);
    }
    .van-button {
      font-size: 38px;
      margin-bottom: 10px;
    }
  }
}
</style>