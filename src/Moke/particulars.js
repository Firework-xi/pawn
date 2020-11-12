import list from '../data'
export default {

  MOckurl: [
    {
      url: 'http://yuedu/details', // 请求地址
      request: 'get', // 请求类型
      manage: options => {
        const i = options.url.substr(options.url.lastIndexOf('/') + 1, 2) - 0
        let data = []
        for (let q = 0; data.length <= 3; q++) { // 同类作品
          var sex = parseInt(Math.random() * (29 - 1 + 1) + 1)
          if (sex !== i) {
            console.log(sex, i)
            let iq1 = data.findIndex(v => {
              return v.bookId === sex
            })
            if (iq1 === -1) {
              data.push(list.list[sex])
            }
          }
        }
        let arr = []
        for (let v = 0; arr.length <= 3; v++) {
          const index = parseInt(Math.random() * (29 - 1 + 1) + 1)
          if (index !== i) {
            const ins = arr.findIndex(v => {
              return v.bookId === index
            })
            if (ins === -1) {
              arr.push(list.list[index])
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
    },
    {
      url: 'http://yuedu/changeadd', // 请求地址
      request: 'get', // 请求类型
      manage: options => {
        let arr = []
        for (let v = 0; arr.length <= 3; v++) {
          const index = parseInt(Math.random() * (29 - 1 + 1) + 1)
          const ins = arr.findIndex(v => {
            return v.bookId === index
          })
          if (ins === -1) {
            arr.push(list.list[index])
          }
        }
        return {
          data: arr
        }
      }
    }
  ]
}
