<template>
  <!-- 同类作品组件 -->
  <div>
    <div class="particulars-hot">
      <van-cell>
        <template #title>同类热门书籍</template> <template #default> <van-icon class="refresh-btn" name="replay" /><span class="refresh">换一换</span></template>
      </van-cell>
      <van-row gutter="15" class="recommend">
        <van-col span="6" v-for="(i, index) in list" :key="index" @click="addwhole(i)">
          <van-image class="imgage" fit="cover" :src="i.coverImg" /><span class="recommend-text">{{ i.title }}</span></van-col
        >
      </van-row>
    </div>
  </div>
</template>

<script>
  export default {
   props: ['list'],
   methods: {
     addwhole(id) {
       this.$emit('addwhole', id)
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
      display: inline-block;
      word-break: keep-all; /* 不换行 */
      white-space: nowrap; /* 不换行 */
      overflow: hidden; /* 内容超出宽度时隐藏超出部分的内容 */
      text-overflow: ellipsis; /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/
      text-align: center;
      width: 155px;
      font-size: 13 * 2px;
    }
  }
}
</style>