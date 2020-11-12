<template>
  <div class="my-count">
    <!-- 充值导航栏 -->
    <van-nav-bar title="我的账户" left-arrow @click-left="onClickLeft = $router.back()" />
    <!-- 充值栏信息 用户信息 -->
    <div class="user">
      <van-image class="actar" round fit="cover" src="https://img.yzcdn.cn/vant/cat.jpeg" />
      <span class="userPhone">{{ goldCoins }}</span>
    </div>
    <!-- 充值模块 -->
    <div class="buyCoins">
      <van-grid column-num="3" :gutter="10">
        <van-grid-item v-for="(item, index) in list" :key="index"
          ><van-icon name="star-o" color="#f6b53e" /><span class="text">{{ item.kb }}kk币</span
          ><van-button type="default" size="mini" round class="coinsBtn" @click="Payshow(item.price, item.kb)">{{ item.price }}</van-button></van-grid-item
        >
        <!-- <van-grid-item
          ><van-icon name="star-o" color="#f6b53e" /><span class="text">1200kk币</span
          ><van-button type="default" size="mini" round class="coinsBtn" @click="Payshow('¥12.00', '1200kk币')">¥12.00</van-button></van-grid-item
        >
        <van-grid-item
          ><van-icon name="star-o" color="#f6b53e" /><span class="text">3000kk币</span
          ><van-button type="default" size="mini" round class="coinsBtn" @click="Payshow('¥30.00', '3000kk币')">¥30.00</van-button></van-grid-item
        >
        <van-grid-item
          ><van-icon name="star-o" color="#f6b53e" /><span class="text">5000kk币</span
          ><van-button type="default" size="mini" round class="coinsBtn" @click="Payshow('¥50.00', '5000kk币')">¥50.00</van-button></van-grid-item
        >
        <van-grid-item
          ><van-icon name="star-o" color="#f6b53e" /><span class="text">9800kk币</span
          ><van-button type="default" size="mini" round class="coinsBtn" @click="Payshow('¥98.00', '9800kk币')">¥98.00</van-button></van-grid-item
        >
        <van-grid-item
          ><van-icon name="star-o" color="#f6b53e" /><span class="text">18800kk币</span
          ><van-button type="default" size="mini" round class="coinsBtn" @click="Payshow('¥188.00', '18800kk币')">¥188.00</van-button></van-grid-item
        >
         -->
      </van-grid>
    </div>
    <div class="coinsInstructions">
      <span class="cionsText">
        充值说明: <br />
        1）读书充值卡的充值金额全部以书币的形式进入用户的账户。<br />
        2）用户可以在个人书房中，看到自己账户中的”读书卡余额.<br />
        3）读书充值卡充值不计入VIP等级，即用户通过读书充值卡充值书币，并不影响VIP状态.<br />
        4）用户可以在个人书房中，看到自己账户中的”读书卡余额.<br />
        5）读书充值卡充值不计入VIP等级，即用户通过读书充值卡充值书币，并不影响VIP状态.<br />
        6）用户可以在个人书房中，看到自己账户中的”读书卡余额.<br />
        7）读书充值卡充值不计入VIP等级，即用户通过读书充值卡充值书币，并不影响VIP状态.<br />
        8）读书充值卡充值不计入VIP等级，即用户通过读书充值卡充值书币，并不影响VIP状态.<br />
        9）读书充值卡充值不计入VIP等级，即用户通过读书充值卡充值书币，并不影响VIP状态.<br />
        10）读书充值卡充值不计入VIP等级，即用户通过读书充值卡.<br />
      </span>
    </div>
    <!-- 购买金币弹出框模块 -->
    <van-popup closeable close-icon-position="top-left" v-model="isPayshow" position="bottom" :style="{ height: '60%' }" class="popup">
      <div class="price">{{ price }}</div>
      <van-cell-group>
        <!-- <van-icon name="cross" size="20px" /> -->

        <van-cell title="订单信息" value="手机充值" is-link />
        <van-cell title="付款方式" value="花呗" is-link />
      </van-cell-group>
      <!-- 提交按钮 -->
      <van-button type="default" size="large" round class="confirmBtn" @click="confirmPay">确认支付</van-button>
    </van-popup>
  </div>
</template>

<script>
export default {
  name: 'MyCount',
  props: {},
  data() {
    return {
      // 用户信息
      user: {},
      isPayshow: false,
      list: [],
      // 充值金额
      price: 0,
      goldCoins: 0,
      czye: 0
    }
  },
  computed: {},
  watch: {},
  created() {
    this.userInfo()
    this.getchongzhi()
  },
  mounted() {},
  methods: {
    async userInfo() {
      const data = await this.$http.get('http://yuedu/myuser')
      console.log(data)
      this.user = data.data
      this.goldCoins = window.localStorage.getItem('coins')
    },
    async getchongzhi() {
      const { data } = await this.$http.get('http://yuedu/chongzhi')
      console.log(data)
      this.list = data.data
    }, // 显示充值金额

    Payshow(e, v) {
      this.isPayshow = true
      this.price = e
      this.czye = v
      console.log(e)
      console.log(this.czye)
    }, // 将金币进行本地存储
    confirmPay() {
      console.log(this.list)
      const index = window.localStorage.getItem('coins')
      console.log(index)
      const a = parseInt(index) + this.czye
      window.localStorage.setItem('coins', a)
      this.goldCoins = a
      this.isPayshow = false
    }
  }
}
</script>

<style lang="scss" scoped>
.my-count {
  background-color: #f8f8f8;
  .user {
    display: flex;
    height: 200px;
    // background-color: pink;
    // justify-content: center;
    align-items: center;
    .actar {
      width: 120px;
      height: 120px;
      margin-left: 30px;
    }
    .userPhone {
      font-size: 60px;
      margin-left: 30px;
    }
  }
  /deep/.buyCoins {
    .van-grid-item {
      height: 240px;
      /deep/ .text {
        font-size: 30px;
        margin-top: 20px;
      }
      .coinsBtn {
        margin-top: 30px;
        background-color: #fa7535;
        width: 140px;
        height: 40px;
        color: #fff;
      }
    }
  }
  .coinsInstructions {
    margin-top: 50px;
    margin: 0 20px;
    font-size: 25px;
    .cionsText {
      color: #b4b4b4;
      margin-left: 30px;
    }
  }
  .proup-btn {
    width: 100%;
    height: 100%;
  }
  .popup {
    .van-cell-group {
      margin-top: 80px;
    }
    .price {
      margin-top: 100px;
      margin-left: 280px;
    }
    .confirmBtn {
      background-color: #1989fa;
      color: #fff;
      width: 500px;
      margin: 80px 115px;
    }
  }
}
</style>
