<template>
  <div :class="yejian === true ? 'read' : 'read reads'">
    <div class="top-bottom" v-if="gb">
      <van-icon class="sc" name="bookmark-o" />
      <van-nav-bar left-arrow @click-left="$router.back()">
        <template #right>
          <van-icon name="ellipsis" />
        </template>
      </van-nav-bar>
      <div v-if="show" class="shezhi">
        <div class="liangdu">
          <span>亮度</span>
          <i class="iconfont an ">&#xe634;</i>
          <van-slider v-model="value" button-size="12px" @input="onChange" />
          <i class="iconfont liang ">&#xe649;</i>
        </div>
        <div class="ziti">
          <span>字号</span>
          <van-button hairline type="icon" @click="fonstjian" class="btn-left"><i class="iconfont icon-ziti">-</i></van-button>
          <van-button hairline type="icon" @click="fonstoff">{{ fonts }}</van-button>
          <van-button hairline type="icon" @click="fonstadd" class="btn-right"><i class="iconfont icon-ziti">+</i></van-button>
        </div>
      </div>
      <van-grid>
        <van-grid-item icon="bars" text="目录" @click="catalogs" />
        <van-grid-item icon="down" text="下载" />
        <van-grid-item icon="setting-o" text="设置" @click="shows" />
        <van-grid-item type="icon" @click="yjms">
          <i class="iconfont icon-liangdu1 yejian1" v-if="yejian"></i>
          <i class="iconfont icon-yejian1 yejian1" v-else></i>
          <span v-if="yejian">白天</span>
          <span v-else>夜间</span>
        </van-grid-item>
      </van-grid>
    </div>
    <div class="content" v-if="wznr.length !== 0" v-html="wznr"></div>
    <!-- 目录 -->
    <van-popup v-model="catalog" @close="gb = false" position="left" :style="{ height: '100%', width: '70%' }">
      <van-cell-group>
        <van-cell type="text" class="biaoti">
          <p>{{ list.author }}</p>
          <span>{{ list.word }}</span>
        </van-cell>
      </van-cell-group>
      <van-cell-group v-for="(item, index) in list.muli" :key="index">
        <van-cell :title="item" @click="getwznr(index)" />
      </van-cell-group>
    </van-popup>
    <!-- 购买章节 -->
    <van-popup :close-on-click-overlay="false" @click-overlay="$router.back()" v-model="goumai" position="bottom" :style="{ height: '50%' }">
      <div class="goumai">
        <h3>需要购买后阅读！</h3>
        <p>
          <i>本节价格：{{ jiage }} kb币</i> 余额：{{ yue }}kb币
        </p>
        <div v-if="gman">
          <van-button type="danger" round @click="gmcg">购买本章</van-button>
          <van-button class="pl" to="/bulkbuying">批量购买章节</van-button>
          <van-checkbox v-model="checked">自动购买下一章</van-checkbox>
        </div>
        <balance v-if="cz" @sx="sx"></balance>
      </div>
    </van-popup>
    <div class="xsgnk" @click="gbs"></div>
  </div>
