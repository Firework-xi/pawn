<template>
  <div class="book-town">
    <div class="search">
      <div class="left">春暖书城</div>
      <div class="right">
        <van-icon name="search" @click="onBooksSearch" />
        <van-icon name="ellipsis" @click="onclick" />
      </div>
    </div>

    <div class="slideshow">
      <!-- <van-swipe :autoplay="3000" :height="300">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img v-lazy="image" />
        </van-swipe-item>
      </van-swipe> -->
    </div>
    <div class="tab-bar">
      <div class="channelButton"><span class="iconfont icon-xiajiantou" @click="isChennelEditShow = true"></span></div>
      <van-tabs v-model="active" animated @click="gethuoqu">
        <van-tab v-for="(item, index) in title" :title="item.name" :key="index">
          <!-- 轮播图 -->
          <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" :lazy-render="true">
            <van-swipe-item v-for="(image, index) in imageList" :key="index">
              <img :src="image" />
            </van-swipe-item>
          </van-swipe>
          <!-- 内容 -->
          <div class="box-botton">
            <div class="box" v-for="(item, index) in information" :key="index" @click="$router.push(`/particulars/${index}`)">
              <div class="book-cover">
                <van-image width="100%" :src="item.img" />
              </div>
              <div class="character">
                <div class="title">{{ item.book_name }}</div>
                <div class="artor-name">{{ item.tor_name }}</div>
                <div class="content van-multi-ellipsis--l3">{{ item.content }}</div>
              </div>
            </div>
          </div>
        </van-tab>
        <van-tab></van-tab>
      </van-tabs>
    </div>

    <!-- 分类搜索 -->
    <!-- 弹出层 -->
    <van-popup v-model="classifyShow" position="bottom" :style="{ height: '100%' }">
      <!-- 顶部导航栏 -->
      <van-nav-bar title="全部分类" left-text left-arrow @click-left="classifyShow = false" @click-right="searchRight">
        <template #right>
          <van-icon name="search" size="18" />
        </template>
      </van-nav-bar>
      <!-- 性别男 -->
      <div class="boy-icon">
        <span class="iconfont icon-xingbie-nan"></span>
        <span>男生</span>
      </div>
      <!-- 主体 -->
      <van-grid :gutter="10">
        <van-grid-item v-for="item in boychannel" :key="item.id">
          <div class="Classification-books">
            <span>{{ item.booksName }}</span>
            <span>{{ item.booksNumber }}</span>
          </div>
        </van-grid-item>
      </van-grid>
      <!-- 性别女 -->
      <div class="girl-icon">
        <span class="iconfont icon-xingbie-nv"></span>
        <span>女生</span>
      </div>
      <!-- 主体 -->
      <van-grid :gutter="10">
        <van-grid-item v-for="value in girlchannel" :key="value.id">
          <div class="Classification-books">
            <span>{{ value.booksName }}</span>
            <span>{{ value.booksNumber }}</span>
          </div>
        </van-grid-item>
      </van-grid>
    </van-popup>
    <!-- 搜索栏 -->
    <van-popup v-model="searchShow" position="right" :style="{ width: '100%', height: '100%' }">
      <form action="/" class="formBottom">
        <van-search v-model="searchValue" show-action placeholder="请输入搜索关键词" clearable action-text="搜索">
          <span slot="left" @click="returnLeft"><van-icon name="arrow-left" class="return-icon" /></span>
        </van-search>
      </form>
      <!-- 推荐搜索 -->
      <div class="recommend">
        <div class="character">大家都在搜</div>
        <div class="buttonText"><span class="iconfont icon-shuaxin"></span>换一批</div>
      </div>
      <van-grid :gutter="10">
        <van-grid-item v-for="value in 8" :key="value" text="诡道传人" />
      </van-grid>
    </van-popup>
    <!-- 频道编辑弹出层 -->
    <van-popup v-model="isChennelEditShow" closeable close-icon-position="top-right" position="bottom" :style="{ height: '100%' }">
      <book-edit :my-channels="title"> </book-edit>
    </van-popup>
  </div>
