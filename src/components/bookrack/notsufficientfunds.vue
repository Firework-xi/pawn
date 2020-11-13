<template>
  <div>
    <div class="cz">
      <van-divider>余额不足，充值并购买 </van-divider>
      <van-button type="default" v-for="(item, index) in list" :key="index" @click="Payshow(item.price, item.kb)">
        <p>{{ item.price }}</p>
        <span>{{ item.kb }}kb币</span>
      </van-button>
      <!-- <van-button type="default">
        <p>6元</p>
        <span>600kb币</span>
      </van-button>
      <van-button type="default">
        <p>12元</p>
        <span>1200kb币</span>
      </van-button>
      <van-button type="default">
        <p>30元</p>
        <span>3000kb币</span>
      </van-button> -->
    </div>
    <van-popup v-model="isPayshow" closeable close-icon-position="top-left" position="bottom" :style="{ height: '60%' }" class="popup">
      <div class="price">{{ price }}</div>
      <van-cell-group>
        <!--<van-icon name="cross" size="20px" /> -->
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
  name: 'balance',
  data() {
    return {
      list: [],
      isPayshow: false,
      price: 0,
      czye: 0
    }
  },
  created() {
    this.getchongzhi()
  },
  methods: {
    async getchongzhi() {
      const { data } = await this.$http.get('http://yuedu/chongzhi')
      console.log(data)
      this.list = data.data
    },
    Payshow(v, e) {
      this.isPayshow = true
      this.price = v
      this.czye = e
    },
    confirmPay() {
      // console.log(99)
      const index = window.localStorage.getItem('coins')
      const a = parseInt(index) + this.czye
      window.localStorage.setItem('coins', a)
      this.$toast.success('充值成功,本次充值' + this.czye)
      this.goldCoins = a
      this.isPayshow = false
      this.$emit('sx', a)
    }
  }
}
</script>

<style lang="scss" scoped>
.cz {
  .van-button {
    margin: 10px;
    width: 152px;
    height: 132px;
    padding: 0;
    p {
      margin: 0;
    }
    span {
      font-size: 22px;
      color: #666;
    }
  }
  .van-divider {
    font-size: 24px;
  }
}
.popup {
  .van-cell-group {
    margin-top: 80px;
  }
  .price {
    margin-top: 100px;
    font-size: 50px;
    margin-left: 20px;
  }
  .confirmBtn {
    background-color: #1989fa;
    color: #fff;
    width: 500px;
    margin: 80px 115px;
  }
}
</style>
