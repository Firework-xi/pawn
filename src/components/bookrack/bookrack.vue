<template>
  <div class="bookrack-container">
    <!-- 导航 -->
    <div class="bookrack-nav">
      <div class="nav">
        <div>
          <span class="nav-t1">春暖阅读</span>
          <span class="nav-t2">面朝大海，春暖花开</span>
          <span class="nav-more iconfont iconmore-horizontal"
                @click="showNavMenu">
          </span>
          <div class="nav-menu"
               :style="{display:menuIsShow?'block':'none'}">
            <div class="nav-menu-t1"><i class="iconfont iconsousuo"></i>搜索</div>
            <div class="nav-menu-t2"
                 @click="isSelectShow=!isSelectShow"><i class="iconfont iconzuopin"></i>整理书架</div>
          </div>
        </div>
      </div>
      <div class="det">
        <span>
          <img :src="showBook.img"
               alt="">
        </span>
        <span class="det-t1">{{showBook.title}}</span>
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
        <van-grid-item v-for="(item,index) in bookList"
                       :key="index"
                       @click="showThis(item,index)">
          <span slot="icon"><img :src="item.img.image"
                 alt=""></span>
          <span slot="text"
                class="grid-text">{{item.title}}
          </span>
          <span slot="icon"
                v-if="isSelectShow">
            <span class="noSelect"
                  v-if="selectList.indexOf(index)===-1">
            </span>
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
         @click="selectBook">
      删除所选 ({{selectList.length}})
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
          {
            title: '见过没，熙熙有点骚',
            img: { image: require('@/assets/dcfee6c6962a1e68.jpg') },
            id: 0
          }
        ],
        showBook: {
          title: '见过没，熙熙有点骚',
          img: require('@/assets/dcfee6c6962a1e68.jpg') 
        },
        menuIsShow: false,
        isSelectShow: false,
        selectList: [],
        isFootShow: false
       
      }
    },
    async created() {
      const { data } = await axios({
        method: 'get',
        url: 'http://123/bookrack'
      })
      
      this.bookList.push(...data.list)  
    },
    methods: {
      showThis(item, index) {
        if (!this.isSelectShow) {
        this.showBook.title = item.title
        this.showBook.img = item.img.image
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
      },
      selectBook() {
        this.selectList.forEach(i => {
          console.log(i)
          this.bookList.splice(i, 1)
        })
        this.selectList = []
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
       }
    }
    
  }
</script>

<style lang="less" scoped>
.bookrack-container {
  .bookrack-nav {
    position: relative;
    background-color: #666;
    height: 550px;
    margin-bottom: 5px;
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
}
</style>