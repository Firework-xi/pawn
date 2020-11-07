<template>
  <div class="bookrack-container">
    <!-- 导航 -->
    <div class="bookrack-nav">
      <div class="nav">
        <div>
          <span class="nav-t1">春暖阅读</span>
          <span class="nav-t2">面朝大海，春暖花开</span>
          <span class="nav-more iconfont iconmore-horizontal"></span>
        </div>
      </div>
      <div class="det">
        <span>
          <img src="~@/assets/dcfee6c6962a1e68.jpg"
               alt="">
        </span>
        <span class="det-t1">见过没：熙熙有点骚</span>
        <span class="det-t2">
          已读25%
          <span class="det-triangle"></span>
        </span>
      </div>
    </div>

    <!-- 宫格展示 -->

    <div class="bookrack-grid">
      <van-grid :column-num="3"
                :border="false"
                :gutter="0">
        <van-grid-item v-for="value in 6"
                       :key="value">
          <span slot="icon"><img src="~@/assets/1111.png"
                 alt=""></span>
          <span slot="text"
                class="grid-text">嘿嘿嘿</span>
        </van-grid-item>
      </van-grid>
    </div>

  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="less" scoped>
.bookrack-container {
  .bookrack-nav {
    position: relative;
    background-color: #666;
    height: 550px;
    margin-bottom: 10px;
  }
  .nav {
    position: relative;
  }
  .nav-t1 {
    position: absolute;
    left: 30px;
    top: 30px;
    color: #fff;
    font-weight: 200;
  }
  .nav-t2 {
    position: absolute;
    left: 240px;
    top: 45px;
    font-size: 30px;
    color: #999999;
  }
  .nav-more {
    position: absolute;
    right: 20px;
    top: 35px;
    font-size: 60px;
    color: #fff;
  }
  .det {
    position: absolute;
    left: 30px;
    bottom: 20px;
    img {
      height: 350px;
      width: 250px;
    }
    .det-t1 {
      position: absolute;
      left: 280px;
      font-size: 43px;
      width: 400px;
      font-weight: 200;
      color: #fff;
    }
    .det-t2 {
      position: absolute;
      bottom: 30px;
      width: 150px;
      height: 60px;
      font-size: 20px;
      line-height: 60px;
      background-color: #737373;
      padding-left: 20px;
      color: #fff;
      .det-triangle {
        position: absolute;
        top: 7px;
        right: -25px;
        width: 0;
        height: 0;
        border-bottom: 43px solid #666;
        border-right: 43px solid transparent;
        transform: rotate(45deg);
      }
    }
  }
  /deep/.bookrack-grid {
    .van-grid-item__content {
      margin-top: -10px;
    }

    img {
      width: 170px;
      height: 250px;
      border: 1px solid #ccc;
    }
    .grid-text {
      font-size: 30px;
    }
  }
}
</style>