import Vue from 'vue'
import Vuex from 'vuex'
import { getLocalStorage } from '@/api/localStorage';
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      admin:{
        collect: [10001,10002,10003,10004,10005,10006,10007,10008,10009],
        userInfo: {
          avatar: "https://img1.baidu.com/it/u=2464037572,2414287471&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500", 
          username: "爱吃温州鱼丸的小淘气",
          userID: "yhg093994405",
          address: getLocalStorage("address")[0],
          vipLevel: "88VIP",
          vipDescription: "开通88VIP兑100元消费券，可叠加平台满减！",
          bonus: {
            redPacket: "3",
            coupons: "22",
            taoJin: "0",
            timeLeft: "17:30", // 剩余时间
            description: "3元百亿补贴惊喜红包"
          }
        }
      }
    },
    products: [
      {
        id: 10001,
        shopId: 10001,
        html: 'https://item.taobao.com/item.htm?ali_refid=a3_420860_1007%3A11461680%3AU%3A11461680_0_16414850627%3Af5f5c738f1b35de4a51295abdaae6a8d&ali_trackid=174_f5f5c738f1b35de4a51295abdaae6a8d&id=635360546827&item_type=ad&mm_sceneid=3_0_11461680_0&spm=tbpc.pc_sem_alimama%2Fa.201876.d3',
        image: [
          'https://gw.alicdn.com/imgextra/i1/49892023/O1CN011o8LZP1Qoa6nWP8JD_!!49892023.jpg',
          'https://gw.alicdn.com/imgextra/i2/49892023/O1CN01U60px81Qoa1gjN2nU_!!49892023.jpg',
          'https://gw.alicdn.com/imgextra/i1/49892023/O1CN01lYn0AM1QoZt7q8RRx_!!49892023.jpg',
          'https://gw.alicdn.com/imgextra/i4/49892023/O1CN01U4lpAI1QoaFbs8Vn4_!!49892023.jpg',
          'https://gw.alicdn.com/imgextra/i4/49892023/O1CN01RfVeDS1Qoa1kY5lpa_!!49892023.jpg'
        ],
        title: '联想迷你主机品牌原装办公家用台式电脑i5i7四核全套高配小型整机',
        price: 281.0,
        productDate: {
          currentPrice: 444,
          originalPrice: 449,
          saleEndDate: "3月28日 24点结束",
          deliveryInfo: "广东广州 至 杭州 钱塘",
          packages: [
            {
              image: 'https://gw.alicdn.com/imgextra/i1/49892023/O1CN011o8LZP1Qoa6nWP8JD_!!49892023.jpg', // 替换成真实图片路径
              description: 'i3 4130+8G+128G 简单快速办公推荐',
              number: 1001,
              price: 444,
            },
            {
              image: 'https://gw.alicdn.com/imgextra/i1/49892023/O1CN011o8LZP1Qoa6nWP8JD_!!49892023.jpg',
              description: 'i5 4570+8G+256G 固态 i5 快速办公推荐',
              number: 0,
              price: 411,
            },
            {
              image: 'https://gw.alicdn.com/imgextra/i1/49892023/O1CN011o8LZP1Qoa6nWP8JD_!!49892023.jpg',
              description: 'i7 4770+16G+512G 固态 实惠 i7 办公家用',
              number: 50,
              price: 399,
            },
          ],
        },
        tabs: [
              { name: "用户评价", content: {
                                  allCount: 100,
                                  imgCount: 10,
                                  chaseCount: 2,
                                  filters: [
                                    "运行很顺畅",
                                    "回复很快",
                                    "外形外观漂亮",
                                    "质量超好",
                                    "性价比高",
                                    "发货物流快",
                                    "反应灵敏",
                                    "性能好",
                                  ],
                                  reviews: [
                                    {
                                      id: 1,
                                      name: "d**浩",
                                      date: "2025年3月3日",
                                      content: "朋友介绍过来的 老板发货快 成色还原度高 值得购买 还会再来的",
                                      isVip: false,
                                    },
                                    {
                                      id: 2,
                                      name: "t**5",
                                      date: "2024年12月23日",
                                      content: "主机收到了，插电即可用，性能也不错，很方便。",
                                      isVip: true,
                                    },
                                    {
                                      id: 3,
                                      name: "t**5",
                                      date: "2024年12月23日",
                                      content: "主机收到了，插电即可用，性能也不错，很方便。",
                                      isVip: true,
                                    },
                                    {
                                      id: 4,
                                      name: "t**5",
                                      date: "2024年12月23日",
                                      content: "主机收到了，插电即可用，性能也不错，很方便。",
                                      isVip: true,
                                    },
                                    {
                                      id: 5,
                                      name: "t**5",
                                      date: "2024年12月23日",
                                      content: "主机收到了，插电即可用，性能也不错，很方便。",
                                      isVip: true,
                                    },
                                  ],
                                } 
              },
              { name: "参数信息", content: {
                specsData: [
                  { label1: "售后服务", value1: "店铺三包", label2: "能效备案号", value2: "无" },
                  { label1: "显卡类型", value1: "集成显卡", label2: "适用品牌", value2: "Intel/英特尔" },
                  { label1: "保修期", value1: "1年", label2: "内存容量", value2: "4GB" },
                  { label1: "操作系统", value1: "Windows 7", label2: "光驱类型", value2: "DVD-ROM" },
                  { label1: "套餐类型", value1: "单主机+配件...", label2: "能效等级", value2: "无" },
                  { label1: "同城服务", value1: "同城物流送货上门", label2: "成色", value2: "全新" },
                  { label1: "内存类型", value1: "DDR3", label2: "硬盘容量", value2: "1T" },
                  { label1: "硬盘接口", value1: "SATA3", label2: "硬盘转速", value2: "7200转" },
                  { label1: "显卡接口", value1: "PCI-E", label2: "颜色分类", value2: "套餐信息介绍" },
                  { label1: "品牌", value1: "Lenovo/联想", label2: "联想系列", value2: "M83" }
              ]
              } },
              { name: "图文详情", content: [
                'https://img.alicdn.com/imgextra/i2/49892023/O1CN01oKQUXj1Qoa3F4eBQf_!!49892023.jpg',
                'https://img.alicdn.com/imgextra/i1/49892023/O1CN0122e98Q1QoaFeXZwxr_!!49892023.jpg',
                'https://img.alicdn.com/imgextra/i2/49892023/O1CN016655ER1QoaFchzKnW_!!49892023.jpg',
                'https://img.alicdn.com/imgextra/i3/49892023/O1CN01UOWbsK1QoaHH7eY3J_!!49892023.jpg',
                'https://img.alicdn.com/imgextra/i4/49892023/O1CN01gzJjoB1Qoa0o5Kgij_!!49892023.jpg',
                'https://img.alicdn.com/imgextra/i1/49892023/O1CN01y1vHBo1QoaHFNo9AI_!!49892023.jpg',
              ] },
              { name: "本店推荐", content: "这里是本店推荐内容" },
              { name: "看了又看", content: "这里是看了又看的内容" },
        ],
      },
      {
        id: 10002,
        shopId: 10002,
        html: 'https://detail.tmall.com/item.htm?ali_refid=a3_420860_1007%3A2265600050%3AU%3A2265600050_0_18328243011%3Aa566901819e8b73c9eac7b05a93526f4&ali_trackid=174_a566901819e8b73c9eac7b05a93526f4&id=694524024511&item_type=ad&mm_sceneid=3_0_2265600050_0&spm=tbpc.pc_sem_alimama%2Fa.201876.d2&skuId=5783045554872',
        image: [
          'https://gw.alicdn.com/imgextra/i3/2213002421729/O1CN01l6VWkJ1Odvq2N3z9n_!!2213002421729.jpg',
          'https://img.alicdn.com/imgextra/i1/2213002421729/O1CN01tiJ3851Odvpdung8T_!!2213002421729.jpg_.webp',
          'https://img.alicdn.com/imgextra/i3/2213002421729/O1CN01BC0dDs1OdvpByzXtW_!!2213002421729.jpg_.webp',
          'https://img.alicdn.com/imgextra/i3/2213002421729/O1CN01v22Gqp1OdvpxOu0nT_!!2213002421729.jpg_.webp'
        ],
        title: '【政府补贴15%】哈趣NEW K2云台投影仪 家用超高清真1080P新款',
        price: 1399.0,
        productDate: {
          currentPrice: 1399,
          originalPrice: 2469,
          saleEndDate: "3月28日 24点结束",
          deliveryInfo: "安徽芜湖 至 杭州 钱塘",
          packages: [
            {
              image: 'https://gw.alicdn.com/imgextra/i3/2213002421729/O1CN01l6VWkJ1Odvq2N3z9n_!!2213002421729.jpg', // 替换成真实图片路径
              description: '哈趣New K2',
              number: 10,
              price: 1399,
            }
          ],
        },
        tabs: [
          { name: "用户评价", content: {
                              allCount: '6000+',
                              imgCount: '5000+',
                              chaseCount: '600+',
                              filters: [
                                "晚上效果好",
                                "包装很完美",
                                "巨好用",
                                "很清晰",
                                "性价比高",
                                "好有效果",
                                "白天效果差",
                              ],
                              reviews: [
                                {
                                  id: 1,
                                  name: "莎**鸿",
                                  date: "2025年2月19日",
                                  content: "包装完好快递给力，视频清晰，追剧可以的哈，看着效果不错，画画清晰，白天看也不累眼睛，连接电脑使用也没有问题物流非常快，收到货时包装非常精美.投影仪外观简约大方很好看重量也适中方便拿取.晚上不开灯的效果很好，每一步操作都有语音画面提示非常智能方便。",
                                  isVip: false,
                                },
                                {
                                  id: 2,
                                  name: "欢**3",
                                  date: "2025年3月11日",
                                  content: "打开包装那一刻太惊艳了，买了三个投影仪，就这个包装的最精细，拆开以后迫不及待试了一下，好用到爆，不用装幕布完全没压力，随便看，特别清晰，变焦也灵敏，强烈推荐！！！",
                                  isVip: true,
                                },
                                {
                                  id: 3,
                                  name: "欢**3",
                                  date: "2025年3月11日",
                                  content: "打开包装那一刻太惊艳了，买了三个投影仪，就这个包装的最精细，拆开以后迫不及待试了一下，好用到爆，不用装幕布完全没压力，随便看，特别清晰，变焦也灵敏，强烈推荐！！！",
                                  isVip: true,
                                },
                                {
                                  id: 4,
                                  name: "欢**3",
                                  date: "2025年3月11日",
                                  content: "打开包装那一刻太惊艳了，买了三个投影仪，就这个包装的最精细，拆开以后迫不及待试了一下，好用到爆，不用装幕布完全没压力，随便看，特别清晰，变焦也灵敏，强烈推荐！！！",
                                  isVip: true,
                                },
                                {
                                  id: 5,
                                  name: "欢**3",
                                  date: "2025年3月11日",
                                  content: "打开包装那一刻太惊艳了，买了三个投影仪，就这个包装的最精细，拆开以后迫不及待试了一下，好用到爆，不用装幕布完全没压力，随便看，特别清晰，变焦也灵敏，强烈推荐！！！",
                                  isVip: true,
                                },
                              ],
                            } 
          },
          { name: "参数信息", content: {
            specsData: [
              { label1: "片源内容", value1: "爱奇艺 芒果TV", label2: "上市时间", value2: "2024-10-14" },
              { label1: "是否支持3D播放", value1: "否", label2: "光学分辨率", value2: "1920X1080dpi" },
              { label1: "内存容量 (ROM)", value1: "32GB", label2: "机体尺寸 (mm)", value2: "196x130x207mm" },
              { label1: "支持画面比例", value1: "16:9", label2: "是否有幕布自适应功能", value2: "是" },
              { label1: "运行内存 (RAM)", value1: "2GB", label2: "适用场景", value2: "家庭影院 游戏娱乐" },
              { label1: "动态对比度", value1: "2001:1-3000:1", label2: "套餐", value2: "官方标配" },
              { label1: "智能系统", value1: "Android (安卓)", label2: "是否支持自动梯形矫正", value2: "是" },
              { label1: "光源功率", value1: "120W", label2: "投射比", value2: "1.26:1" },
              { label1: "正常模式运行噪音", value1: "26dB", label2: "支持投放画面范围", value2: "60-120英寸" },
              { label1: "互动方式", value1: "语音遥控互动", label2: "配件类型", value2: "其他/other" },
              { label1: "光源类型", value1: "LED光源", label2: "灯泡寿命", value2: "30000小时" },
              { label1: "是否有智能避障功能", value1: "是", label2: "颜色分类", value2: "哈趣New K2" },
              { label1: "品牌", value1: "哈趣 (办公用品)", label2: "", value2: "" }
          ]
          } },
          { name: "图文详情", content: [
            'https://img.alicdn.com/imgextra/i4/2213002421729/O1CN011oUNF61Odvq9GDsDZ_!!2213002421729.jpg',
            'https://img.alicdn.com/imgextra/i2/2213002421729/O1CN013Usq151Odvq7Du6fD_!!2213002421729.jpg',
            'https://img.alicdn.com/imgextra/i2/2213002421729/O1CN01fSGAqU1Odvq01Dvcs_!!2213002421729.jpg',
            'https://img.alicdn.com/imgextra/i4/2213002421729/O1CN01Ua84uH1Odvq6nZviC_!!2213002421729.jpg',
            'https://img.alicdn.com/imgextra/i2/2213002421729/O1CN015H4GYT1OdvpZbMOlY_!!2213002421729.jpg',
            'https://img.alicdn.com/imgextra/i4/2213002421729/O1CN01JaFdlI1Odvq546kiG_!!2213002421729.jpg',
          ] },
          { name: "本店推荐", content: "这里是本店推荐内容" },
          { name: "看了又看", content: "这里是看了又看的内容" },
        ],
      },
      {
        id: 10003,
        shopId: 10001,
        html: 'https://item.taobao.com/item.htm?id=605321434835&pisk=g3KKjcvUUfchWrtdIpugqjPyDCDMvVveBBJbq_f3PCd9FB1hZ61WCG6hhWNBF_jJwQdRtaGFx3dOYhY3q6cF2LOc2jcmmmveLiSSijqWrwvPYTU5d9NufP6l29ODn9CWLgSSwRqSompeG7YEfu65CABlE_6BNwa151WLNg1CP5a1h1s5Va175O6cEz65duMT5TWYAT_CN161LTzCVgOWCABP19s5VveZw1wCZuLjmyL_4J7uVutOpNgMd1gMwh6pbspBjuZSz9QdGp1ZgnIIxN9Py3yz269BuQWXOWGNZEvMANI-o75JrptHvgyzWdQJxU7JYxNVMe992MAKMz5X-ds1TeGuR6tenGL5WviBBMCpgHOKDfOfkHYPyHkbgsLBB3IHvY4FLFOFXO-o_k1J5Uth8gPI__YDIH_Ocg-HmnK3RSfAEyMtBzzPROP9qxQfzudj4OCmp0UzzNkNBsDtCzzPROXOivH4zz7w2&spm=a21xtw.29178619.product_shelf.6.3177c1daL6r8RA',
        image: [
          'https://img.alicdn.com/imgextra/i1/49892023/O1CN01hdndnP1Qoa6my3pSc_!!49892023.jpg_.webp',
          'https://img.alicdn.com/imgextra/i1/49892023/O1CN014ZROYu1Qoa3adaoL7_!!49892023.jpg_.webp',
          'https://img.alicdn.com/imgextra/i3/49892023/O1CN01FxSAJg1Qoa3WIplkF_!!49892023.jpg_.webp',
          'https://img.alicdn.com/imgextra/i4/49892023/O1CN01GQtufl1QoaFUiZm8F_!!49892023.jpg_.webp'
        ],
        title: '联想迷你小主机Lenovo微型携带商用办公电脑M710mini家用台式机i5',
        price: 525.0,
        productDate: {
          currentPrice: 525,
          originalPrice: 569,
          saleEndDate: "3月28日 24点结束",
          deliveryInfo: "广东广州 至 杭州 钱塘",
          packages: [
            {
              image: 'https://img.alicdn.com/imgextra/i4/49892023/O1CN01GQtufl1QoaFUiZm8F_!!49892023.jpg_.webp', 
              description: 'A1: i3 4130T+8G+256G/固态 4代主机',
              number: 100,
              price: 500,
            },
            {
              image: 'https://img.alicdn.com/imgextra/i4/49892023/O1CN01GQtufl1QoaFUiZm8F_!!49892023.jpg_.webp', 
              description: 'A2: i5 4590T+8G+256G/固态 4代主机',
              number: 100,
              price: 600,
            },
            {
              image: 'https://img.alicdn.com/imgextra/i4/49892023/O1CN01GQtufl1QoaFUiZm8F_!!49892023.jpg_.webp', 
              description: 'A3: E3 1265LV3+16G+256G/固态 4代主机',
              number: 100,
              price: 700,
            },
            {
              image: 'https://img.alicdn.com/imgextra/i4/49892023/O1CN01GQtufl1QoaFUiZm8F_!!49892023.jpg_.webp', 
              description: 'A4: i3 6130T+8G+256G/固态 6代主机',
              number: 100,
              price: 800,
            }
          ],
        },
        tabs: [
          { name: "用户评价", content: {
                              allCount: '25',
                              imgCount: '2',
                              chaseCount: '0',
                              filters: [
                              ],
                              reviews: [
                                {
                                  id: 1,
                                  name: "莎**鸿",
                                  date: "2025年2月19日",
                                  content: "包装完好快递给力，视频清晰，追剧可以的哈，看着效果不错，画画清晰，白天看也不累眼睛，连接电脑使用也没有问题物流非常快，收到货时包装非常精美.投影仪外观简约大方很好看重量也适中方便拿取.晚上不开灯的效果很好，每一步操作都有语音画面提示非常智能方便。",
                                  isVip: false,
                                },
                                {
                                  id: 2,
                                  name: "欢**3",
                                  date: "2025年3月11日",
                                  content: "打开包装那一刻太惊艳了，买了三个投影仪，就这个包装的最精细，拆开以后迫不及待试了一下，好用到爆，不用装幕布完全没压力，随便看，特别清晰，变焦也灵敏，强烈推荐！！！",
                                  isVip: true,
                                },
                                {
                                  id: 3,
                                  name: "欢**3",
                                  date: "2025年3月11日",
                                  content: "打开包装那一刻太惊艳了，买了三个投影仪，就这个包装的最精细，拆开以后迫不及待试了一下，好用到爆，不用装幕布完全没压力，随便看，特别清晰，变焦也灵敏，强烈推荐！！！",
                                  isVip: true,
                                },
                                {
                                  id: 4,
                                  name: "欢**3",
                                  date: "2025年3月11日",
                                  content: "打开包装那一刻太惊艳了，买了三个投影仪，就这个包装的最精细，拆开以后迫不及待试了一下，好用到爆，不用装幕布完全没压力，随便看，特别清晰，变焦也灵敏，强烈推荐！！！",
                                  isVip: true,
                                },
                                {
                                  id: 5,
                                  name: "欢**3",
                                  date: "2025年3月11日",
                                  content: "打开包装那一刻太惊艳了，买了三个投影仪，就这个包装的最精细，拆开以后迫不及待试了一下，好用到爆，不用装幕布完全没压力，随便看，特别清晰，变焦也灵敏，强烈推荐！！！",
                                  isVip: true,
                                },
                              ],
                            } 
          },
          { name: "参数信息", content: {
            specsData: [
                { label1: "售后服务", value1: "店铺三包", label2: "能效备案号", value2: "无" },
                { label1: "显卡类型", value1: "集成显卡", label2: "适用品牌", value2: "Intel/英特尔" },
                { label1: "台机Intel型号", value1: "其他/other", label2: "保修期", value2: "1年" },
                { label1: "内存类型", value1: "其他/other", label2: "操作系统", value2: "其他/other" },
                { label1: "联想系列", value1: "M710", label2: "光驱类型", value2: "无光驱" },
                { label1: "套餐类型", value1: "单主机加主机+21.5寸显示器", label2: "能效等级", value2: "无" },
                { label1: "同城服务", value1: "同城物流送货上门", label2: "成色", value2: "全新" },
                { label1: "内存类型", value1: "其他/other", label2: "硬盘容量", value2: "500GB" },
                { label1: "硬盘接口", value1: "SATA3", label2: "硬盘转速", value2: "7200转" },
                { label1: "显卡接口", value1: "PCI-E", label2: "颜色分类", value2: "A1： i3 4130T+8G+256G/固态，A2： i5 4590" },
                { label1: "品牌", value1: "Lenovo/联想", label2: "显存容量", value2: "共享系统内存" },
                { label1: "声卡类型", value1: "2.1", label2: "毛重", value2: "13kg" },
                { label1: "屏幕尺寸", value1: "19.5英寸", label2: "CPU类型", value2: "(Mac only)英特尔 酷睿 i5 四核处理器" }
            ]


          } },
          { name: "图文详情", content: [
            'https://img.alicdn.com/imgextra/i2/49892023/O1CN01yMsgbX1Qoa3HVBYDR_!!49892023.jpg',
            'https://img.alicdn.com/imgextra/i2/49892023/O1CN01CO7Olk1QoaFa30Zkq_!!49892023.jpg',
            'https://img.alicdn.com/imgextra/i2/49892023/O1CN016655ER1QoaFchzKnW_!!49892023.jpg',
            'https://img.alicdn.com/imgextra/i1/49892023/O1CN01SzS7bl1QoaFCcL86C_!!49892023.jpg',
            'https://img.alicdn.com/imgextra/i4/49892023/O1CN018HQ3WV1QoaFG25dLU_!!49892023.jpg',
          ] },
          { name: "本店推荐", content: "这里是本店推荐内容" },
          { name: "看了又看", content: "这里是看了又看的内容" },
        ],
      },
      {
        id: 10004,
        shopId: 10002,
        html: 'https://detail.tmall.com/item.htm?abbucket=2&id=860642280211&pisk=gSMivXDI9fPsgN8L9vw6wO1RGgALfRwblqBYk-U2TyzIkhNTXrk0-0P9fq3xtr0E-PW9fCN4oVaKktntnX6mVmM9f-K_Ccwb3ULJeUnsf-ixkqqsIwPUcD540SRLLcAkub8JeLnH_lwxYUH9NeGLXuB435P4YWzQclWZu5PEYyZb0Ny47Hx3RoX40OrqYwru2tyV3ooFTuZY0Zy4gJyURoy40qy2xJzQ0vQP3zDqdv8FMsUpckPsKlVgzDA53tqNe5zzCyW2lvZMPzoa-tWYW1GxSDm9STiLCDuu2VpFI4mK2ANInUvg1vood5Dfm6iLNP2U5fLGdl0tmYVEQnI87viqFW2kGaUIhDl8N87N_u2gS7kZJi-zQSr4QPG9S9ZiWmDuTA-AwkGqRx2TUL_akXnonoDXlp0ov0H_OxYkLgJ5T_ocQtZeDv5fG5rQxz33INiYk0hluHxhNCNaAlLJxHffM5rQxztHx__0_kZt_&rn=3209c436a67498b9cacdd8ce9793f823&spm=a1z10.3-b-s.w4011-24170622497.65.c7a53cf7MZhHwm&skuId=5842529322745',
        image: [
          'https://img.alicdn.com/imgextra/i1/2213002421729/O1CN01iC9fqW1OdvoWkSSMk_!!4611686018427381217-0-item_pic.jpg_q50.jpg_.webp',
          'https://img.alicdn.com/imgextra/i1/2213002421729/O1CN01iC9fqW1OdvoWkSSMk_!!4611686018427381217-0-item_pic.jpg_q50.jpg_.webp',
          'https://img.alicdn.com/imgextra/i1/2213002421729/O1CN01iC9fqW1OdvoWkSSMk_!!4611686018427381217-0-item_pic.jpg_q50.jpg_.webp',
        ],
        title: '【适配哈趣K系列】哈趣投影定制无线麦克风话筒新款家庭唱歌K歌',
        price: 194.0,
        productDate: {
          currentPrice: 194,
          originalPrice: 199,
          saleEndDate: "3月28日 24点结束",
          deliveryInfo: "浙江杭州 至 杭州 钱塘",
          packages: [
            {
              image: 'https://img.alicdn.com/imgextra/i1/2213002421729/O1CN01iC9fqW1OdvoWkSSMk_!!4611686018427381217-0-item_pic.jpg_q50.jpg_.webp', // 替换成真实图片路径
              description: '哈趣麦克风',
              number: 10110,
              price: 194,
            }
          ],
        },
        tabs: [
          { name: "用户评价", content: {
                              allCount: '25',
                              imgCount: '2',
                              chaseCount: '0',
                              filters: [
                              ],
                              reviews: [
                                {
                                  id: 1,
                                  name: "莎**鸿",
                                  date: "2025年2月19日",
                                  content: "包装完好快递给力，视频清晰，追剧可以的哈，看着效果不错，画画清晰，白天看也不累眼睛，连接电脑使用也没有问题物流非常快，收到货时包装非常精美.投影仪外观简约大方很好看重量也适中方便拿取.晚上不开灯的效果很好，每一步操作都有语音画面提示非常智能方便。",
                                  isVip: false,
                                },
                                {
                                  id: 2,
                                  name: "欢**3",
                                  date: "2025年3月11日",
                                  content: "打开包装那一刻太惊艳了，买了三个投影仪，就这个包装的最精细，拆开以后迫不及待试了一下，好用到爆，不用装幕布完全没压力，随便看，特别清晰，变焦也灵敏，强烈推荐！！！",
                                  isVip: true,
                                },
                                {
                                  id: 3,
                                  name: "欢**3",
                                  date: "2025年3月11日",
                                  content: "打开包装那一刻太惊艳了，买了三个投影仪，就这个包装的最精细，拆开以后迫不及待试了一下，好用到爆，不用装幕布完全没压力，随便看，特别清晰，变焦也灵敏，强烈推荐！！！",
                                  isVip: true,
                                },
                                {
                                  id: 4,
                                  name: "欢**3",
                                  date: "2025年3月11日",
                                  content: "打开包装那一刻太惊艳了，买了三个投影仪，就这个包装的最精细，拆开以后迫不及待试了一下，好用到爆，不用装幕布完全没压力，随便看，特别清晰，变焦也灵敏，强烈推荐！！！",
                                  isVip: true,
                                },
                                {
                                  id: 5,
                                  name: "欢**3",
                                  date: "2025年3月11日",
                                  content: "打开包装那一刻太惊艳了，买了三个投影仪，就这个包装的最精细，拆开以后迫不及待试了一下，好用到爆，不用装幕布完全没压力，随便看，特别清晰，变焦也灵敏，强烈推荐！！！",
                                  isVip: true,
                                },
                              ],
                            } 
          },
          { name: "参数信息", content: {
            specsData:  [
              { label1: "品牌", value1: "哈趣 (办公用品)", label2: "型号", value2: "哈趣定制麦克风" },
              { label1: "有无线", value1: "无", label2: "麦克风类型", value2: "家庭专用麦克风" },
              { label1: "声道", value1: "1", label2: "使用方式", value2: "手持" },
              { label1: "生产企业", value1: "哈趣", label2: "适用对象", value2: "其他/other" },
              { label1: "供电方式", value1: "充电式", label2: "适用场景", value2: "K歌" },
              { label1: "颜色分类", value1: "哈趣麦克风", label2: "", value2: "" }
          ]
          } },
          { name: "图文详情", content: [
            'https://img.alicdn.com/imgextra/i1/2213002421729/O1CN01ls1zGP1OdvqB8EBjp_!!2213002421729.jpg',
            'https://img.alicdn.com/imgextra/i1/2213002421729/O1CN01y18hc61Odvq8zSbz1_!!2213002421729.jpg',
            'https://img.alicdn.com/imgextra/i2/2213002421729/O1CN01wy1Izl1OdvqBWeTiZ_!!2213002421729.jpg',
            'https://img.alicdn.com/imgextra/i3/2213002421729/O1CN01T93fYN1OdvobphD4U_!!2213002421729.jpg',
            'https://img.alicdn.com/imgextra/i2/2213002421729/O1CN01chEEuB1Odvq8zSsbv_!!2213002421729.jpg',
          ] },
          { name: "本店推荐", content: "这里是本店推荐内容" },
          { name: "看了又看", content: "这里是看了又看的内容" },
        ],
      },
      {
        id: 10005,
        shopId: 10003,
        html: 'https://detail.tmall.com/item.htm?id=783593949262&pisk=gpAxn4Yt30mcw1OArEkus28zgkuuDYY4mn8QsGj0C3KJRercCGD2XOKM4OOciEx8uQKLsSmq3FNOs1inxXcHuZ5N1DjfMYiz0NQ31fj1c_1VSkGd37GHuESaklgHFXqOD3205Rs6f_65JN11lSsbN4QOJG11cOZ7Fws5116fC7_5oNbbGZ6syu_V7-afc-_SNNQh5116fugR7g_111GaJcI7lGV9dfdLIzGtg5F9wZBAX5j86TOzttjB9gNsbL7YYMTf25N1mlFYeULmDW8lgItd-nc7MHLXdh9BVbFAUKTJ69RZIDC1igXBCT3jGUCADOAlePwAMdt26tJY7285G3JFYtMr4adDtOIFeuiXrUIfpdKm45sDpUtRKQqut_TBe_IywBAK54EhvN2jy4eaQt_r-5ILsZIpJp_RxqhTQRWrzaIny4eaQt_PyM0xDRyNU45..&pvid=a30e488b-8350-4ba3-8cf4-b0a8954fd82c&scm=1007.40986.420852.0&skuId=5352845473904&spm=a21bo.jianhua%2Fa.201876.d1.73b22a89dhsA5c&utparam=%7B%22aplus_abtest%22%3A%226549eda15df037730d0b36fbcecca740%22%7D&xxc=home_recommend',
        image: [
          'https://gw.alicdn.com/imgextra/i3/3934195997/O1CN01B5LtFu1uAg9eyfr8t_!!0-item_pic.jpg',
          'https://gw.alicdn.com/imgextra/i3/3934195997/O1CN01gVQhEO1uAg9eyShVR_!!3934195997.jpg',
          'https://gw.alicdn.com/imgextra/i2/3934195997/O1CN016e7S5e1uAg9eECJLT_!!3934195997.jpg'
        ],
        title: '美式机能冲锋衣男春秋季高级感山系户外运动防水登山服外套潮牌',
        price: 88.0,
        productDate: {
          currentPrice: 88,
          originalPrice: 108,
          saleEndDate: "3月28日 24点结束",
          deliveryInfo: "浙江杭州 至 杭州 钱塘",
          packages: [
            {
              image: 'https://gw.alicdn.com/imgextra/i2/3934195997/O1CN016e7S5e1uAg9eECJLT_!!3934195997.jpg', 
              description: '果绿色【升级版】 X',
              number: 100,
              price: 88,
            },
            {
              image: 'https://gw.alicdn.com/imgextra/i2/3934195997/O1CN016e7S5e1uAg9eECJLT_!!3934195997.jpg', 
              description: '果绿色【升级版】 XL',
              number: 100,
              price: 89,
            },
            {
              image: 'https://gw.alicdn.com/imgextra/i2/3934195997/O1CN016e7S5e1uAg9eECJLT_!!3934195997.jpg', 
              description: '果绿色【升级版】 XXL',
              number: 100,
              price: 90,
            },
            {
              image: 'https://gw.alicdn.com/imgextra/i2/3934195997/O1CN016e7S5e1uAg9eECJLT_!!3934195997.jpg', 
              description: '果绿色【升级版】 XXXL',
              number: 100,
              price: 91,
            }
          ],
        },
        tabs: [
          { name: "用户评价", content: {
                              allCount: '25',
                              imgCount: '2',
                              chaseCount: '0',
                              filters: [
                              ],
                              reviews: [
                                {
                                  id: 1,
                                  name: "莎**鸿",
                                  date: "2025年2月19日",
                                  content: "包装完好快递给力，视频清晰，追剧可以的哈，看着效果不错，画画清晰，白天看也不累眼睛，连接电脑使用也没有问题物流非常快，收到货时包装非常精美.投影仪外观简约大方很好看重量也适中方便拿取.晚上不开灯的效果很好，每一步操作都有语音画面提示非常智能方便。",
                                  isVip: false,
                                },
                                {
                                  id: 2,
                                  name: "欢**3",
                                  date: "2025年3月11日",
                                  content: "打开包装那一刻太惊艳了，买了三个投影仪，就这个包装的最精细，拆开以后迫不及待试了一下，好用到爆，不用装幕布完全没压力，随便看，特别清晰，变焦也灵敏，强烈推荐！！！",
                                  isVip: true,
                                },
                                {
                                  id: 3,
                                  name: "欢**3",
                                  date: "2025年3月11日",
                                  content: "打开包装那一刻太惊艳了，买了三个投影仪，就这个包装的最精细，拆开以后迫不及待试了一下，好用到爆，不用装幕布完全没压力，随便看，特别清晰，变焦也灵敏，强烈推荐！！！",
                                  isVip: true,
                                },
                                {
                                  id: 4,
                                  name: "欢**3",
                                  date: "2025年3月11日",
                                  content: "打开包装那一刻太惊艳了，买了三个投影仪，就这个包装的最精细，拆开以后迫不及待试了一下，好用到爆，不用装幕布完全没压力，随便看，特别清晰，变焦也灵敏，强烈推荐！！！",
                                  isVip: true,
                                },
                                {
                                  id: 5,
                                  name: "欢**3",
                                  date: "2025年3月11日",
                                  content: "打开包装那一刻太惊艳了，买了三个投影仪，就这个包装的最精细，拆开以后迫不及待试了一下，好用到爆，不用装幕布完全没压力，随便看，特别清晰，变焦也灵敏，强烈推荐！！！",
                                  isVip: true,
                                },
                              ],
                            } 
          },
          { name: "参数信息", content: {
            specsData:[
              { label1: "品牌", value1: "欧木龙", label2: "版型", value2: "宽松型" },
              { label1: "工艺处理", value1: "免烫处理", label2: "下摆设计", value2: "本布下摆" },
              { label1: "基础风格", value1: "青春流行", label2: "销售渠道类型", value2: "纯电商(只在线上销售)" },
              { label1: "袖型", value1: "常规", label2: "适用对象", value2: "青少年" },
              { label1: "适用场景", value1: "其他休闲", label2: "材质成分", value2: "聚酯纤维100%" },
              { label1: "货号", value1: "zcmy2024041309QING", label2: "适用季节", value2: "秋季" },
              { label1: "面料功能", value1: "防风", label2: "厚薄", value2: "常规" },
              { label1: "上市年份季节", value1: "2025年春季", label2: "袖长", value2: "长袖" },
              { label1: "细分风格", value1: "潮", label2: "领型", value2: "连帽" },
              { label1: "服装口袋样式", value1: "侧缝插袋", label2: "衣长", value2: "常规款" },
              { label1: "搭扣方式", value1: "外穿", label2: "衣门襟", value2: "拉链" }
          ]
          } },
          { name: "图文详情", content: [
            'https://img.alicdn.com/imgextra/i2/3934195997/O1CN01Dm7kTL1uAg9b2Uoc3_!!3934195997.jpg',
            'https://img.alicdn.com/imgextra/i3/3934195997/O1CN01BvYlhJ1uAg9eEDvMO_!!3934195997.jpg',
            'https://img.alicdn.com/imgextra/i1/3934195997/O1CN01Qh5Apq1uAg9duGA1l_!!3934195997.jpg',
            'https://img.alicdn.com/imgextra/i1/3934195997/O1CN01Qh5Apq1uAg9duGA1l_!!3934195997.jpg',
            'https://img.alicdn.com/imgextra/i1/3934195997/O1CN01Qh5Apq1uAg9duGA1l_!!3934195997.jpg',
          ] },
          { name: "本店推荐", content: "这里是本店推荐内容" },
          { name: "看了又看", content: "这里是看了又看的内容" },
        ],
      },
      {
        id: 10006,
        shopId: 10003,
        html: 'https://detail.tmall.com/item.htm?id=783593949262&pisk=gpAxn4Yt30mcw1OArEkus28zgkuuDYY4mn8QsGj0C3KJRercCGD2XOKM4OOciEx8uQKLsSmq3FNOs1inxXcHuZ5N1DjfMYiz0NQ31fj1c_1VSkGd37GHuESaklgHFXqOD3205Rs6f_65JN11lSsbN4QOJG11cOZ7Fws5116fC7_5oNbbGZ6syu_V7-afc-_SNNQh5116fugR7g_111GaJcI7lGV9dfdLIzGtg5F9wZBAX5j86TOzttjB9gNsbL7YYMTf25N1mlFYeULmDW8lgItd-nc7MHLXdh9BVbFAUKTJ69RZIDC1igXBCT3jGUCADOAlePwAMdt26tJY7285G3JFYtMr4adDtOIFeuiXrUIfpdKm45sDpUtRKQqut_TBe_IywBAK54EhvN2jy4eaQt_r-5ILsZIpJp_RxqhTQRWrzaIny4eaQt_PyM0xDRyNU45..&pvid=a30e488b-8350-4ba3-8cf4-b0a8954fd82c&scm=1007.40986.420852.0&skuId=5352845473904&spm=a21bo.jianhua%2Fa.201876.d1.73b22a89dhsA5c&utparam=%7B%22aplus_abtest%22%3A%226549eda15df037730d0b36fbcecca740%22%7D&xxc=home_recommend',
        image: [
          'https://gw.alicdn.com/imgextra/i3/3934195997/O1CN01B5LtFu1uAg9eyfr8t_!!0-item_pic.jpg',
          'https://gw.alicdn.com/imgextra/i3/3934195997/O1CN01gVQhEO1uAg9eyShVR_!!3934195997.jpg',
          'https://gw.alicdn.com/imgextra/i2/3934195997/O1CN016e7S5e1uAg9eECJLT_!!3934195997.jpg'
        ],
        title: '美式机能冲锋衣男春秋季高级感山系户外运动防水登山服外套潮牌',
        price: 88.0,
        productDate: {
          currentPrice: 88,
          originalPrice: 108,
          saleEndDate: "3月28日 24点结束",
          deliveryInfo: "浙江杭州 至 杭州 钱塘",
          packages: [
            {
              image: 'https://gw.alicdn.com/imgextra/i2/3934195997/O1CN016e7S5e1uAg9eECJLT_!!3934195997.jpg', 
              description: '果绿色【升级版】 X',
              number: 100,
              price: 88,
            },
            {
              image: 'https://gw.alicdn.com/imgextra/i2/3934195997/O1CN016e7S5e1uAg9eECJLT_!!3934195997.jpg', 
              description: '果绿色【升级版】 XL',
              number: 100,
              price: 89,
            },
            {
              image: 'https://gw.alicdn.com/imgextra/i2/3934195997/O1CN016e7S5e1uAg9eECJLT_!!3934195997.jpg', 
              description: '果绿色【升级版】 XXL',
              number: 100,
              price: 90,
            },
            {
              image: 'https://gw.alicdn.com/imgextra/i2/3934195997/O1CN016e7S5e1uAg9eECJLT_!!3934195997.jpg', 
              description: '果绿色【升级版】 XXXL',
              number: 100,
              price: 91,
            }
          ],
        },
        tabs: [
          { name: "用户评价", content: {
                              allCount: '25',
                              imgCount: '2',
                              chaseCount: '0',
                              filters: [
                              ],
                              reviews: [
                                {
                                  id: 1,
                                  name: "莎**鸿",
                                  date: "2025年2月19日",
                                  content: "包装完好快递给力，视频清晰，追剧可以的哈，看着效果不错，画画清晰，白天看也不累眼睛，连接电脑使用也没有问题物流非常快，收到货时包装非常精美.投影仪外观简约大方很好看重量也适中方便拿取.晚上不开灯的效果很好，每一步操作都有语音画面提示非常智能方便。",
                                  isVip: false,
                                },
                                {
                                  id: 2,
                                  name: "欢**3",
                                  date: "2025年3月11日",
                                  content: "打开包装那一刻太惊艳了，买了三个投影仪，就这个包装的最精细，拆开以后迫不及待试了一下，好用到爆，不用装幕布完全没压力，随便看，特别清晰，变焦也灵敏，强烈推荐！！！",
                                  isVip: true,
                                },
                                {
                                  id: 3,
                                  name: "欢**3",
                                  date: "2025年3月11日",
                                  content: "打开包装那一刻太惊艳了，买了三个投影仪，就这个包装的最精细，拆开以后迫不及待试了一下，好用到爆，不用装幕布完全没压力，随便看，特别清晰，变焦也灵敏，强烈推荐！！！",
                                  isVip: true,
                                },
                                {
                                  id: 4,
                                  name: "欢**3",
                                  date: "2025年3月11日",
                                  content: "打开包装那一刻太惊艳了，买了三个投影仪，就这个包装的最精细，拆开以后迫不及待试了一下，好用到爆，不用装幕布完全没压力，随便看，特别清晰，变焦也灵敏，强烈推荐！！！",
                                  isVip: true,
                                },
                                {
                                  id: 5,
                                  name: "欢**3",
                                  date: "2025年3月11日",
                                  content: "打开包装那一刻太惊艳了，买了三个投影仪，就这个包装的最精细，拆开以后迫不及待试了一下，好用到爆，不用装幕布完全没压力，随便看，特别清晰，变焦也灵敏，强烈推荐！！！",
                                  isVip: true,
                                },
                              ],
                            } 
          },
          { name: "参数信息", content: {
            specsData:[
              { label1: "品牌", value1: "欧木龙", label2: "版型", value2: "宽松型" },
              { label1: "工艺处理", value1: "免烫处理", label2: "下摆设计", value2: "本布下摆" },
              { label1: "基础风格", value1: "青春流行", label2: "销售渠道类型", value2: "纯电商(只在线上销售)" },
              { label1: "袖型", value1: "常规", label2: "适用对象", value2: "青少年" },
              { label1: "适用场景", value1: "其他休闲", label2: "材质成分", value2: "聚酯纤维100%" },
              { label1: "货号", value1: "zcmy2024041309QING", label2: "适用季节", value2: "秋季" },
              { label1: "面料功能", value1: "防风", label2: "厚薄", value2: "常规" },
              { label1: "上市年份季节", value1: "2025年春季", label2: "袖长", value2: "长袖" },
              { label1: "细分风格", value1: "潮", label2: "领型", value2: "连帽" },
              { label1: "服装口袋样式", value1: "侧缝插袋", label2: "衣长", value2: "常规款" },
              { label1: "搭扣方式", value1: "外穿", label2: "衣门襟", value2: "拉链" }
          ]
          } },
          { name: "图文详情", content: [
            'https://img.alicdn.com/imgextra/i2/3934195997/O1CN01Dm7kTL1uAg9b2Uoc3_!!3934195997.jpg',
            'https://img.alicdn.com/imgextra/i3/3934195997/O1CN01BvYlhJ1uAg9eEDvMO_!!3934195997.jpg',
            'https://img.alicdn.com/imgextra/i1/3934195997/O1CN01Qh5Apq1uAg9duGA1l_!!3934195997.jpg',
            'https://img.alicdn.com/imgextra/i1/3934195997/O1CN01Qh5Apq1uAg9duGA1l_!!3934195997.jpg',
            'https://img.alicdn.com/imgextra/i1/3934195997/O1CN01Qh5Apq1uAg9duGA1l_!!3934195997.jpg',
          ] },
          { name: "本店推荐", content: "这里是本店推荐内容" },
          { name: "看了又看", content: "这里是看了又看的内容" },
        ],
      },
      {
        id: 10007,
        shopId: 10003,
        html: 'https://detail.tmall.com/item.htm?id=783593949262&pisk=gpAxn4Yt30mcw1OArEkus28zgkuuDYY4mn8QsGj0C3KJRercCGD2XOKM4OOciEx8uQKLsSmq3FNOs1inxXcHuZ5N1DjfMYiz0NQ31fj1c_1VSkGd37GHuESaklgHFXqOD3205Rs6f_65JN11lSsbN4QOJG11cOZ7Fws5116fC7_5oNbbGZ6syu_V7-afc-_SNNQh5116fugR7g_111GaJcI7lGV9dfdLIzGtg5F9wZBAX5j86TOzttjB9gNsbL7YYMTf25N1mlFYeULmDW8lgItd-nc7MHLXdh9BVbFAUKTJ69RZIDC1igXBCT3jGUCADOAlePwAMdt26tJY7285G3JFYtMr4adDtOIFeuiXrUIfpdKm45sDpUtRKQqut_TBe_IywBAK54EhvN2jy4eaQt_r-5ILsZIpJp_RxqhTQRWrzaIny4eaQt_PyM0xDRyNU45..&pvid=a30e488b-8350-4ba3-8cf4-b0a8954fd82c&scm=1007.40986.420852.0&skuId=5352845473904&spm=a21bo.jianhua%2Fa.201876.d1.73b22a89dhsA5c&utparam=%7B%22aplus_abtest%22%3A%226549eda15df037730d0b36fbcecca740%22%7D&xxc=home_recommend',
        image: [
          'https://gw.alicdn.com/imgextra/i3/3934195997/O1CN01B5LtFu1uAg9eyfr8t_!!0-item_pic.jpg',
          'https://gw.alicdn.com/imgextra/i3/3934195997/O1CN01gVQhEO1uAg9eyShVR_!!3934195997.jpg',
          'https://gw.alicdn.com/imgextra/i2/3934195997/O1CN016e7S5e1uAg9eECJLT_!!3934195997.jpg'
        ],
        title: '美式机能冲锋衣男春秋季高级感山系户外运动防水登山服外套潮牌',
        price: 88.0,
        productDate: {
          currentPrice: 88,
          originalPrice: 108,
          saleEndDate: "3月28日 24点结束",
          deliveryInfo: "浙江杭州 至 杭州 钱塘",
          packages: [
            {
              image: 'https://gw.alicdn.com/imgextra/i2/3934195997/O1CN016e7S5e1uAg9eECJLT_!!3934195997.jpg', 
              description: '果绿色【升级版】 X',
              number: 100,
              price: 88,
            },
            {
              image: 'https://gw.alicdn.com/imgextra/i2/3934195997/O1CN016e7S5e1uAg9eECJLT_!!3934195997.jpg', 
              description: '果绿色【升级版】 XL',
              number: 100,
              price: 89,
            },
            {
              image: 'https://gw.alicdn.com/imgextra/i2/3934195997/O1CN016e7S5e1uAg9eECJLT_!!3934195997.jpg', 
              description: '果绿色【升级版】 XXL',
              number: 100,
              price: 90,
            },
            {
              image: 'https://gw.alicdn.com/imgextra/i2/3934195997/O1CN016e7S5e1uAg9eECJLT_!!3934195997.jpg', 
              description: '果绿色【升级版】 XXXL',
              number: 100,
              price: 91,
            }
          ],
        },
        tabs: [
          { name: "用户评价", content: {
                              allCount: '25',
                              imgCount: '2',
                              chaseCount: '0',
                              filters: [
                              ],
                              reviews: [
                                {
                                  id: 1,
                                  name: "莎**鸿",
                                  date: "2025年2月19日",
                                  content: "包装完好快递给力，视频清晰，追剧可以的哈，看着效果不错，画画清晰，白天看也不累眼睛，连接电脑使用也没有问题物流非常快，收到货时包装非常精美.投影仪外观简约大方很好看重量也适中方便拿取.晚上不开灯的效果很好，每一步操作都有语音画面提示非常智能方便。",
                                  isVip: false,
                                },
                                {
                                  id: 2,
                                  name: "欢**3",
                                  date: "2025年3月11日",
                                  content: "打开包装那一刻太惊艳了，买了三个投影仪，就这个包装的最精细，拆开以后迫不及待试了一下，好用到爆，不用装幕布完全没压力，随便看，特别清晰，变焦也灵敏，强烈推荐！！！",
                                  isVip: true,
                                },
                                {
                                  id: 3,
                                  name: "欢**3",
                                  date: "2025年3月11日",
                                  content: "打开包装那一刻太惊艳了，买了三个投影仪，就这个包装的最精细，拆开以后迫不及待试了一下，好用到爆，不用装幕布完全没压力，随便看，特别清晰，变焦也灵敏，强烈推荐！！！",
                                  isVip: true,
                                },
                                {
                                  id: 4,
                                  name: "欢**3",
                                  date: "2025年3月11日",
                                  content: "打开包装那一刻太惊艳了，买了三个投影仪，就这个包装的最精细，拆开以后迫不及待试了一下，好用到爆，不用装幕布完全没压力，随便看，特别清晰，变焦也灵敏，强烈推荐！！！",
                                  isVip: true,
                                },
                                {
                                  id: 5,
                                  name: "欢**3",
                                  date: "2025年3月11日",
                                  content: "打开包装那一刻太惊艳了，买了三个投影仪，就这个包装的最精细，拆开以后迫不及待试了一下，好用到爆，不用装幕布完全没压力，随便看，特别清晰，变焦也灵敏，强烈推荐！！！",
                                  isVip: true,
                                },
                              ],
                            } 
          },
          { name: "参数信息", content: {
            specsData:[
              { label1: "品牌", value1: "欧木龙", label2: "版型", value2: "宽松型" },
              { label1: "工艺处理", value1: "免烫处理", label2: "下摆设计", value2: "本布下摆" },
              { label1: "基础风格", value1: "青春流行", label2: "销售渠道类型", value2: "纯电商(只在线上销售)" },
              { label1: "袖型", value1: "常规", label2: "适用对象", value2: "青少年" },
              { label1: "适用场景", value1: "其他休闲", label2: "材质成分", value2: "聚酯纤维100%" },
              { label1: "货号", value1: "zcmy2024041309QING", label2: "适用季节", value2: "秋季" },
              { label1: "面料功能", value1: "防风", label2: "厚薄", value2: "常规" },
              { label1: "上市年份季节", value1: "2025年春季", label2: "袖长", value2: "长袖" },
              { label1: "细分风格", value1: "潮", label2: "领型", value2: "连帽" },
              { label1: "服装口袋样式", value1: "侧缝插袋", label2: "衣长", value2: "常规款" },
              { label1: "搭扣方式", value1: "外穿", label2: "衣门襟", value2: "拉链" }
          ]
          } },
          { name: "图文详情", content: [
            'https://img.alicdn.com/imgextra/i2/3934195997/O1CN01Dm7kTL1uAg9b2Uoc3_!!3934195997.jpg',
            'https://img.alicdn.com/imgextra/i3/3934195997/O1CN01BvYlhJ1uAg9eEDvMO_!!3934195997.jpg',
            'https://img.alicdn.com/imgextra/i1/3934195997/O1CN01Qh5Apq1uAg9duGA1l_!!3934195997.jpg',
            'https://img.alicdn.com/imgextra/i1/3934195997/O1CN01Qh5Apq1uAg9duGA1l_!!3934195997.jpg',
            'https://img.alicdn.com/imgextra/i1/3934195997/O1CN01Qh5Apq1uAg9duGA1l_!!3934195997.jpg',
          ] },
          { name: "本店推荐", content: "这里是本店推荐内容" },
          { name: "看了又看", content: "这里是看了又看的内容" },
        ],
      },
      {
        id: 10008,
        shopId: 10003,
        html: 'https://detail.tmall.com/item.htm?id=783593949262&pisk=gpAxn4Yt30mcw1OArEkus28zgkuuDYY4mn8QsGj0C3KJRercCGD2XOKM4OOciEx8uQKLsSmq3FNOs1inxXcHuZ5N1DjfMYiz0NQ31fj1c_1VSkGd37GHuESaklgHFXqOD3205Rs6f_65JN11lSsbN4QOJG11cOZ7Fws5116fC7_5oNbbGZ6syu_V7-afc-_SNNQh5116fugR7g_111GaJcI7lGV9dfdLIzGtg5F9wZBAX5j86TOzttjB9gNsbL7YYMTf25N1mlFYeULmDW8lgItd-nc7MHLXdh9BVbFAUKTJ69RZIDC1igXBCT3jGUCADOAlePwAMdt26tJY7285G3JFYtMr4adDtOIFeuiXrUIfpdKm45sDpUtRKQqut_TBe_IywBAK54EhvN2jy4eaQt_r-5ILsZIpJp_RxqhTQRWrzaIny4eaQt_PyM0xDRyNU45..&pvid=a30e488b-8350-4ba3-8cf4-b0a8954fd82c&scm=1007.40986.420852.0&skuId=5352845473904&spm=a21bo.jianhua%2Fa.201876.d1.73b22a89dhsA5c&utparam=%7B%22aplus_abtest%22%3A%226549eda15df037730d0b36fbcecca740%22%7D&xxc=home_recommend',
        image: [
          'https://gw.alicdn.com/imgextra/i3/3934195997/O1CN01B5LtFu1uAg9eyfr8t_!!0-item_pic.jpg',
          'https://gw.alicdn.com/imgextra/i3/3934195997/O1CN01gVQhEO1uAg9eyShVR_!!3934195997.jpg',
          'https://gw.alicdn.com/imgextra/i2/3934195997/O1CN016e7S5e1uAg9eECJLT_!!3934195997.jpg'
        ],
        title: '美式机能冲锋衣男春秋季高级感山系户外运动防水登山服外套潮牌',
        price: 88.0,
        productDate: {
          currentPrice: 88,
          originalPrice: 108,
          saleEndDate: "3月28日 24点结束",
          deliveryInfo: "浙江杭州 至 杭州 钱塘",
          packages: [
            {
              image: 'https://gw.alicdn.com/imgextra/i2/3934195997/O1CN016e7S5e1uAg9eECJLT_!!3934195997.jpg', 
              description: '果绿色【升级版】 X',
              number: 100,
              price: 88,
            },
            {
              image: 'https://gw.alicdn.com/imgextra/i2/3934195997/O1CN016e7S5e1uAg9eECJLT_!!3934195997.jpg', 
              description: '果绿色【升级版】 XL',
              number: 100,
              price: 89,
            },
            {
              image: 'https://gw.alicdn.com/imgextra/i2/3934195997/O1CN016e7S5e1uAg9eECJLT_!!3934195997.jpg', 
              description: '果绿色【升级版】 XXL',
              number: 100,
              price: 90,
            },
            {
              image: 'https://gw.alicdn.com/imgextra/i2/3934195997/O1CN016e7S5e1uAg9eECJLT_!!3934195997.jpg', 
              description: '果绿色【升级版】 XXXL',
              number: 100,
              price: 91,
            }
          ],
        },
        tabs: [
          { name: "用户评价", content: {
                              allCount: '25',
                              imgCount: '2',
                              chaseCount: '0',
                              filters: [
                              ],
                              reviews: [
                                {
                                  id: 1,
                                  name: "莎**鸿",
                                  date: "2025年2月19日",
                                  content: "包装完好快递给力，视频清晰，追剧可以的哈，看着效果不错，画画清晰，白天看也不累眼睛，连接电脑使用也没有问题物流非常快，收到货时包装非常精美.投影仪外观简约大方很好看重量也适中方便拿取.晚上不开灯的效果很好，每一步操作都有语音画面提示非常智能方便。",
                                  isVip: false,
                                },
                                {
                                  id: 2,
                                  name: "欢**3",
                                  date: "2025年3月11日",
                                  content: "打开包装那一刻太惊艳了，买了三个投影仪，就这个包装的最精细，拆开以后迫不及待试了一下，好用到爆，不用装幕布完全没压力，随便看，特别清晰，变焦也灵敏，强烈推荐！！！",
                                  isVip: true,
                                },
                                {
                                  id: 3,
                                  name: "欢**3",
                                  date: "2025年3月11日",
                                  content: "打开包装那一刻太惊艳了，买了三个投影仪，就这个包装的最精细，拆开以后迫不及待试了一下，好用到爆，不用装幕布完全没压力，随便看，特别清晰，变焦也灵敏，强烈推荐！！！",
                                  isVip: true,
                                },
                                {
                                  id: 4,
                                  name: "欢**3",
                                  date: "2025年3月11日",
                                  content: "打开包装那一刻太惊艳了，买了三个投影仪，就这个包装的最精细，拆开以后迫不及待试了一下，好用到爆，不用装幕布完全没压力，随便看，特别清晰，变焦也灵敏，强烈推荐！！！",
                                  isVip: true,
                                },
                                {
                                  id: 5,
                                  name: "欢**3",
                                  date: "2025年3月11日",
                                  content: "打开包装那一刻太惊艳了，买了三个投影仪，就这个包装的最精细，拆开以后迫不及待试了一下，好用到爆，不用装幕布完全没压力，随便看，特别清晰，变焦也灵敏，强烈推荐！！！",
                                  isVip: true,
                                },
                              ],
                            } 
          },
          { name: "参数信息", content: {
            specsData:[
              { label1: "品牌", value1: "欧木龙", label2: "版型", value2: "宽松型" },
              { label1: "工艺处理", value1: "免烫处理", label2: "下摆设计", value2: "本布下摆" },
              { label1: "基础风格", value1: "青春流行", label2: "销售渠道类型", value2: "纯电商(只在线上销售)" },
              { label1: "袖型", value1: "常规", label2: "适用对象", value2: "青少年" },
              { label1: "适用场景", value1: "其他休闲", label2: "材质成分", value2: "聚酯纤维100%" },
              { label1: "货号", value1: "zcmy2024041309QING", label2: "适用季节", value2: "秋季" },
              { label1: "面料功能", value1: "防风", label2: "厚薄", value2: "常规" },
              { label1: "上市年份季节", value1: "2025年春季", label2: "袖长", value2: "长袖" },
              { label1: "细分风格", value1: "潮", label2: "领型", value2: "连帽" },
              { label1: "服装口袋样式", value1: "侧缝插袋", label2: "衣长", value2: "常规款" },
              { label1: "搭扣方式", value1: "外穿", label2: "衣门襟", value2: "拉链" }
          ]
          } },
          { name: "图文详情", content: [
            'https://img.alicdn.com/imgextra/i2/3934195997/O1CN01Dm7kTL1uAg9b2Uoc3_!!3934195997.jpg',
            'https://img.alicdn.com/imgextra/i3/3934195997/O1CN01BvYlhJ1uAg9eEDvMO_!!3934195997.jpg',
            'https://img.alicdn.com/imgextra/i1/3934195997/O1CN01Qh5Apq1uAg9duGA1l_!!3934195997.jpg',
            'https://img.alicdn.com/imgextra/i1/3934195997/O1CN01Qh5Apq1uAg9duGA1l_!!3934195997.jpg',
            'https://img.alicdn.com/imgextra/i1/3934195997/O1CN01Qh5Apq1uAg9duGA1l_!!3934195997.jpg',
          ] },
          { name: "本店推荐", content: "这里是本店推荐内容" },
          { name: "看了又看", content: "这里是看了又看的内容" },
        ],
      },
      {
        id: 10009,
        shopId: 10003,
        html: 'https://detail.tmall.com/item.htm?id=783593949262&pisk=gpAxn4Yt30mcw1OArEkus28zgkuuDYY4mn8QsGj0C3KJRercCGD2XOKM4OOciEx8uQKLsSmq3FNOs1inxXcHuZ5N1DjfMYiz0NQ31fj1c_1VSkGd37GHuESaklgHFXqOD3205Rs6f_65JN11lSsbN4QOJG11cOZ7Fws5116fC7_5oNbbGZ6syu_V7-afc-_SNNQh5116fugR7g_111GaJcI7lGV9dfdLIzGtg5F9wZBAX5j86TOzttjB9gNsbL7YYMTf25N1mlFYeULmDW8lgItd-nc7MHLXdh9BVbFAUKTJ69RZIDC1igXBCT3jGUCADOAlePwAMdt26tJY7285G3JFYtMr4adDtOIFeuiXrUIfpdKm45sDpUtRKQqut_TBe_IywBAK54EhvN2jy4eaQt_r-5ILsZIpJp_RxqhTQRWrzaIny4eaQt_PyM0xDRyNU45..&pvid=a30e488b-8350-4ba3-8cf4-b0a8954fd82c&scm=1007.40986.420852.0&skuId=5352845473904&spm=a21bo.jianhua%2Fa.201876.d1.73b22a89dhsA5c&utparam=%7B%22aplus_abtest%22%3A%226549eda15df037730d0b36fbcecca740%22%7D&xxc=home_recommend',
        image: [
          'https://gw.alicdn.com/imgextra/i3/3934195997/O1CN01B5LtFu1uAg9eyfr8t_!!0-item_pic.jpg',
          'https://gw.alicdn.com/imgextra/i3/3934195997/O1CN01gVQhEO1uAg9eyShVR_!!3934195997.jpg',
          'https://gw.alicdn.com/imgextra/i2/3934195997/O1CN016e7S5e1uAg9eECJLT_!!3934195997.jpg'
        ],
        title: '美式机能冲锋衣男春秋季高级感山系户外运动防水登山服外套潮牌',
        price: 88.0,
        productDate: {
          currentPrice: 88,
          originalPrice: 108,
          saleEndDate: "3月28日 24点结束",
          deliveryInfo: "浙江杭州 至 杭州 钱塘",
          packages: [
            {
              image: 'https://gw.alicdn.com/imgextra/i2/3934195997/O1CN016e7S5e1uAg9eECJLT_!!3934195997.jpg', 
              description: '果绿色【升级版】 X',
              number: 100,
              price: 88,
            },
            {
              image: 'https://gw.alicdn.com/imgextra/i2/3934195997/O1CN016e7S5e1uAg9eECJLT_!!3934195997.jpg', 
              description: '果绿色【升级版】 XL',
              number: 100,
              price: 89,
            },
            {
              image: 'https://gw.alicdn.com/imgextra/i2/3934195997/O1CN016e7S5e1uAg9eECJLT_!!3934195997.jpg', 
              description: '果绿色【升级版】 XXL',
              number: 100,
              price: 90,
            },
            {
              image: 'https://gw.alicdn.com/imgextra/i2/3934195997/O1CN016e7S5e1uAg9eECJLT_!!3934195997.jpg', 
              description: '果绿色【升级版】 XXXL',
              number: 100,
              price: 91,
            }
          ],
        },
        tabs: [
          { name: "用户评价", content: {
                              allCount: '25',
                              imgCount: '2',
                              chaseCount: '0',
                              filters: [
                              ],
                              reviews: [
                                {
                                  id: 1,
                                  name: "莎**鸿",
                                  date: "2025年2月19日",
                                  content: "包装完好快递给力，视频清晰，追剧可以的哈，看着效果不错，画画清晰，白天看也不累眼睛，连接电脑使用也没有问题物流非常快，收到货时包装非常精美.投影仪外观简约大方很好看重量也适中方便拿取.晚上不开灯的效果很好，每一步操作都有语音画面提示非常智能方便。",
                                  isVip: false,
                                },
                                {
                                  id: 2,
                                  name: "欢**3",
                                  date: "2025年3月11日",
                                  content: "打开包装那一刻太惊艳了，买了三个投影仪，就这个包装的最精细，拆开以后迫不及待试了一下，好用到爆，不用装幕布完全没压力，随便看，特别清晰，变焦也灵敏，强烈推荐！！！",
                                  isVip: true,
                                },
                                {
                                  id: 3,
                                  name: "欢**3",
                                  date: "2025年3月11日",
                                  content: "打开包装那一刻太惊艳了，买了三个投影仪，就这个包装的最精细，拆开以后迫不及待试了一下，好用到爆，不用装幕布完全没压力，随便看，特别清晰，变焦也灵敏，强烈推荐！！！",
                                  isVip: true,
                                },
                                {
                                  id: 4,
                                  name: "欢**3",
                                  date: "2025年3月11日",
                                  content: "打开包装那一刻太惊艳了，买了三个投影仪，就这个包装的最精细，拆开以后迫不及待试了一下，好用到爆，不用装幕布完全没压力，随便看，特别清晰，变焦也灵敏，强烈推荐！！！",
                                  isVip: true,
                                },
                                {
                                  id: 5,
                                  name: "欢**3",
                                  date: "2025年3月11日",
                                  content: "打开包装那一刻太惊艳了，买了三个投影仪，就这个包装的最精细，拆开以后迫不及待试了一下，好用到爆，不用装幕布完全没压力，随便看，特别清晰，变焦也灵敏，强烈推荐！！！",
                                  isVip: true,
                                },
                              ],
                            } 
          },
          { name: "参数信息", content: {
            specsData:[
              { label1: "品牌", value1: "欧木龙", label2: "版型", value2: "宽松型" },
              { label1: "工艺处理", value1: "免烫处理", label2: "下摆设计", value2: "本布下摆" },
              { label1: "基础风格", value1: "青春流行", label2: "销售渠道类型", value2: "纯电商(只在线上销售)" },
              { label1: "袖型", value1: "常规", label2: "适用对象", value2: "青少年" },
              { label1: "适用场景", value1: "其他休闲", label2: "材质成分", value2: "聚酯纤维100%" },
              { label1: "货号", value1: "zcmy2024041309QING", label2: "适用季节", value2: "秋季" },
              { label1: "面料功能", value1: "防风", label2: "厚薄", value2: "常规" },
              { label1: "上市年份季节", value1: "2025年春季", label2: "袖长", value2: "长袖" },
              { label1: "细分风格", value1: "潮", label2: "领型", value2: "连帽" },
              { label1: "服装口袋样式", value1: "侧缝插袋", label2: "衣长", value2: "常规款" },
              { label1: "搭扣方式", value1: "外穿", label2: "衣门襟", value2: "拉链" }
          ]
          } },
          { name: "图文详情", content: [
            'https://img.alicdn.com/imgextra/i2/3934195997/O1CN01Dm7kTL1uAg9b2Uoc3_!!3934195997.jpg',
            'https://img.alicdn.com/imgextra/i3/3934195997/O1CN01BvYlhJ1uAg9eEDvMO_!!3934195997.jpg',
            'https://img.alicdn.com/imgextra/i1/3934195997/O1CN01Qh5Apq1uAg9duGA1l_!!3934195997.jpg',
            'https://img.alicdn.com/imgextra/i1/3934195997/O1CN01Qh5Apq1uAg9duGA1l_!!3934195997.jpg',
            'https://img.alicdn.com/imgextra/i1/3934195997/O1CN01Qh5Apq1uAg9duGA1l_!!3934195997.jpg',
          ] },
          { name: "本店推荐", content: "这里是本店推荐内容" },
          { name: "看了又看", content: "这里是看了又看的内容" },
        ],
      },
      // 添加其他商品
    ],
    shops: [
      {
        id: 10001,
        name: '联想商城',
        mark: 4.7,
        customerService: '客服满意度100%平均14小时发货客服平均36秒回复',
        image: 'https://i02piccdn.sogoucdn.com/ddcf6fbc2d9180ec',
        products: [10001, 10002, 10003, 10004]
      },
      {
        id: 10002,
        name: '哈趣数码旗舰店',
        mark: 5.0,
        customerService: '平均20小时发货 客服平均22秒回复 物流体验优秀',
        image: 'https://i04piccdn.sogoucdn.com/fafeff2e5e1a5b4c',
        products: [10001, 10002, 10004]
      },
      {
        id: 10003,
        name: '欧木龙旗舰店',
        mark: 4.0,
        customerService: '平均12小时发货 客服平均18秒回复 物流体验优秀',
        image: 'https://img.alicdn.com/imgextra//cb/2c/TB1cy96rxWYBuNjy1zkSutGGpXa.jpg_110x110q30.jpg_.webp',
        products: [  10005, 10006, 10007, 10008, 10009]
      }
    ]
  },
  getters: {
    getProductById: (state) => (id) => {
      return state.products.find(product => product.id === id);
    },
    getShopById: (state) => (id) => {
      return state.shops.find(shops => shops.id === id);
    }
  },
  mutations: {
    setUser(state, user) {
      state.user.push(user)
    },
    removeUser(state, username) {
      state.user = state.user.filter(user => user.username !== username)
    }
  },
  actions: {
  },
  modules: {
  }
})
