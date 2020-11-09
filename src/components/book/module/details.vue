<template>
  <!-- 图书详情组件 -->
  <div>
    <div class="message">
      <van-cell class="information">书籍信息</van-cell>
      <van-cell><span class="refresh color"> 版权：跃文集团旗下创世中文网</span></van-cell>
      <van-cell><span class="refresh color"> 本书由春暖阅读电子版制作与发行</span></van-cell>
      <van-cell><span class="refresh color"> 版权所有·侵权必究</span></van-cell>
    </div>
  </div>
</template>
<script>
  export default { 
  }
</script>

<style lang="scss" scoped>
.message {
  height: 130 * 2px;
  .van-cell {
    padding-top: 0;
    padding-bottom: 0;
  }
  .refresh {
    font-size: 12px;
    margin-left: 10px;
    .van-icon-replay {
      margin-top: 2px;
    }
  }
  .information {
    margin-top: 20px;
  }
  .van-cell:nth-child(2) {
    margin-top: 20px;
  }
  .color {
    color: #999999;
  }
}
</style>