import Mock from 'mockjs'

export default {
  MOckurl: [
    {
      url: 'http://123/searchrec', // 请求地址
      request: 'get', // 请求类型
      manage: options => {
        // 处理函数
        const list = []
        const num = parseInt(Math.random() * (15 - 3 + 1) + 3)
        for (let i = 0; i < num; i++) {
          const data = Mock.mock({
            'title|3-8': '@cword',
            id: i
          })
          list.push(data)
        }
        return {
          list
        }
      }
    }
  ]
}
