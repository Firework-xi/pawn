<template>
  <div class="particulars">
    <van-nav-bar left-arrow @click-right="onClickRight" fixed :class="{ borde: altitude }" @click-left="$router.back()">
      <template #title v-if="altitude"> 书籍详情</template>
    </van-nav-bar>
    <!--  //导航 -->
    <!-- 图书介绍区 -->
    <div class="box" ref="lost-gome">
      <div class="introduce">
        <div class="left">
          <van-image fit="cover" src="https://img.yzcdn.cn/vant/cat.jpeg" />
        </div>
        <div class="right">
          <div class="right-box">
            <div class="right-name">金瓶梅</div>
            <van-rate class="right-evaluate" v-model="number" color="#999999" void-icon="star" void-color="#88888" /><span class="text">8.4</span>
            <div class="right-sort">猫腻 | 玄幻</div>
            <div class="right-number"><span>5春卷/千字</span><span>313万字</span></div>
          </div>
        </div>
      </div>
      <!-- 结束 -->
      <!-- 图书预览区 -->
      <div class="describe">
        <div class="van-multi-ellipsis--l3">
          <p>命里有时终须有，命里无时要强求。</p>
          <p class="texte-p">
            这是一个长生果的故事。择是选择。这是一个关于选择的故事。三千世界，满天神魔，手握道卷，掌天下...<span> <van-icon name="arrow-down"/></span>
          </p>
        </div>
      </div>
      <!-- 结束 -->
      <!-- 目录 -->
      <catalog></catalog>
      <div class="ofthesamekind"></div>
      <!-- 同类作品 -->
      <ofthesameki></ofthesameki>
      <div class="ofthesamekind"></div>
      <!-- 全部作品 -->
      <complete></complete>
      <div class="ofthesamekind"></div>
      <!-- 图书详情 -->
      <detaile></detaile>
    </div>
    <basehandle />
  </div>
</template>

<script>
import catalog from './module/catalog' // 目录组件
import ofthesameki from './module/ofthesamekind' // 同类作品组件
import complete from './module/complete' // 全部作品
import details from './module/details' // 书籍详情组件
import base from './module/base' // btn按钮
import { debounce } from 'lodash'
export default {
  created() {
    this.onindex()
  },
  data() {
    return {
      number: 4,
      altitude: false
    }
  },
  methods: {
    async onindex() {
      const res = await this.$http.get('http://yuedu/details')
      console.log(res)
    },
    onClickRight() {
      this.$http.get('http://yuedu/details')
      // 书籍返回事件
    }
  },
  components: {
    catalog,
    ofthesameki,
    complete,
    detaile: details,
    basehandle: base
  },
  mounted() {
    // 监听器头的事件
    const atraters = this.$refs['lost-gome']
    atraters.onscroll = debounce(() => {
      if (atraters.scrollTop > 80) {
        this.altitude = true
      } else {
        this.altitude = false
      }
    }, 10)
  }
}
</script>
<style lang="scss" scoped>
::v-deep.particulars {
  .borde {
    border-bottom: #5a5d5a 1px solid;
  }
  .refresh {
    font-size: 12px;
    margin-left: 10px;
    .van-icon-replay {
      margin-top: 2px;
    }
  }
  .particulars-hot {
    height: 5.8rem;
    .van-cell__value {
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
  }
  .box {
    position: fixed;
    overflow: auto;
    bottom: 100px;
    top: 50 * 2px;
  }
  .ofthesamekind {
    height: 10px;
    width: 100%;
    background: #f2f2f2;
    border: #e4e4e4 solid 1px;
    border-left: 0;
    border-right: 0;
  }
  .catalogue {
    .van-icon-arrow {
      margin-top: 3 * 2px;
      margin-right: -3 * 2px;
      font-size: 18 * 2px;
      color: #999999;
    }
    border: #e4e4e4 solid 1px;
    border-left: 0;
    border-right: 0;
    .text-serialize {
      font-size: 12 * 2px;
      color: #999999;
    }
    .text-time {
      font-size: 12 * 2px;
      color: #999999;
      margin-left: 18 * 2px;
    }
  }
  .van-multi-ellipsis--l3 {
    .van-icon-arrow-down {
      font-size: 18 * 2px;
      position: absolute;
      margin-top: 2px;
    }
    .texte-p {
      line-height: 22 * 2px;
    }
    margin: 0 15 * 2px;
    color: #5a5d5a;
    font-size: 28px;
    margin-top: -15px;
    p {
      margin: 10px 0;
    }
  }
  .describe {
    height: 92 * 2px;
  }
  .van-nav-bar {
    background: #ffffff;
  }
  background: #ffffff;
  .van-nav-bar__left {
    margin-left: 0;
    padding-left: 0;
  }
  .van-icon-arrow-left {
    font-size: 28 * 2px;
    color: #888888;
  }
  .introduce {
    display: flex;
    justify-content: center;
    height: 170 * 2px;
    .left {
      margin: auto;
      width: 135 * 2px;
      height: 100%;
      .van-image {
        height: 152 * 2px;
        width: 115 * 2px;
        margin-left: 13 * 2px;
      }
    }
    .right {
      .right-sort,
      .right-number {
        font-size: 25px;
        margin-top: 15px;
      }
      .text {
        font-size: 13 * 2px;
        margin-left: 10px;
      }
      .right-name {
        font-size: 18 * 2px;
      }
      .van-icon-star {
        font-size: 10 * 2px;
      }
      width: 100%;
      height: 100%;
      .right-box {
        margin-left: 15 * 2px;
      }
    }
  }
}
</style>
