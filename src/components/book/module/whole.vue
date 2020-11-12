<template>
  <div>
    <div class="box-botton">
      <van-nav-bar left-arrow fixed class="borde" @click-left="$router.back()">
        <template #title>
          <transition name="van-fade">
            <div>全部作品</div>
          </transition>
        </template>
      </van-nav-bar>
      <div class="box1">
        <div class="box" v-for="(item, index) in arr" :key="index" @click="$router.push(`/particulars/${index}`)">
          <div class="book-cover">
            <van-image :src="item.coverImg" class="cover-img" />
          </div>
          <div class="character">
            <div class="title">{{ item.title }}</div>
            <div class="artor-name">{{ item.author }}</div>
            <div class="content van-multi-ellipsis--l3">{{ item.desc }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    created() {
      this.iwhole()
    }, 
methods: {
    async  iwhole() {
        const { data } = await this.$http.get('http://yuedu/whole')
        console.log(data)
      this.arr = data.data
      }
    }, 
data () {
      return {
        arr: []
      }
    }
  }
</script>

<style lang="scss" scoped>
.box-botton {
  .book-cover {
    margin-left: 20px;
  }
  .box1 {
    position: fixed;
    overflow: auto;
    top: 80px;
    bottom: 0;
    right: 0;
    left: 0;
    margin: auto;
  }
  .van-nav-bar {
    height: 80px;
  }
  .van-nav-bar__left {
    margin-left: 0;
    padding-left: 0;
  }
  .borde {
    border-bottom: 1px solid rgb(219, 219, 219);
  }
  .van-image {
    margin-left: 20px;
    width: 200px;
  }
  margin-bottom: 90px;
  .box {
    margin-left: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 300px;

    .character {
      margin-right: 50px;
      width: 450px;
      height: 258px;

      .title {
        font-size: 40px;
        font-weight: 900;
      }
      .artor-name {
        margin: 10px 0;
        font-size: 30px;
      }
      .content {
        margin: 0 auto;
        font-size: 30px;
        color: #969494;
      }
    }
  }
}
</style>