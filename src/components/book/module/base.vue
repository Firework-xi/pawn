<template>
  <div>
    <div class="box-base">
      <van-row>
        <van-col span="7"><van-button>下载</van-button></van-col>
        <van-col span="10"><van-button class="colored" @click="ydnr()">免费试读</van-button></van-col>
        <van-col span="7"
          ><van-button @click="clickindex">{{ text }}</van-button></van-col
        >
      </van-row>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.id = JSON.parse(window.localStorage.getItem('data'))
    let data = JSON.parse(window.localStorage.getItem('list'))
    const index = data.findIndex(v => {
      return v.bookId === this.id.bookId - 0
    })
    console.log(index)
    if (index !== -1) {
      this.text = '取消加入'
    }
  },
  data() {
    return {
      text: '加入书架',
      id: null
    }
  },
  activated() {
      this.id = JSON.parse(window.localStorage.getItem('data'))
    let data = JSON.parse(window.localStorage.getItem('list'))
    const index = data.findIndex(v => {
      return v.bookId === this.id.bookId - 0
    })
    console.log(index)
    if (index !== -1) {
      this.text = '取消加入'
    }
  },
  methods: {
    ydnr() {
      const id = window.localStorage.getItem('完美世界')
      if (id === null) {
        window.localStorage.setItem('完美世界', 0)
        this.$router.push('/read')
      }
      if (!window.localStorage.getItem('coins')) {
        window.localStorage.setItem('coins', 0)
      }
      this.$router.push('/read')
    },
    addinedx() {
      const id = JSON.parse(window.localStorage.getItem('data'))
      let data = JSON.parse(window.localStorage.getItem('list'))
      const index = data.findIndex(v => {
        return v.bookId === id.bookId - 0
      })
      console.log(index)
      if (index !== -1) {
        console.log(1)
        this.text = '取消加入'
      }
    },
    setkeynull(item) {
      let data = JSON.parse(window.localStorage.getItem('list'))
      const index = data.findIndex(v => {
        return v.bookId === item.bookId
      })
      if (index === -1) {
        this.text = '加入书架'
      }
    },
    clickindex() {
      // 加入书架
      if (this.text === '加入书架') {
        let data = JSON.parse(window.localStorage.getItem('list'))
        const res = data.filter(v => {
          return v.bookId !== this.id.bookId
        })
        res.push(JSON.parse(window.localStorage.getItem('data')))
        this.$toast('加入成功')
        window.localStorage.setItem('list', JSON.stringify(res))
        this.text = '取消加入'
      } else {
        let data = JSON.parse(window.localStorage.getItem('list'))
        const res = data.filter(v => {
          return v.bookId !== this.id.bookId
        })
        this.$toast('取消成功')
        window.localStorage.setItem('list', JSON.stringify(res))
        this.text = '加入书架'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.box-base {
  .colored {
    background: #ff6666;
    border: 0;
    border-radius: 0;
    color: #fff;
  }
  border-top: 1px solid rgb(194, 194, 194);
  .van-row {
    height: 100%;
  }
  .van-col {
    height: 100%;
  }
  .van-button {
    width: 100%;
    height: 100%;
  }
  position: fixed;
  width: 100%;
  height: 100px;
  bottom: 0;
}
</style>
