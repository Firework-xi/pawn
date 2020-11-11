<template>
  <div>
    <!-- <van-image :class="isone ? '' : 'van'" @click="isone = false" width="100" height="100" src="https://img.yzcdn.cn/vant/cat.jpeg" /> -->
    <van-image width="100" height="100" @click="isones" src="https://img.yzcdn.cn/vant/cat.jpeg" />
    <van-image width="100" height="100" src="https://img.yzcdn.cn/vant/cat.jpeg" />
  </div>
</template>

<script>
export default {
  name: 'name',
  components: {},
  props: {},
  data() {
    return {
      isone: true
    }
  },
  computed: {},
  watch: {},
  created () {
    
  },
  mounted () {},
  methods: { 
    isones() {} 
  }
    
  }
</script>

<style lang="scss" scoped>
.van {
  border: 10px solid #000;
}
</style>
