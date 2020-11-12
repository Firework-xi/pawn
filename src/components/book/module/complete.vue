
<template>
  <!-- // 全部作品组件 -->
  <div>
    <div class="particulars-hot">
      <van-cell>
        <template #title>作者其他作品</template> <template #default> <span class="default-text">全部作品</span><van-icon name="arrow" /></template>
      </van-cell>
      <van-row gutter="15" class="recommend">
        <van-col span="6" v-for="(i, index) in list" :key="index">
          <van-image class="imgage" fit="cover" :src="i.url" /><span class="recommend-text">{{ i.name }}</span></van-col
        >
      </van-row>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        list: [{ url: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2226073134,1983258206&fm=15&gp=0.jpg', name: '性感豹纹' }, { url: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3300862007,3336187684&fm=15&gp=0.jpg.com%2Fpic%2F7%2Fe5%2F37d4517209.jpg', name: '警察OL' }, { url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2720108556,3829300189&fm=26&gp=0.jpg', name: '校园春色' }, { url: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3373011781,3136003611&fm=26&gp=0.jpg', name: '可爱萝莉' }]
      }
    }
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