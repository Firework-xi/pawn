<template>
  <div></div>
</template>

<script>
export default {
  created() {
    this.initialize()
  },
  data() {
    return {}
  },
  methods: {
    async initialize() {
      const res = await this.$http.get('http://yuedu/details')
      console.log(res)
    }
  }
}
</script>

<style lang="scss" scoped></style>
