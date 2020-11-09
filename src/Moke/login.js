export default {
  MOckurl: [{
    url: 'http://yuedu/land', // 请求地址
    request: 'post', // 请求类型
    manage: options => { // 处理函数
      console.log(12312312)
      return {
        status: 200,
        name: '',
        password: ''

      }
    }
  }]
}
