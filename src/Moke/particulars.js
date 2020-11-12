import list from '../data'
export default {

  MOckurl: [
    {
      url: 'http://yuedu/details', // 请求地址
      request: 'get', // 请求类型
      manage: options => {
        const i = options.url.substr(options.url.lastIndexOf('/') + 1, 2)
        let data = []
        for (let q = 0; q < 4; q++) { // 同类作品
          var v = parseInt(Math.random() * (30 - 1 + 1) + 1)
          if (v !== i) { data.push(list.list[v]) }
        }
        let arr = []
        for (let i = 0; i < 4; i++) { // 全部作品推荐
          var index = parseInt(Math.random() * (30 - 1 + 1) + 1)
          if (index !== i) { arr.push(list.list[index]) }
        }

        return {
          state: list.list[i],
          data,
          arr
        }
      }
    },
    {
      url: 'http://yuedu/whole', // 请求地址
      request: 'get', // 请求类型
      manage: options => {
        return {
          data: list.list
        }
      }
    }
  ]
}
