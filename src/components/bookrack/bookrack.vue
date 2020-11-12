<template>
  <div class="bookrack-container"
       @click="menuClose">
    <!-- 导航 -->
    <div class="bookrack-nav">
      <div class="nav">
        <div v-if="!isSelectShow">
          <span class="nav-t1">春暖阅读</span>
          <span class="nav-t2">面朝大海，春暖花开</span>
          <span class="nav-more iconfont iconmore-horizontal"
                @click.stop="showNavMenu"> </span>
          <div class="nav-menu"
               :style="{ display: menuIsShow ? 'block' : 'none' }">
            <div class="nav-menu-t1"
                 @click="$router.push('/search')"><i class="iconfont iconsousuo"></i>搜索</div>
            <div class="nav-menu-t2"
                 @click.stop="isSelectShow = !isSelectShow"><i class="iconfont iconzuopin"></i>整理书架</div>
          </div>
        </div>
        <!-- 整理书架时展示的顶部 -->
        <div v-else
             class="arrangement">
          <span class="arrangement-t1"
                @click="selectAll">全选</span>
          <span v-if="newOrLast"
                class="arrangement-t2"
                @click="newOrLast = !newOrLast">最近阅读↑↓</span>
          <span class="arrangement-tt2"
                v-else
                @click="newOrLast = !newOrLast">加入书架时间↑↓</span>
          <span class="arrangement-t3"
                @click="isSelectShow = false">完成</span>
        </div>
      </div>
      <div class="det">
        <span>
          <img :src="showBook.coverImg"
               alt="" />
        </span>
        <span class="det-t1">{{ showBook.title }}</span>
        <span class="det-t2">
          已读25%
          <span class="det-triangle"></span>
        </span>
      </div>
    </div>

    <!-- 宫格展示 -->

    <div class="bookrack-grid">
      <van-grid :column-num="3"
                :border="false"
                :gutter="0">
        <van-grid-item v-for="(item, index) in showBookList"
                       :key="index"
                       @click="showThis(item, index)">
          <span slot="icon"><img :src="item.coverImg"
                 alt="" /></span>
          <span slot="text"
                class="grid-text">{{ item.title }} </span>
          <span slot="icon"
                v-if="isSelectShow">
            <span class="noSelect"
                  v-if="selectList.indexOf(index) === -1"> </span>
            <span class="isSelect"
                  v-else>
              <i class="iconfont iconselect"></i>
            </span>
          </span>
        </van-grid-item>
      </van-grid>
    </div>
    <!-- 底部 -->
    <div class="foot"
         v-if="isFootShow"
         @click="isSelectDelShow = true">删除所选 ({{ selectList.length }})</div>
    <!-- 确认栏 -->
    <div v-if="isSelectDelShow"
         class="selectDel">
      <h4>从书架删除</h4>
      <h5>确定要删除所选的这{{ selectList.length }}本书籍吗？</h5>
      <van-button class="jgbtn"
                  type="danger"
                  @click="selectBook">删除</van-button>
      <van-button class="qxbtn"
                  type="default"
                  @click="isSelectDelShow = false">取消</van-button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
  export default {
    name: 'Bookrack',
    data() {
      return {
        bookList: [
          
        ],
        showBook: {
          author: '汪熙',
          bookId: 0,
          categoryName: '玄幻小说',
          chapterStatus: 'SERIALIZE',
          coverImg: require('@/assets/dcfee6c6962a1e68.jpg'),
          desc: ' 伴随着熙熙越来越胖，黑马程序员的汪熙逐渐征服了周边十万公里的外卖，又发现了两片大陆。无数外卖之兽也随着熙熙的猎杀无度走向亡，沉睡无数年的外卖之王在星斗大森林最后的净土苏醒，它要带领仅存的族人，向熙熙复仇！熙熙立志要成为一名强大的拉胯师，可当拉跨之魂觉时，苏醒的，却是……旷世之才，拉跨王之争，      我们的熙熙拉跨传说，将由此开始。 ',
          title: '熙熙拉跨日记',
          word: '300万字' 
        },
        menuIsShow: false,
        isSelectShow: false,
        selectList: [],
        isFootShow: false,
        isSelectDelShow: false,
        lastReading: [        
         
          ],
        showBookList: [],
        newOrLast: false
       
      }
    },
    async created() {
      if (window.localStorage.getItem('list') === null || window.localStorage.getItem('list') === undefined) {
        const { data } = await axios({
        method: 'get',
        url: 'http://123/bookrack'
      })
      
      this.bookList.push(...data.list)
      this.lastReading.push(...data.list)
      this.showBookList = this.lastReading
      } else {
        const data = window.localStorage.getItem('list')
       this.bookList = JSON.parse(data)
      this.lastReading = JSON.parse(data)
      this.showBookList = this.lastReading
      }
    },
    methods: {
      showThis(item, index) {
        if (!this.isSelectShow) {
        this.showBook.title = item.title
        this.showBook.img = item.coverImg
        this.lastReading.splice(index, 1)
        this.lastReading.unshift(item)
        this.$router.push('/read')
        } else {
          const aa = this.selectList.indexOf(index)
          if (aa === -1) {
            this.selectList.push(index)
          } else {
            this.selectList.splice(aa, 1)
          }
        }
      },
      showNavMenu() {       
        this.menuIsShow = !this.menuIsShow
        this.isSelectShow = false
        // console.log(1)
      },
      menuClose() {
        if (this.menuIsShow) {
          this.menuIsShow = false
        }
        // console.log(2)
      },
      selectBook() {
        let aaa = this.selectList[0]
        this.selectList.forEach((item, index) => {
          if (index !== 0) {
            aaa = item - index
          }   
          this.bookList.splice(aaa, 1)
          this.lastReading.splice(aaa, 1)
        })
        this.selectList = []
        this.isSelectDelShow = false
      },
      selectAll() {
        for (var i = 0; i < this.bookList.length; i++) {
          this.selectList.push(i)
        }
      }
     
    },
    watch: {
       isSelectShow() {
         if (!this.isSelectShow) {
           this.selectList = []
           this.isFootShow = false
         } else {
           this.isFootShow = true
         }
       },
       newOrLast() {
         if (this.newOrLast) {
           this.showBookList = this.bookList
         } else {
           this.showBookList = this.lastReading
         }
       }, 
showBookList() {
         window.localStorage.setItem('list', JSON.stringify(this.showBookList))
       }
    }
    
  }
