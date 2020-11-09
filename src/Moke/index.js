import MockJS from 'mockjs'
// 模拟数据
MockJS.setup({
  timeout: 400
})
const arr = []
const files = require.context('.', true, /\.js$/)
files.keys().forEach(key => {
  if (key === './index.js') return
  arr.push(files(key).default)
})
arr.forEach(v => {
  v.MOckurl.forEach(v => {
    MockJS.mock(new RegExp(`^${v.url}`), v.request, v.manage)
  })
})
