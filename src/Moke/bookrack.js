import Mock from 'mockjs'

const list = []
var img

for (var i = 0; i < 11; i++) {
  img = Mock.mock({
    image: `@image('200x270', '#FCAFB7', '#FFF', '熙熙拉胯日技${i + 1}')`
  })
  var xx = {
    title: `熙熙拉胯日记${i + 1}`,
    img: img,
    id: i + 1
  }
  list.push(xx)
}

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

        return {
          list
        }
      }
    }
  ]
}
