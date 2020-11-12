<template>
  <div>
    <van-popup closeable close-icon-position="top-left" position="bottom" :style="{ height: '60%' }" class="popup">
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
  props: {
    price: {
      type: Object,
      required: true
    }
  },
  name: 'pay',
  mounted: {
    confirmPay() {
      const a = parseInt(window.localStorage.getItem('coins')) + this.czye
      window.localStorage.setItem('coins', a)
      this.goldCoins = a
      this.isPayshow = false
    }
  }
}
</script>

<style lang="scss" scoped>
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
</style>
