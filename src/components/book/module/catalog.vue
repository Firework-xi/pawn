<template>
  <!-- // 图书目录组件 -->
  <div>
    <van-cell class="catalogue" @click="publish">
      <template #title> <span>目录</span> <span class="text-time">5月4日 20:00 更新至1238章 </span></template>
      <template #extra> <span class="text-serialize">连载中</span><van-icon name="arrow" /></template>
    </van-cell>
  </div>
</template>

<script>
  export default {
    props: ['mulu'],
    methods: {
      publish() {
     this.$emit('publish')
      }
    }
  }
</script>

<style lang="scss" scoped>
.catalogue {
  .van-icon-arrow {
    margin-top: 3 * 2px;
    margin-right: -3 * 2px;
    font-size: 18 * 2px;
    color: #999999;
  }
  border: #e4e4e4 solid 1px;
  border-left: 0;
  border-right: 0;
  .text-serialize {
    font-size: 12 * 2px;
    color: #999999;
  }
  .text-time {
    font-size: 12 * 2px;
    color: #999999;
    margin-left: 18 * 2px;
  }
}
</style>