</template>
-
<script>
import BookEdit from './book-edit'
export default {
  name: 'BookTown',
  components: {
   BookEdit
  },
  props: {},
  data() {
    return {
      imageList: [], // 获取到的数据
      title: [], // 获取到的频道数据
      information: [], // 获取到的书籍信息
       active: 0,
      classifyShow: false,
      // 获取到的男生频道的数据
      boychannel: [],
      // 获取到的女生频道的数据
      girlchannel: [],
      searchShow: false, // 控制搜索界面的显示状态
      searchValue: '', // 搜索框的数据
      isChennelEditShow: false// 控制频道编辑的显示状态
    }
  },
  computed: {},
  watch: {},
  created() {
    this.getPhoto()
    this.getTitle()
    this.getInformation()
  },
  mounted() {},
  methods: {
    // 点击弹出分类弹窗
    async onclick() {
      // this.$router.push('/bookClassify')
      this.classifyShow = true
      // 获取男生频道数据
      const { data } = await this.$http.get('http://yuedu/boyBook')
      this.boychannel = data.data
      this.getGirlBook()
    },
    // 获取女生频道数据
    async getGirlBook() {
      // 获取女生频道数据
      const { data } = await this.$http.get('http://yuedu/girlBook')
      this.girlchannel = data.data
    },
    // 获取轮播图图片
    async getPhoto() {
      const { data } = await this.$http.get(`http://yuedu/slideshow/${this.active}`)

      this.imageList = data.data.img
    },
    // 获取点击页的数据
    gethuoqu() {
      this.getPhoto()
      this.getInformation()
    },
    // 获取title分类名称  频道列表
    async getTitle() {
      const { data } = await this.$http.get('http://yuedu/title')
      this.title = data.data
    },
    // 获取书籍信息
    async getInformation() {
      const { data } = await this.$http.get(`http://yuedu/book/${this.active}`)
      this.information = data.data
    },
    // 点击弹出搜索界面
    onBooksSearch() {
      this.searchShow = true
    },
    // 点击取消
    returnLeft() {
      this.searchShow = false
      this.classifyShow = false
    },
    // 从分类页面到搜索页面
    searchRight() {
      this.classifyShow = false
      this.searchShow = true
    },
    //  // 点击切换频道
    // onUpdateActive (index, isChennelEditShow = false) {
    //   // 切换频道
    //   this.active = index
    //   // 关闭弹层
    //   this.isChennelEditShow = isChennelEditShow
    // }
  }
}
</script>

<style lang="scss" scoped>
.book-town {
  .search {
    height: 108px;
    // margin-top: 48px;
    border-bottom: 4px solid rgb(242, 242, 242);
    display: flex;
    justify-content: space-between;

    align-items: center;
    .left {
      margin-left: 40px;
      font-size: 50px;
      color: #726f6d;
    }
    .right {
      width: 160px;
      margin-right: 50px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 80px;
      color: #726f6d;
    }
  }
  .tab-bar {
    height: 98px;
  }

  .my-swipe .van-swipe-item {
    img {
      width: 100%;
      height: 260px;
    }
  }
  .book-cover {
    width: 194px;
    height: 260px;
    margin: 48px 20px 0 40px;
  }
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
  .boy-icon {
    height: 100px;
    line-height: 100px;
    font-size: 30px;
  }
  .boy-icon span:nth-child(1) {
    color: #65b2fe;
    margin-left: 20px;
    margin-right: 10px;
  }
  .girl-icon {
    height: 100px;
    line-height: 100px;
    font-size: 30px;
  }
  .girl-icon span:nth-child(1) {
    color: #fe78a5;
    margin-left: 20px;
    margin-right: 10px;
  }
  .Classification-books {
    font-size: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .Classification-books span:nth-child(2) {
    color: #d1d3d8;
    font-size: 24px;
  }
  .return-icon {
    font-size: 40px;
    color: #8e8e8e;
    margin-right: 10px;
    margin-left: 0;
  }
  .formBottom {
    border-bottom: 1px solid #dfdfdf;
  }
  .recommend {
    margin-top: 5px;
    padding: 0 20px;
    height: 90px;
    font-size: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: space-between;
  }
  .channelButton {
    position: absolute;
    right: 0;
    width: 70px;
    height: 80px;
    background: #fff;
    // color: #BEBEBE;
    opacity: 0.8;
    display: flex;
    font-size: 40px;
    justify-content: center;
    align-items: center;
    z-index: 1;
  }
  .icon-xiajiantou {
    color: #696868;
  }
}
</style>
