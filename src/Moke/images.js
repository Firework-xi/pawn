export default {
  MOckurl: [
    {
      url: 'http://yuedu/slideshow', // 请求地址
      request: 'get', // 请求类型
      manage: options => {
        const data = [
          {
            id: 0,
            cate_name: '精选',
            img: [
              '//bossaudioandcomic-1252317822.image.myqcloud.com/activity/document/ee2c52bf31247c24949da77dd887a5bc.jpg',
              '//bossaudioandcomic-1252317822.image.myqcloud.com/activity/document/dc7488316053c842a9aab699d4b23fc0.jpg',
              '//bossaudioandcomic-1252317822.image.myqcloud.com/activity/document/91db4f89fbad5a6157a1053867197d5e.jpg'
            ],
            bookCover: ['//bookcover.yuewen.com/qdbimg/349573/1015444657/150', '//bookcover.yuewen.com/qdbimg/349573/1019851321/150', '//bookcover.yuewen.com/qdbimg/349573/1022332383/150']
          },
          {
            id: 1,
            cate_name: '男频',
            img: [
              '//bossaudioandcomic-1252317822.image.myqcloud.com/activity/document/f3fbf64bbd80df576f8a6e6ad91597b7.jpg',
              '//bossaudioandcomic-1252317822.image.myqcloud.com/activity/document/62159770066a1ddb0122bfdd43181774.jpg',
              '//bossaudioandcomic-1252317822.image.myqcloud.com/activity/document/91db4f89fbad5a6157a1053867197d5e.jpg'
            ]
          },
          {
            id: 2,
            cate_name: '女频',
            img: [
              '//bossaudioandcomic-1252317822.image.myqcloud.com/activity/document/823a2d0f2bde2667b9a44e796f1aba56.jpg',
              '//bossaudioandcomic-1252317822.image.myqcloud.com/activity/document/2bea52c8e4bf719e68ab4aef02345c90.jpg',
              '//bossaudioandcomic-1252317822.image.myqcloud.com/activity/document/6f9ea0b0874c363f4a4b1e00db29a731.jpg'
            ]
          },
          {
            id: 3,
            cate_name: '免费',
            img: ['//bossaudioandcomic-1252317822.image.myqcloud.com/activity/document/2bea52c8e4bf719e68ab4aef02345c90.jpg']
          },
          {
            id: 4,
            cate_name: '热读',
            img: ['//bossaudioandcomic-1252317822.image.myqcloud.com/activity/document/41b7a8c935d4b2ccbb4502e27f422f10.jpg']
          },
          {
            id: 5,
            cate_name: '新书',
            img: ['//bossaudioandcomic-1252317822.image.myqcloud.com/activity/document/cfd1f079d4766f4e221944643ab3e368.jpg']
          },
          {
            id: 6,
            cate_name: '完本',
            img: ['//bossaudioandcomic-1252317822.image.myqcloud.com/activity/document/6f9ea0b0874c363f4a4b1e00db29a731.jpg']
          }
        ]
        const i = options.url.substr(options.url.lastIndexOf('/') + 1, 1)
        // 处理函数
        return {
          state: 200,
          data: data[i]
        }
      }
    },
    // 分类名称的后台数据
    {
      url: 'http://yuedu/title',
      request: 'get',
      manage: options => {
         const data = [
           {
            name: '精选',
            id: 1, 
        },
           {
            name: '男频',
            id: 2, 
        },
           {
            name: '女频',
            id: 3, 
        },
           {
            name: '免费',
            id: 4, 
        },
           {
            name: '热读',
            id: 5, 
        },
           {
            name: '新书',
            id: 6, 
        },
           {
            name: '完本',
            id: 7, 
        },
        {
            name: '奇幻',
            id: 8, 
        },
        {
            name: '武侠',
            id: 9,   
        },
        {
            name: '仙侠',
            id: 10,   
        },
        {
            name: '都市',
            id: 11,  
        },
        {
            name: '职场',
            id: 12,   
        },
        {
            name: '历史',
            id: 13,            
        },
        {
            name: '军事',
            id: 14,   
        },
        {
            name: '游戏',
            id: 15,          
        },
        {
            name: '竞技',
            id: 16,           
        },
        {
            name: '科幻',
            id: 17,           
        },
        {
            name: '灵异',
            id: 18,           
        },
        {
            name: '同人',
            id: 19,           
        },
        {
            name: '轻小说',
            id: 20,           
          },
        {
            name: '古代言情',
            id: 21,          
        },
        {
            name: '现代言情',
            id: 22,         
        },
        {
            name: '青春校园',
            id: 23,         
        },
        {
            name: '纯爱',
            id: 24,         
        },
        {
            name: '玄幻奇幻',
            id: 25,            
        },
        {
            name: '武侠仙侠',
            id: 26,            
        },
        {
            name: '科幻',
            id: 27,           
          },
         ]
        return {
          state: 200,
         data: data
        }
      }
    },
    {
      url: 'http://yuedu/book', // 请求地址
      request: 'get', // 请求类型
      manage: options => {
        const data1 = [
          // {
          //   id: 0,
          //   bookCover: ['//bookcover.yuewen.com/qdbimg/349573/1015444657/150', '//bookcover.yuewen.com/qdbimg/349573/1019851321/150', '//bookcover.yuewen.com/qdbimg/349573/1022332383/150'],
          //   book_name: '失控',
          //   autor_name: '凯文·凯利',
          //   content: '《失控》成书于1994年，作者是《连线》杂志的创始主编凯文·凯利。这本书所记述的，是他对当时科技、社会和经济最前沿...'
          // },
          {
            id: 0,
            book_name: '失控',
            tor_name: '凯文·凯利',
            img: '//bookcover.yuewen.com/qdbimg/349573/1015444657/150',
            content: '《失控》成书于1994年，作者是《连线》杂志的创始主编凯文·凯利。这本书所记述的，是他对当时科技、社会和经济最前沿...'
          },
          {
            id: 1,
            book_name: '明朝那些事',
            tor_name: '当年明月(石悦)',
            img: '//bookcover.yuewen.com/qdbimg/349573/1019851321/150',
            content: '明朝最后一位皇帝，自来有许多传说。关于崇祯究竟是一个昏庸无能的皇帝，还是一个力图奋起的人，一直众说纷纭...'
          },
          {
            id: 2,
            book_name: '三体',
            tor_name: '刘慈欣',
            img: '//bookcover.yuewen.com/qdbimg/349573/1015982893/150',
            content: '三体三部曲 (《三体》《三体Ⅱ·黑暗森林》《三体Ⅲ·死神永生》) ，原名“地球往事三部曲”，是中国著名科幻作家刘慈欣的首...'
          }
        ]
        const data2 = [
          {
            id: 0,
            book_name: '大奉打更人',
            tor_name: '卖报小郎君',
            img: '//bookcover.yuewen.com/qdbimg/349573/1019664125/300',
            content: '这个世界，有儒；有道；有佛；有妖；有术士。警校毕业的许七安幽幽醒来，发现自己身处牢狱之中，三日后流放边陲.....他起初的目的只是自保'
          },
          {
            id: 1,
            book_name: '老鹰吃小鸡',
            tor_name: '万族之劫',
            img: '//bookcover.yuewen.com/qdbimg/349573/1018027842/300',
            content: '我是这诸天万族的劫！《全球高武》和《万族之劫》前五册实体书出版了，天猫、当当、京东都有售，喜欢的可以去看看，谢谢大家支持！'
          },
          {
            id: 2,
            book_name: '我这无处安放的魅力',
            tor_name: '妞妞蜜',
            img: '//bookcover.yuewen.com/qdbimg/349573/1020839953/300',
            content: '变成植物人的卿少被他的兽医老婆唤醒后，忠犬人设再也藏不住了。卿少端着饭碗严肃脸：乖乖吃饭！伊言：否则？卿少：剃光你养的猫身上所有的毛！'
          }
        ]

        const i = options.url.substr(options.url.lastIndexOf('/') + 1, 1)
        // 处理函数
        if (i === '0') {
          return {
            state: 200,
            data: data1
          }
        } else if (i === '1') {
          return {
            state: 200,
            data: data2
          }
        } else if (i > '1') {
          return {
            state: 200,
            data: data1
          }
        }
      }
    },
    {
      url: 'http://yuedu/boyBook', // 请求地址
      request: 'get', // 请求类型
      manage: options => {
        const data = [
          {
            id: 1,
            booksName: '玄幻',
            booksNumber: '共34496册'
          },
          {
            id: 2,
            booksName: '奇幻',
            booksNumber: '共19144册'
          },
          {
            id: 3,
            booksName: '武侠',
            booksNumber: '共18739册'
          },
          {
            id: 4,
            booksName: '仙侠',
            booksNumber: '共58431册'
          },
          {
            id: 5,
            booksName: '都市',
            booksNumber: '共95779册'
          },
          {
            id: 6,
            booksName: '职场',
            booksNumber: '共7757册'
          },
          {
            id: 7,
            booksName: '历史',
            booksNumber: '共32386册'
          },
          {
            id: 8,
            booksName: '军事',
            booksNumber: '共7723册'
          },
          {
            id: 9,
            booksName: '游戏',
            booksNumber: '共43433册'
          },
          {
            id: 10,
            booksName: '体育',
            booksNumber: '共6506册'
          },
          {
            id: 11,
            booksName: '科幻',
            booksNumber: '共51823册'
          },
          {
            id: 12,
            booksName: '灵异',
            booksNumber: '共44219册'
          },
          {
            id: 13,
            booksName: '二次元',
            booksNumber: '共20010册'
          },
          {
            id: 14,
            booksName: '短篇',
            booksNumber: '共8686册'
          }
        ]
        return {
          state: 200,
          data: data
        }
      }
    },
    {
      url: 'http://yuedu/girlBook', // 请求地址
      request: 'get', // 请求类型
      manage: options => {
        const data = [
          {
            id: 1,
            booksName: '古代言情',
            booksNumber: '共11952册'
          },
          {
            id: 2,
            booksName: '现代言情',
            booksNumber: '共12528册'
          },
          {
            id: 3,
            booksName: '玄幻言情',
            booksNumber: '共76591册'
          },
          {
            id: 4,
            booksName: '仙侠奇缘',
            booksNumber: '共20386册'
          },
          {
            id: 5,
            booksName: '耽美小说',
            booksNumber: '共30080册'
          },
          {
            id: 6,
            booksName: '浪漫青春',
            booksNumber: '共94980册'
          },
          {
            id: 7,
            booksName: '游戏竞技',
            booksNumber: '共12103册'
          },
          {
            id: 8,
            booksName: '科幻空间',
            booksNumber: '共17409册'
          },
          {
            id: 9,
            booksName: '玄幻灵异',
            booksNumber: '共15556册'
          },
          {
            id: 10,
            booksName: '同人小说',
            booksNumber: '共20303册'
          },
          {
            id: 11,
            booksName: '宫闱宅斗',
            booksNumber: '共12148册'
          },
          {
            id: 12,
            booksName: '穿越奇情',
            booksNumber: '共17471册'
          },
          {
            id: 13,
            booksName: '清穿民国',
            booksNumber: '共16666册'
          },
          {
            id: 14,
            booksName: '青春校园',
            booksNumber: '共23232册'
          }
        ]
        return {
          state: 200,
          data
        }
      }
    }
  ]
}
