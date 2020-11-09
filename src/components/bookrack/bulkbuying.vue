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
      <h3>已选： {{ zjs }} 章节</h3>
      <p>价格：0 春卷 余额：100 春卷</p>
      <van-button round type="primary">免费下载</van-button>
      <div class="cz">
        <van-divider>余额不足，充值并购买 </van-divider>
        <van-button type="default">
          <p>1元</p>
          <span>100春卷</span>
        </van-button>
        <van-button type="default">
          <p>6元</p>
          <span>600春卷</span>
        </van-button>
        <van-button type="default">
          <p>12元</p>
          <span>1200春卷</span>
        </van-button>
        <van-button type="default">
          <p>30元</p>
          <span>3000春卷</span>
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
      checkek: true,
      show: true,
      zj: 0
    }
  },
  created() {
    this.catalogs()
  },
  computed: {
    // eslint-disable-next-line vue/return-in-computed-property
    zjs: function() {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      return (this.zj = this.result.length)
    }
  },
  methods: {
    toggle(index) {
      this.$refs.checkboxes[index].toggle()
    },
    async catalogs() {
      const { data: res } = await this.$http.get('http://yuedu/read')
      this.list = res.data
      console.log('catalogs -> this.list', this.list)
    },
    onClickRight() {
      if (this.checkek) {
        this.$refs.checkboxGroup.toggleAll(true)
        this.checkek = false
      } else {
        this.$refs.checkboxGroup.toggleAll()
        this.checkek = true
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
