<template>
  <!-- 同类作品组件 -->
  <div>
    <div class="particulars-hot">
      <van-cell>
        <template #title>同类热门书籍</template> <template #default> <van-icon class="refresh-btn" name="replay" /><span class="refresh">换一换</span></template>
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
        list: [{ url: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1530909779,971495357&fm=26&gp=0.jpg', name: '黑丝教师' }, { url: 'https://5b0988e595225.cdn.sohucs.com/images/20170828/9bb9a239f2f643b7905187f0c676fd14.jpeg', name: '病娇萝莉' }, { url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605093579198&di=cfdcb4cca2c07ff7290cf906491db990&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fq_70%2Cc_zoom%2Cw_640%2Fupload%2F20170225%2Fc7d48db78cb14ab6b78be945012006d1_th.jpg', name: '可爱少女' }, { url: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=441587723,3949694043&fm=26&gp=0.jpg', name: '死亡白丝' }]
      }
    }
  }
</script>

<style lang="scss" scoped>
.particulars-hot {
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