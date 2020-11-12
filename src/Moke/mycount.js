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
    },
    {
      url: 'http://yuedu/chongzhi', // 请求地址
      request: 'get', // 请求类型
      manage: options => {
        // 处理函数
        return {
          status: 201,
          data: [
            { price: '¥6.0', kb: 600 },
            { price: '¥12.0', kb: 1200 },
            { price: '¥30.0', kb: 3000 },
            { price: '¥50.0', kb: 5000 },
            { price: '¥98.0', kb: 9800 },
            { price: '¥188.0', kb: 18800 }
          ]
        }
      }
    }
  ]
}
