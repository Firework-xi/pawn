<template>
  <div class="book-classify">
    <van-popup v-model="classifyShow" position="botton" :style="{ height: '100%' }"> 1</van-popup>
  </div>
</template>

<script>
export default {
  name: 'BookClassify',
  components: {},
  props: {},
  data() {
    return {
      classifyShow: false
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {}
}
</script>

<style lang="scss" scoped></style>