</template>
<script>
import balance from './notsufficientfunds.vue'
export default {
  props: {
    id: {
      trpe: [Number, String],
      require: true
    }
  },
  components: {
    balance
  },
  data() {
    return {
      gb: false,
      show: false,
      value: 50,
      fonts: 16,
      catalog: false,
      list: [],
      goumai: window.localStorage.getItem('havebought'),
      // goumai: true,
      checked: true,
      yue: 0,
      yejian: true,
      wznr: [],
      cz: false,
      gman: false,
      jiage: 100
    }
  },
  computed: {},
  watch: {
    goumai: function(newQuestion, oldQuestion) {
      if (this.jiage > this.yue) {
        this.cz = true
        this.gman = false
      } else {
        this.cz = false
        this.gman = true
      }
    },
    yue: function() {
      const a = parseInt(window.localStorage.getItem('coins'))
      const b = a + this.yue
      return b
    }
  },
  created() {
    this.getwznr()
    this.getyue()
  },
  methods: {
    getyue() {
      this.yue = parseInt(window.localStorage.getItem('coins'))
      if (this.goumai === '1') {
        this.goumai = false
      } else {
        this.goumai = true
      }
    },
    gbs() {
      if (this.gb) {
        this.show = false
        this.gb = false
      } else {
        this.gb = true
      }
    },
    shows() {
      if (this.show) {
        this.show = false
      } else {
        this.show = true
      }
    },
    onChange(value) {
      this.$toast('当前值：' + value)
    },
    fonstjian() {
      this.fonts--
      const nr = document.querySelector('.content')
      console.log('fonstjian -> nr', nr)
      nr.style.fontSize = this.fonts + 'px'
      // const p = nr.querySelectorAll('p')
      // nr.querySelector('h1').style.fontSize = this.fonts + 10 + 'px'
      // for (let i = 0; i < p.length; i++) {
      //   p[i].
      // }
      // nr.querySelector('div').style.fontsize = '50px'
    },
    fonstadd() {
      this.fonts++
      const nr = document.querySelector('.content')
      console.log('fonstjian -> nr', nr)
      nr.style.fontSize = this.fonts + 'px'
      // nr.querySelector('h1').style.fontSize = this.fonts + 10 + 'px'
      // for (let i = 0; i < p.length; i++) {
      //   p[i].style.fontSize = this.fonts + 'px'
      // }
    },
    fonstoff() {
      this.fonts = 16
      const nr = document.querySelector('.content')
      console.log('fonstjian -> nr', nr)
      nr.style.fontSize = this.fonts + 'px'
      // const nr = document.querySelector('.nr')
      // const p = nr.querySelectorAll('p')
      // nr.querySelector('h1').style.fontSize = this.fonts + 10 + 'px'
      // for (let i = 0; i < p.length; i++) {
      //   p[i].style.fontSize = this.fonts + 'px'
      // }
    },
    async catalogs() {
      if (this.catalog) {
        this.catalog = false
      } else {
        this.catalog = true
        this.show = false
      }
      const data = JSON.parse(window.localStorage.getItem('data'))
      // const { data: res } = await this.$http.get('http://yuedu/read')
      // console.log('catalogs -> data', data)
      this.list = data
      console.log(this.list)
    },
    gmcg() {
      const token = window.localStorage.getItem('token')
      console.log('gmcg -> token', token)
      if (token === false) {
        this.$toast.fail('请登录后购买')
        this.$router.push('/loginland')
      } else {
        this.goumai = false
        window.localStorage.setItem('coins', parseInt(window.localStorage.getItem('coins')) - 100)
        this.$toast.success('购买成功')
        window.localStorage.setItem('havebought', 1)
      }
    },
    yjms() {
      if (this.yejian) {
        this.yejian = false
      } else {
        this.yejian = true
      }
    },
    async getwznr(index) {
      const i = window.localStorage.getItem('完美世界')
      if (i === null) {
        window.localStorage.setItem('完美世界', 0)
      }

      if (index === undefined) {
        const id = window.localStorage.getItem('完美世界')
        console.log('getwznr -> id', id)
        const { data: res } = await this.$http.get('http://yuedu/aaa/' + id)
        this.wznr = res.data.neirong
      } else {
        const { data: res } = await this.$http.get('http://yuedu/aaa/' + index)
        this.wznr = res.data.neirong
        window.localStorage.setItem('完美世界', index)
        this.catalog = false
      }
    },
    sx(v) {
      this.yue = v
      if (this.jiage > this.yue) {
        this.gman = false
        this.cz = true
      } else {
        this.gman = true
        this.cz = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.read {
  background: #fae8ce;
  .xsgnk {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 999;
    width: 414px;
    height: 90%;
    background: transparent;
  }
  .sc {
    position: fixed;
    top: 25px;
    right: 80px;
    z-index: 2;
    color: rgb(153, 153, 153);
    font-size: 40px;
  }

  .shezhi {
    position: fixed;
    left: 0;
    bottom: 89px;
    z-index: 9999;
    background: #fff;
    width: 100%;
    height: 200px;
    span {
      margin-right: 10px;
      font-size: 30px;
    }
    .liangdu {
      text-align: center;
      margin: 5px 0;
      .van-slider {
        display: inline-block;
        margin: 0;
        width: 400px;
        margin: 0 10px;
        margin-bottom: 10px;
      }
      .liang {
        font-size: 35px;
      }
      .an {
        font-size: 25px;
      }
    }
    .ziti {
      text-align: center;
      margin: 5px 0;
      .van-hairline--surround::after {
        border-width: 0;
      }
      .van-button {
        border: 1px solid #ccc;
        width: 160px;
        height: 50px;
        background: #fff;
      }
      .btn-left {
        border-radius: 40px 0 0 40px;
      }
      .btn-right {
        border-radius: 0 40px 40px 0;
      }
    }
    .iconfont {
      font-size: 30px;
    }
  }
  .top-bottom {
    .van-nav-bar {
      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      z-index: 99;
      border-bottom: 1px solid rgb(153, 153, 153);
      background: #fff;
      /deep/.van-icon {
        color: rgb(153, 153, 153);
        font-size: 40px;
      }
    }
    /deep/.van-grid {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 99;
      border-top: 1px solid rgb(153, 153, 153);
      .van-grid-item__content {
        background: #fff;
        padding: 0;
        color: rgb(153, 153, 153);
        .van-grid-item__icon + .van-grid-item__text {
          color: rgb(153, 153, 153);
          margin: 0;
        }
      }
      .yejian1 {
        font-size: 48px;
      }
      span {
        font-size: 24px;
      }
    }
  }

  .content {
    font-family: 方正启体简体, 'Microsoft YaHei', 微软雅黑, 宋体;
    font-size: 29px;
    letter-spacing: 0.2em;
    line-height: 150%;
    padding-top: 15px;
    width: 85%;
    margin: auto;
  }
  .biaoti {
    padding: 25px 0 0 30px;
    p {
      font-size: 35px;
      margin: 0;
    }
    span {
      font-size: 24px;
      color: #999;
    }
  }
  .goumai {
    font-size: 26px;
    text-align: center;
    z-index: 999999;
    i {
      color: red;
      font-style: normal;
    }
    h3 {
      font-weight: 400;
      margin-bottom: 60px;
      color: #333;
    }
    .van-button {
      width: 60%;
      height: 70px;
      font-size: 26px;
    }
    .van-checkbox {
      position: absolute;
      left: 50%;
      margin-top: 20px;
      transform: translateX(-50%);
    }
    .pl {
      display: block;
      left: 50%;
      transform: translateX(-50%);
      border: none;
      width: 30%;
    }
  }
}
.reads {
  background: #0e0e0e;
  color: #747474;
}
</style>
