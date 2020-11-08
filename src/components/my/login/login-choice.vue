<template>
  <div class="login-choice">
    <!-- 标题 -->
    <div class="login-Gender">选择性别</div>
    <!-- /标题 -->
    <!-- 男女选择 -->
    <div class="login-center">
      <div class="login-img">
        <van-image width="80" round fit="cover" height="80" @click="nan" src="https://img.yzcdn.cn/vant/cat.jpeg" />
        <span class="gender">男生</span><span class="short-essay">热血爽文，酷帅狂拽</span>
      </div>
      <div class="login-img">
        <van-image width="80" round fit="cover" @click="nv" height="80" src="https://img.yzcdn.cn/vant/cat.jpeg" />
        <span class="gender">女生</span><span class="short-essay">总裁王爷，绝不将就</span>
      </div>
    </div>
    <!-- /男女选择 -->
    <!-- 立即体验按钮 -->
    <div class="but">
      <van-button class="login-button" size="large" round type="default" @click="onclick">立即体验</van-button>
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
      index: null
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    onclick() {
      if (this.index === null) {
        console.log()
      }
      window.localStorage.setItem('xingbei', this.index)
    }, 
     nan() {
      this.index = 1
      // 调用网络请求，请求成功之后 保存在本地
    }, 
     nv() {
      this.index = 0
    }
  }
    
  }
</script>

<style lang="scss" scoped>
.login-choice {
  flex-direction: column;
  margin-top: 140px;
  align-content: center;
  .login-Gender {
    text-align: center;
    font-size: 60px;
  }
  .login-center {
    display: flex;
    margin: 260px 0;
    // .van-image::after {
    //   position: absolute;
    //   top: -2px;
    //   right: -2px;
    //   content: '';
    //   width: 200px;
    //   height: 200px;
    //   border-radius: 50%;
    //   background-color: pink;
    // }
    .login-img {
      width: 100;
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      .gender {
        margin-top: 16px;
        font-size: 36px;
      }
      .short-essay {
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