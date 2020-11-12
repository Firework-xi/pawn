<template>
  <div class="reclassify">
   <van-nav-bar
  :title="item? item.booksName:value.booksName"
  left-arrow
 @click-left= "onReclassify"
/>
 <van-tabs v-model="active" animated @click="gethuoqu">
        <van-tab v-for="(item, index) in title" :title="item.booksChannel" :key="index">
          <!-- 内容 -->
          <div class="box-botton">
            <div class="box" v-for="(item, index) in information" :key="index" >
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
        </van-tab>
      </van-tabs>
  </div>
</template>

<script>
export default {
  name: 'Reclassify',
  components: {},
  props: {

  },
  data () {
    return {
      item: {},
      active: 0,
      title: [], // 获取到的频道数据
      information: []// 获取到的书籍信息
    }
  },
  computed: {},
  watch: {},
  created () {
    this.item = this.$route.query.item
    this.value = this.$route.query.value
    this.getTitle()
    this.getInformation()
  },
  mounted () {
  },
  methods: {
    onReclassify() {
      this.$router.back()
    },
    // 获取title分类名称  频道列表
    async getTitle() {
      const { data } = await this.$http.get(`http://yuedu/reclassify/${this.item.id}`)
      this.title = data.data
    },
     // 获取书籍信息
    async getInformation() {
      const { data } = await this.$http.get(`http://yuedu/book/${this.active}`)
      this.information = data.data
    },
    // 获取点击页的数据
    gethuoqu() {
      this.getInformation()
      this.getTitle()
    },
  }
}
</script>

<style lang="scss" scoped>
.reclassify{
  .box-botton {
    margin-bottom: 90px;
    .box {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 300px;

      .character {
        margin-top: 48px;
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
          font-size: 30px;
          color: #969494;
        }
      }
    }
  }
   .book-cover {
    width: 194px;
    height: 260px;
    margin: 48px 20px 0 40px;
    .cover-img{
      width: 100%;
      height: 100%;
      
    }
  }
}
</style>
