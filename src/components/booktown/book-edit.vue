<template>
 <div class="book-edit">
   <div class="location">全部频道</div>
    <van-cell :border="false" class="to-margin">
      <div
        slot="title"
        class="title-text"
      >切换频道</div>
      <van-button
        type="danger"
        plain
        round
        size="mini"
        class="edit-btn"
        @click="isEdit=!isEdit"
      >{{isEdit?'完成':'编辑'}}</van-button>
    </van-cell>
     <div class="grid">
       <span v-for="(channel,index) in myChannels" :key="channel.id"  :class="{active:channel.name==='精选'}"
        @click="onMyChannelClick(channel,index)">
          <van-icon
          v-show="isEdit&& !fiexdChannels.includes(channel.id)"
          slot="icon"
          name="clear"
        ></van-icon>{{channel.name}}</span>
     </div>
      <div
        slot="title"
        class="tianjia-text"
      >点击添加更多频道</div>
      <div class="grid">
       <span v-for="channel in channel" :key="channel.id">{{channel.name}}</span>
     </div>
  </div>
</template>

<script>
export default {
  name: 'BookEdit',
  components: {},
  props: {
myChannels: {
      type: Array,
      required: true
    },
     active: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
       isEdit: false, // 控制编辑状态的显示
       channel: [], // 获取到的添加频道数据
        fiexdChannels: [1]// 固定频道，不允许删除
    }
  },
  computed: {},
  watch: {},
  created () {
    this.getChannel()
  },
  mounted () {
  },
  methods: {
    async getChannel() {
      const { data } = await this.$http.get('http://yuedu/channel')
     this.channel = data.data
    },
     // 点击切换频道
    onMyChannelClick (channel, index) {
      if (this.isEdit) {
        // 如果是固定频道，则不删除
        if (this.fiexdChannels.includes(channel.id)) {
          return
        }
        // 编辑状态，则执行删除频道
        this.myChannels.splice(index, 1)
        if (index <= this.active) {
          // 让频道激活的索引减1
          this.$emit('update-active', this.active - 1, true)
        }
        // 处理持久化
        this.deleteChannel(channel)
      } else {
        // 非编辑状态，执行切换频道
        this.$emit('update-active', index, false)
      }
    },
  }
}
</script>

<style lang="scss" scoped>
.book-edit{
  .location{
    text-align: center;
    margin-top: 20px;
    color: #A3A8A8;
    font-size: 35px;
  }
.edit-btn {
    width: 104px;
    height: 48px;
    font-size: 26px;
  }
 .title-text {
    font-size: 32px;
    font-family: MicrosoftYaHei;
    font-weight: 400;
    color: #333333;
  }
  .to-margin{
margin-top: 10px;
  }
  .my-grid{
    font-size: 30px;
  }
  .grid {
    padding: 30px;
    // display: flex;
    // flex-wrap: wrap;
  }
  .grid span{
    position: relative;
  color: black;
  text-align: center;
  margin:0 24px;
  margin-bottom: 20px;
  padding: 10px 30px;
  height: 40px;
  line-height: 40px;
  float: left;
  white-space: nowrap;
    border: 2px solid #D0D0D0;
    border-radius: 40px;
    font-size: 30px;
  }
    .active {
      color: red !important;
      border: 2px solid rgb(252, 20, 20) !important;
    }
    .tianjia-text{
      margin-top: 20px;
      margin-left: 30px;
      margin-bottom: 50px;
      font-size: 35px;
      float: left;
      width:100%;
    }
     .van-icon-clear {
        position: absolute;
        right: -6px;
        top: -4px;
        font-size: 30px;
        z-index: 3;
        color: #CDCDCD;
      }
}

</style>
