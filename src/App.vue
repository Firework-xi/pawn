<template>
  <div id="app">
    <transition :name="direction">
      <keep-alive :include="['home']"><router-view /></keep-alive
    ></transition>
  </div>
</template>
<script>
export default {
  data() {
    return {
      direction: 'fade-left'
    }
  },
  watch: {
    $route: function(to, from) {
      if (to.meta.index > from.meta.index) {
        this.direction = 'fade-left'
      } else if (to.meta.index < from.meta.index) {
        this.direction = 'fade-right'
      } else {
        this.direction = ''
      }
    }
  }
}
</script>

<style lang="scss">
.fade-left-enter,
.fade-right-leave-to {
  transform: translateX(100%);
}
.fade-left-leave-to,
.fade-right-enter {
  transform: translateX(-100%);
}
.fade-left-enter-active,
.fade-left-leave-active,
.fade-right-enter-active,
.fade-right-leave-active {
  transition: all 0.5s;
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>
