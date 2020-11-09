export default {
  MOckurl: [
    {
      url: 'http://yuedu/details', // 请求地址
      request: 'get', // 请求类型
      manage: options => {
        // 处理函数
        return {
          state: 200
        }
      }
    }
  ]
}
