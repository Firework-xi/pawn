<template>
  <div>
    <van-nav-bar title="批量购买" right-text="全选" left-arrow @click-right="onClickRight" @click-left="$router.back()" />
    <van-checkbox-group v-model="result" ref="checkboxGroup">
      <van-cell-group>
        <van-cell v-for="(item, index) in list" :key="index" :title="`${item.zhangjie}`" @click="toggle(index)">
          <template #right-icon>
            <van-checkbox :name="item.id" ref="checkboxes" />
          </template>
        </van-cell>
      </van-cell-group>
    </van-checkbox-group>
    <div v-if="show" class="gmzj">
      <h3>已选： {{ zj }} 章节</h3>
      <p>价格：{{ jiage }} kb币 余额：{{ yue }} kb币</p>
      <van-button v-if="result.length === 0" round type="primary" color="#ccc" disabled>请选择购买章节</van-button>
      <!-- <van-button v-else-if="result.length" round type="primary">免费下载</van-button> -->
      <van-button v-else-if="gman" round type="danger">购买并下载</van-button>
      <div class="cz" v-if="cz">
        <van-divider>余额不足，充值并购买 </van-divider>
        <van-button type="default">
          <p>1元</p>
          <span>100kb币</span>
        </van-button>
        <van-button type="default">
          <p>6元</p>
          <span>600kb币</span>
        </van-button>
        <van-button type="default">
          <p>12元</p>
          <span>1200kb币</span>
        </van-button>
        <van-button type="default">
          <p>30元</p>
          <span>3000kb币</span>
        </van-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      result: [],
      show: true,
      cz: false,
      gman: false,
      zj: 0,
      jiage: 0,
      yue: 30,
      lists: []
    }
  },
  created() {
    this.catalogs()
  },
  computed: {},
  watch: {
    result: function(newQuestion, oldQuestion) {
      this.zj = this.result.length
      this.jiage = this.result.length * 100
      if (this.jiage > this.yue) {
        this.cz = true
        this.gman = false
      } else {
        this.cz = false
        this.gman = true
      }
    }
  },
  methods: {
    toggle(index) {
      this.$refs.checkboxes[index].toggle()
    },
    async getchongzhi() {
      const { data } = await this.$http.get('http://yuedu/chongzhi')
      console.log(data)
      this.lists = data.data
    },
    async catalogs() {
      const { data: res } = await this.$http.get('http://yuedu/read')
      this.list = res.data
      this.yue = parseInt(window.localStorage.getItem('coins'))
    },
    onClickRight() {
      if (this.result.length < this.list.length) {
        this.$refs.checkboxGroup.toggleAll(true)
      } else {
        this.$refs.checkboxGroup.toggleAll()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.gmzj {
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 99;
  background: #fff;
  width: 100%;
  // height: 300px;
  border-top: 1px solid #999;
  text-align: center;
  h3 {
    font-size: 35px;
    font-weight: 400;
  }
  p {
    font-size: 25px;
  }
  .van-button {
    width: 50%;
    height: 70px;
    margin-bottom: 20px;
  }
  .cz {
    .van-button {
      margin: 10px;
      width: 152px;
      height: 132px;
      padding: 0;
      p {
        margin: 0;
      }
      span {
        font-size: 22px;
        color: #666;
      }
    }
    .van-divider {
      font-size: 24px;
    }
  }
}
</style>
