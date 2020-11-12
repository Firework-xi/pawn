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
       <span v-for="channel in myChannels" :key="channel.id">{{channel.name}}</span>
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
  },
  data () {
    return {
       isEdit: false, // 控制编辑状态的显示
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {
  },
  methods: {}
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
  // flex: 20%;
  text-align: center;
  margin:20px 24px;
  padding: 10px 30px;
  height: 30px;
  line-height: 30px;
  float: left;
  white-space: nowrap;
    border: 1px solid #D0D0D0;
    border-radius: 40px;
    font-size: 30px;
  }
}

</style>
