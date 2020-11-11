export default {
  MOckurl: [
    {
      // 请求个人用户信息
      url: 'http://yuedu/myuser', // 请求地址
      request: 'get', // 请求类型
      manage: options => {
        // 处理函数
        console.log(12312312)
        return {
          name: '张三',
          mobile: '1582345677',
          state: 200
        }
      }
    }
  ]
}
