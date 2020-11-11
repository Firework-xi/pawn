<template>
  <div class="login-choice">
    <!-- 标题 -->
    <div class="login-Gender">选择性别</div>
    <!-- /标题 -->
    <!-- 男女选择 -->
    <div class="login-center">
      <div class="login-img" @click="isone = 1">
        <van-image width="80" :class="isone === 1 ? 'bor' : ''" round fit="cover" height="80" @click="male" :src="require('../../../assets/nan.png')" />
        <span class="gender">男生</span><span class="short-essay">热血爽文，酷帅狂拽</span>
      </div>
      <div class="login-img" @click="isone = 2">
        <van-image width="80" :class="isone === 2 ? 'bor' : ''" round fit="cover" @click="female" height="80" :src="require('../../../assets//nv.png')" />
        <span class="gender">女生</span><span class="short-essay">总裁王爷，绝不将就</span>
      </div>
    </div>
    <!-- /男女选择 -->
    <!-- 立即体验按钮 -->
    <div class="but">
      <van-button class="login-button" size="large" color="#ffbd83" plain round @click="LoginExperience">立即体验</van-button>
    </div>
    <!-- /立即体验按钮 -->
  </div>
</template>

<script>
  export default {
    name: 'LoginChoice',
  components: {},
  props: {},
  data () {
    return {
      index: null,
      isone: '0'

    }
  },
  computed: {},
  watch: {},
  created () {
    if (window.localStorage.getItem('choice')) {
      this.$router.push('/loginland')
    }
  },
  mounted () {},
  methods: {
    // 立即体验事件
    LoginExperience() {
      if (this.index === null) {
        return this.$toast('请选择性别')
      }
      this.$toast.loading({
        message: '加载中...',
         forbidClick: true,
         duration: 0
        })
         window.localStorage.setItem('choice', this.index)
        this.$router.push('/loginland')
        this.$toast.success('进入首页')
    },
    // 男
    male() {
      this.index = 0
    },
    // 女
    female() {
      this.index = 1
    }
  //  async onclick() {
  //   //  判断是否选择的男或女
  //     if (this.index === null) {
  //       this.$toast('请选择性别')
  //     } else {
  //       // 加载中
  //       this.$toast.loading({
  //       message: '加载中...',
  //        forbidClick: true
  //       })
  //       window.localStorage.setItem('choice', this.index)
  //         const { data } = await this.$http.get('http://yuedu/details')
  //         console.log(data)
  //     }
  //   }, 
  //   // 男生
  //    male() {
  //     this.index = 1
  //     // 调用网络请求，请求成功之后 保存在本地
  //   }, 
  //   // 女生
  //    female() {
  //     this.index = 0
  //   }
  }
    
  }
</script>

<style lang="scss" scoped>
.login-choice {
  .van-image {
    background-color: rgb(255, 238, 188);

    // border: 6px solid #eee;
  }
  .bor {
    border: 10px solid #d2d2d2;
    opacity: 0.7;
    // background: transparent;
  }

  .skip {
    margin: 20px;
    margin-top: 30px;

    font-size: 26px;
    position: absolute;
    top: 0;
    right: 0;
    span {
      color: rgb(149, 149, 149);
      padding: 20px;
    }
  }
  color: #333;
  flex-direction: column;
  margin-top: 140px;
  align-content: center;
  .login-Gender {
    color: #333;
  }
  .skip {
    color: rgb(149, 149, 149);
    position: absolute;
    top: 30px;
    right: 30px;
    font-size: 24px;
  }
  .login-Gender {
    color: rgb(64, 63, 61);
    text-align: center;
    font-size: 60px;
  }
  .login-center {
    display: flex;
    margin: 260px 0;

    .login-img {
      width: 100;
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      .van-image {
        background-color: #fddd9b;
      }
      .gender {
        color: #ff9656;
        margin-top: 16px;
        font-size: 36px;
        color: #ff9656;
      }
      .short-essay {
        color: rgb(149, 149, 149);
        font-size: 24px;
      }
    }
  }
  .but {
    margin: 100px;
    .login-button {
      height: 90px;
    }
  }
}
</style>