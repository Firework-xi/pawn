export default {
  MOckurl: [
    {
      url: 'http://yuedu/read', // 请求地址
      request: 'get', // 请求类型
      manage: options => {
        // 处理函数
        return {
          status: 201,
          data: [
            {
              id: 1,
              zhangjie: '第一章 人造与天生'
            },

            {
              id: 2,
              zhangjie: '第二章 蜂群的思维'
            },
            {
              id: 3,
              zhangjie: '第三章 有心智的机器'
            },
            {
              id: 4,
              zhangjie: '第四章 沉睡的蝴蝶'
            }
          ]
        }
      }
    }
  ]
}
