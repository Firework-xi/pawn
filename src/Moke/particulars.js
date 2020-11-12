import list from '../data'
export default {

  MOckurl: [
    {
      url: 'http://yuedu/details', // 请求地址
      request: 'get', // 请求类型
      manage: options => {
        const i = options.url.substr(options.url.lastIndexOf('/') + 1, 2)
        let data = []
        for (let q = 0; data.length <= 3; q++) { // 同类作品
          var v = parseInt(Math.random() * (29 - 1 + 1) + 1)
          console.log(v)
          if (v !== i) {
            let iq1 = data.findIndex(v => {
              return v.bookId === v
            })
            console.log(iq1)
            if (iq1 === -1) {
              data.push(list.list[v])
            }
          }
        }
        let arr = []
        for (let s = 0; arr.length <= 3; s++) { // 全部作品推荐
          const index = parseInt(Math.random() * (29 - 1 + 1) + 1)
          console.log(index)
          if (index !== i) {
            let Index = arr.findIndex(v => {
              return v.bookId === index
            })
            console.log(Index)
            if (Index === -1) {
              arr.push(list.list[index])
            } else {
              --s
            }
          }
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
