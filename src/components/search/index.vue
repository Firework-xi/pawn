import axios from 'axios';
<template>
  <div class="search-container">
    <!-- 搜索框 -->
    <van-search v-model="searchValue"
                show-action
                :left-icon="''"
                placeholder="请输入搜索关键词"
                @search="onSearch">
      <template #action>
        <div @click="onSearch">搜索</div>
      </template>
      <i slot="left"
         class="iconfont iconzuojiantou"
         @click="back">
      </i>
    </van-search>

    <div class="searchBody">
      <!-- 推荐搜索 -->
      <div v-if="showWho">
        <div class="tagNav">
          <span class="tagNav-t1">大家都在搜</span>
          <span class="tagNav-t2"
                @click="getRecommendList"><i class="iconfont icongenxin"></i>换一批</span>
        </div>
        <!-- 展示标签 -->
        <div class="showTag">
          <van-tag v-for="(item,index) in recommendList"
                   :key="index"
                   type="primary"
                   @click="searchTag(item.title)">{{item.title}}</van-tag>
        </div>
        <!-- 搜索历史 -->
        <div class="listNav">
          <span class="tagNav-t1">搜索历史</span>
          <span class="tagNav-t2"
                @click="historyList=[]"><i class="iconfont iconshanchu"></i>清空</span>
        </div>
        <!-- 搜索历史列表 -->
        <van-list :finished="finished"
                  finished-text="没有更多了"
                  @load="onLoad">
          <van-cell v-for="item in historyList"
                    :key="item"
                    :title="item" />
        </van-list>
      </div>
      <!-- 搜索联想列表 -->
      <van-list class="lxlist"
                v-else
                :finished="finished"
                finished-text="没有更多了"
                @load="onLoad">
        <van-cell v-for="(item,index) in associationList"
                  :key="index"
                  @click="function(e){
                  goOnSearch(e.target.innerText )
                  } ">
          <span slot="default"
                v-html="machining(item.title)"></span>
        </van-cell>
      </van-list>
    </div>
  </div>

</template>

<script>
import axios from 'axios'
  export default {
    name: 'Search',
    data() {
      return {
        searchValue: '',
        recommendList: [],
        historyList: [],
        // loading: false,
        finished: true,
        associationList: [],
        showWho: true
      }
    },
     created() {
     this.getRecommendList()
    },
    methods: {
      onSearch() {
        console.log(this.searchValue)
        this.historyList.unshift(this.searchValue)
        this.searchValue = ''
      },
      goOnSearch(e) {
        // console.log(e)
        this.historyList.unshift(e)
        this.searchValue = ''
      },
      back() {
        if (this.showWho) {
          history.go(-1)
        } else {
          this.showWho = true
          this.searchValue = ''
        }
      },
      async getRecommendList() {
         const { data } = await axios({
        method: 'get',
        url: 'http://123/searchrec'
      })      
      this.recommendList = data.list
      // console.log(this.recommendList)
      },
      searchTag(info) {
        this.searchValue = info
        this.onSearch()
      },
      onLoad() {
      
      },
      machining(info) {
       const xxx = this.searchValue.trim()
       const Str = insertStr(info, 0, xxx)
       function insertStr(info, start, newStr) {   
          return info.slice(0, start) + newStr + info.slice(start)
      }
      const highStr = `<span class='active'>${xxx}</span>`
      const reg = new RegExp(xxx, 'gi')
      return Str.replace(reg, highStr)
      }
    },
    watch: {
      async searchValue(i) {
        this.showWho = false
        const info = i.trim()
        if (info.length !== 0) { 
          const { data } = await axios({
          method: 'get',
          url: 'http://123/searchrec'
          })      
         this.associationList = data.list
        //  console.log(this.associationList)
        } else {
          this.showWho = true
          this.associationList = []
        }
      }
    }
     
    
  }
</script>

<style lang="less" scoped>
.search-container {
  .van-search {
    border-bottom: 1px solid #f2f2f2;
    .iconzuojiantou::before {
      color: #808080;
      font-size: 70px;
      font-weight: 100;
    }
    .van-search__content {
      margin: 0 15px;
      width: 200px;
      border: 1px solid #cccccc;
      background-color: #fff;
    }
    .van-search__action {
      font-size: 32px;
      margin-right: 20px;
    }
  }
  .tagNav {
    padding-left: 50px;
    .tagNav-t1 {
      color: #5a5d5a;
      font-size: 28px;
    }
    .tagNav-t2 {
      margin-left: 400px;

      color: #5a5d5a;
      font-size: 28px;
      .icongenxin::before {
        position: relative;
        top: 10px;
        font-size: 50px;
      }
    }
  }
  .showTag {
    margin-top: 20px;
    padding-left: 30px;

    .van-tag {
      height: 60px;
      font-size: 30px;
      margin: 0 10px;
      padding: 0 20px;
      color: #333;
    }
  }
  .van-tag:nth-child(3n + 1) {
    background-color: #e4e4e4;
  }
  .van-tag:nth-child(3n + 2) {
    background-color: #c9c9c9;
  }
  .van-tag:nth-child(3n) {
    background-color: #a1a1a1;
  }
  .listNav {
    padding-left: 50px;
    .tagNav-t1 {
      color: #5a5d5a;
      font-size: 28px;
    }
    .tagNav-t2 {
      margin-left: 460px;

      color: #5a5d5a;
      font-size: 28px;
      .iconshanchu::before {
        position: relative;
        top: 5px;
        font-weight: 600;
        font-size: 35px;
        margin-right: 10px;
      }
    }
  }
  .van-search {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 3;
  }
  .searchBody {
    position: fixed;
    top: 120px;
    bottom: 0;
    overflow: auto;
  }
  /deep/.active {
    color: red !important;
  }
  .searchBody {
    width: 100%;
  }
}
</style>