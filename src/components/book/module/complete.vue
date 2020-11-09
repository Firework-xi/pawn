
<template>
  <!-- // 全部作品组件 -->
  <div>
    <div class="particulars-hot">
      <van-cell>
        <template #title>作者其他作品</template> <template #default> <span class="default-text">全部作品</span><van-icon name="arrow" /></template>
      </van-cell>
      <van-row gutter="15" class="recommend">
        <van-col span="6" v-for="i in 4" :key="i"> <van-image class="imgage" fit="cover" src="https://img.yzcdn.cn/vant/cat.jpeg" /><span class="recommend-text">德莱厄斯</span></van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
.particulars-hot {
  .default-text {
    font-size: 25px;
  }
  height: 5.8rem;
  .van-cell__value {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  .refresh {
    font-size: 12px;
    margin-left: 10px;
    .van-icon-replay {
      margin-top: 2px;
    }
  }
  .recommend {
    padding: 0 12 * 2px;
    .van-col {
      height: 144 * 2px;
    }
    .imgage {
      height: 119 * 2px;
    }
    .recommend-text {
      text-align: center;
      font-size: 13 * 2px;
      margin-left: 11 * 2px;
    }
  }
}
</style>