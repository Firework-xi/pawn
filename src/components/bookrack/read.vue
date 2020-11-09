<template>
  <div class="read">
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
          <van-slider v-model="value" button-size="12px" @change="onChange" />
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
        <van-grid-item icon="friends-o" text="夜间" />
      </van-grid>
    </div>
    <div class="nr" @click="gbs">
      <h1>第一章 人造与天生</h1>
      <p>
        我被关闭在密不透气的玻璃小屋里。在这里，我吸入的是自己呼出的气体，不过，在风扇的吹动下，空气依然清新。由众多导管、线缆、植物和沼泽微生物构成的系统回收了我的尿液和粪便，并将其还原成水和食物供我食用。说真的，食物的味道不错，水也很好喝。
      </p>
      <p>
        昨夜，外面下了雪。玻璃小屋里却依然温暖、湿润而舒适。今天早上，厚厚的内窗上挂满了凝结的水珠。小屋里到处都是植物。大片大片的香蕉叶环绕在我的四周，那鲜亮的黄绿色暖人心房。纤细的青豆藤缠绕着，爬满了所有的墙面。屋内大约一半的植物都可食用，而我的每一顿大餐都来源于它们。
      </p>
      <p>
        这个小屋实际上是一个太空生活试验舱。我周边大气的循环再利用完全依赖于植物及其扎根的土壤，以及那些在树叶间穿来穿去的、嗡嗡作响的管道系统。不管是这些绿色植物，还是那些笨重的机器，单靠它们自己，都不足以保证我在这个空间的生存。确切地说，是阳光供养的生物和燃油驱动的机械共同确保了我的生存。在这个小屋内，生物和人造物已经融合成为一个稳定的系统，其目的就是养育更高级的复杂物——当下而言，就是我。
      </p>
      <p>
        在这个千年 临近结束的时候，发生在这个玻璃小屋里的事情，也正在地球上大规模地上演着，只不过不那么明晰。造化所生的自然王国和人类建造的人造国度正在融为一体。机器，正在生物化；而生物，正在工程化。
      </p>
    </div>
    <!-- 目录 -->
    <van-popup v-model="catalog" @close="gb = false" position="left" :style="{ height: '100%', width: '70%' }">
      <van-cell-group>
        <van-cell type="text" class="biaoti">
          <p>失控</p>
          <span>完结 共24章</span>
        </van-cell>
      </van-cell-group>
      <van-collapse v-model="activeNames" v-for="(item, index) in list" :key="index">
        <van-collapse-item :title="item.zhangjie" :name="index">
          <van-cell-group v-for="(v, index) in item.children" :key="index">
            <van-cell :title="v.erji" />
          </van-cell-group>
        </van-collapse-item>
      </van-collapse>
    </van-popup>
    <!-- 购买章节 -->
    <van-popup v-model="goumai" position="bottom" :style="{ height: '60%' }">
      <div class="goumai">
        <h3>需要购买后阅读！</h3>
        <p><i>本节价格：10 春卷</i> 余额：100 春卷</p>
        <van-button type="danger" round>购买本章</van-button>
        <van-button class="pl" to="/bulkbuying ">批量购买章节</van-button>
        <van-checkbox v-model="checked">自动购买下一章</van-checkbox>
      </div>
    </van-popup>
  </div>
</template>
<script>
export default {
  data() {
    return {
      gb: false,
      show: false,
      value: 50,
      fonts: 16,
      catalog: false,
      activeNames: ['1'],
      list: [],
      goumai: true,
      checked: true
    }
  },
  methods: {
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
      const nr = document.querySelector('.nr')
      const p = nr.querySelectorAll('p')
      nr.querySelector('h1').style.fontSize = this.fonts + 10 + 'px'
      console.log('fonstjian -> p', p)
      for (let i = 0; i < p.length; i++) {
        p[i].style.fontSize = this.fonts + 'px'
      }
      // nr.querySelector('div').style.fontsize = '50px'
    },
    fonstadd() {
      this.fonts++
      const nr = document.querySelector('.nr')
      const p = nr.querySelectorAll('p')
      nr.querySelector('h1').style.fontSize = this.fonts + 10 + 'px'
      for (let i = 0; i < p.length; i++) {
        p[i].style.fontSize = this.fonts + 'px'
      }
    },
    fonstoff() {
      this.fonts = 16
      const nr = document.querySelector('.nr')
      const p = nr.querySelectorAll('p')
      nr.querySelector('h1').style.fontSize = this.fonts + 10 + 'px'
      for (let i = 0; i < p.length; i++) {
        p[i].style.fontSize = this.fonts + 'px'
      }
    },
    async catalogs() {
      if (this.catalog) {
        return (this.catalog = false)
      } else {
        this.catalog = true
      }
      const { data: res } = await this.$http.get('http://yuedu/read')
      this.list = res.data
      console.log('catalogs -> this.list', this.list)
    }
  }
}
</script>

<style lang="scss" scoped>
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
  z-index: 99;
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
}
.top-bottom {
  .van-nav-bar {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
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
  }
}

.nr {
  padding: 20px 40px;
  h1 {
    font-size: 40px;
    text-align: center;
    font-weight: 400;
  }
  p {
    line-height: 60px;
    text-indent: 0.7rem;
    font-size: 29px;
  }
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
</style>
