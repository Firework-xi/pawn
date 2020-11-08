<template>
  <div class="my-count">
    <!-- 充值导航栏 -->
    <van-nav-bar title="我的账户" left-arrow @click-left="onClickLeft" @click-right="onClickRight" />
  </div>
</template>

<script>
export default {
  name: 'MyCount',
  components: {},
  props: {},
  data() {
    return {}
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    onClickLeft() {
      console.log()
    },
    onClickRight() {
      console.log()
    }
  }
}
</script>

<style lang="scss" scoped></style>
