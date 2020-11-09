export default {
  MOckurl: [
    {
      url: 'http://yuedu/details', // 请求地址
      request: 'get', // 请求类型
      manage: options => {
        // 处理函数
        console.log(12312312)
        return {
          state: 200
        }
      }
    }
  ]
}