</script>

<style lang="scss" scoped>
.bookrack-container {
  .bookrack-nav {
    position: relative;
    background-color: #666;
    height: 550px;
    margin-bottom: 0px;
  }
  .arrangement {
    position: absolute;
    left: 30px;
    top: 50px;
    .arrangement-t1 {
      font-size: 35px;
      color: #fff;
    }
    .arrangement-t2 {
      font-size: 35px;
      color: #fff;
      margin: 0 185px;
    }
    .arrangement-tt2 {
      // position: absolute;
      // left: 50px;
      // top: 20px;
      // width: 500px;
      font-size: 35px;
      color: #fff;
      margin: 0 150px;
    }
    .arrangement-t3 {
      font-size: 35px;
      color: #fff;
    }
  }
  .nav {
    position: relative;
    .nav-menu {
      position: absolute;
      top: 110px;
      right: 20px;
      width: 200px;
      height: 150px;
      font-size: 20px;
      border-radius: 10px;
      background-color: #fff;
      box-shadow: 0px 0px 10px #989898;
      z-index: 1;
      i {
        font-size: 30px;
        margin-right: 10px;
      }
      .nav-menu-t1 {
        width: 180px;
        height: 75px;
        border-bottom: 1px solid #cfcfcf;
        font-size: 30px;
        font-weight: 100;
        padding-left: 20px;
        line-height: 75px;
      }
      .nav-menu-t2 {
        width: 180px;
        height: 75px;
        font-size: 30px;
        font-weight: 100;
        padding-left: 20px;
        line-height: 75px;
      }
      .nav-more {
        z-index: 3;
      }
    }
    .nav-menu::after {
      position: absolute;
      left: 156px;
      top: -5px;
      content: '';
      width: 0;
      height: 0;
      border-bottom: 30px solid #fff;
      border-right: 30px solid transparent;
      transform: rotate(135deg);
    }
  }
  .nav-t1 {
    position: absolute;
    left: 30px;
    top: 30px;
    color: #fff;
    font-size: 50px;
    font-weight: 200;
  }
  .nav-t2 {
    position: absolute;
    left: 240px;
    top: 45px;
    font-size: 30px;
    color: #999999;
  }
  .nav-more {
    position: absolute;
    right: 20px;
    top: 35px;
    font-size: 60px;
    color: #fff;
  }
  .det {
    position: absolute;
    left: 30px;
    bottom: 20px;
    img {
      height: 350px;
      width: 250px;
    }
    .det-t1 {
      position: absolute;
      left: 280px;
      font-size: 43px;
      width: 400px;
      font-weight: 200;
      color: #fff;
    }
    .det-t2 {
      position: absolute;
      bottom: 30px;
      width: 150px;
      height: 60px;
      font-size: 20px;
      line-height: 60px;
      background-color: #737373;
      padding-left: 20px;
      color: #fff;
      .det-triangle {
        position: absolute;
        top: 7px;
        right: -25px;
        width: 0;
        height: 0;
        border-bottom: 43px solid #666;
        border-right: 43px solid transparent;
        transform: rotate(45deg);
      }
    }
  }
  /deep/.bookrack-grid {
    overflow: auto;
    padding: 0px 25px;
    height: 50vh;
    .van-grid-item__content {
      padding: 0;
      margin-top: 20px;
    }

    img {
      width: 200px;
      height: 270px;
      border: 1px solid #ccc;
    }
    .grid-text {
      font-size: 27px;
      width: 200px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      text-align: center;
    }
    .noSelect {
      position: absolute;
      right: 0px;
      bottom: 11px;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      border: 3px solid #666666;
      background-color: #fefefe;
    }
    .isSelect {
      position: absolute;
      right: 0px;
      bottom: 11px;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      border: 1px solid red;
      background-color: red;
      .iconselect {
        position: absolute;
        left: -4px;
        bottom: -8px;
        font-size: 40px;
        color: #ffffff;
      }
    }
  }
  .foot {
    position: fixed;
    bottom: 0;
    width: 750px;
    height: 110px;
    text-align: center;
    line-height: 110px;
    color: red;
    font-size: 35px;
    background-color: #ffffff;
    z-index: 2;
  }
  .selectDel {
    position: absolute;
    bottom: 0px;
    width: 750px;
    height: 300px;
    background-color: #ffffff;
    border-top: 1px solid #eaeaea;
    z-index: 3;
    padding-top: 0px;
    h4 {
      font-size: 40px;
      font-weight: 350;
      text-align: center;
      margin-top: 20px;
    }
    h5 {
      font-size: 30px;
      font-weight: 400;
      text-align: center;
      margin-top: -30px;
      margin-bottom: 40px;
    }
    .jgbtn {
      margin-left: 100px;
      width: 250px;
      height: 80px;
      background-color: #ff6666;
      border: 1px solid #ff6666;
      font-size: 30px;
    }
    .qxbtn {
      margin-left: 20px;
      width: 250px;
      height: 80px;
      border: 1px solid #cccccc;
      font-size: 30px;
    }
  }
}
</style>