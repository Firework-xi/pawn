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
              zhangjie: '第一章 人造与天生',
              children: [
                {
                  erjiid: 1.1,
                  erji: '1.1 新生物文明'
                },
                {
                  erjiid: 1.2,
                  erji: '1.2 生物逻辑的胜利'
                },
                {
                  erjiid: 1.3,
                  erji: '1.3 学会向我们的创造物低头'
                }
              ]
            },

            {
              id: 2,
              zhangjie: '第二章 蜂群的思维',
              children: [
                {
                  erjiid: 2.1,
                  erji: '2.1 蜜蜂之道：分布式管理'
                },
                {
                  erjiid: 2.2,
                  erji: '2.2 群氓的集体智慧'
                },
                {
                  erjiid: 2.3,
                  erji: '2.3 非匀质的看不见的手'
                }
              ]
            },
            {
              id: 3,
              zhangjie: '第三章 有心智的机器',
              children: [
                {
                  erjiid: 3.1,
                  erji: '3.1 新生物文明'
                },
                {
                  erjiid: 3.2,
                  erji: '3.2 生物逻辑的胜利'
                },
                {
                  erjiid: 3.3,
                  erji: '3.3 学会向我们的创造物低头'
                }
              ]
            },
            {
              id: 4,
              zhangjie: '第一章 人造与天生',
              children: [
                {
                  erjiid: 4.1,
                  erji: '4.1 新生物文明'
                },
                {
                  erjiid: 4.2,
                  erji: '4.2 生物逻辑的胜利'
                },
                {
                  erjiid: 4.3,
                  erji: '4.3 学会向我们的创造物低头'
                }
              ]
            }
          ]
        }
      }
    }
  ]
}
