// import Mock from 'mockjs'
import data from '@/data.js'
const list = []
// for (var i = 0; i < 6; i++) {
//   img = Mock.mock({
//     image: `@image('200x270', '#FCAFB7', '#FFF', '熙熙拉胯日技${i + 1}')`
//   })
//   var xx = {
//     title: `熙熙拉胯日记${i + 1}`,
//     img: img,
//     id: i + 1
//   }
//   list.push(xx)
// }

// export default {
//   data: [
//     Mock.mock('http://123/bookrack', 'get', options => {
//       return {
//         list
//       }
//     })
//   ]
// }
export default {
  MOckurl: [
    {
      url: 'http://123/bookrack', // 请求地址
      request: 'get', // 请求类型
      manage: options => {
        // 处理函数
        list.push(data.list[0])
        const numx = []
        for (var i = 0; i < 8; i++) {
          const num = parseInt(Math.random() * (29 - 1 + 1) + 1)
          if (numx.indexOf(num) !== -1) {
            i--
          } else {
            numx.push(num)
            list.push(data.list[num])
          }
        }
        return {
          list
        }
      }
    }
  ]
}
