// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName'), // 如需尝试获取用户信息可改为false
    list: [{
      id: 174,
      userid: 10,
      title: "日本岚山、和服一日游",
      banner: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2583035764,1571388243&fm=26&gp=0.jpg",
      points: 6,
      like: "62",
      ifzi:'true',
      islike: 0
    },
    {
      id: 173,
      userid: 9,
      title: "日本阿寒湖一日游",
      banner: "https://hbimg.huabanimg.com/ee5bf07b84fead3d57b445d2e7fa8eb6afe827c617e9c-ha1fZH_fw658",
      points: 7,
      like: "92",
      ifzi:'false',
      islike: 0
    },
    {
      id: 172,
      userid: 8,
      title: "二次璧大乱斗东京动漫游",
      banner: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3446442004,2207547936&fm=26&gp=0.jpg",
      points: 4,
      like: "41",
      ifzi:'true',
      islike: 0
    },
    {
      id: 100,
      userid: 314,
      title: "心和身体总要有一个在路上🏃",
      banner: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=305022367,1443492564&fm=26&gp=0.jpg",
      points: 5,
      like: "110",
      ifzi:'false',
      islike: 0
    }
  ]
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
  onShow(){

  },

  // 跳转搜索页
  goSearch(){
    wx.navigateTo({
      url: '../indexPage/goodSearch/goodSearch',
    })
  },

  // 跳转详情
  goDetail(){
    wx.navigateTo({
      url: '../indexPage/goodsDetail/goodsDetail',
    })
  },

  // 跳转店铺首页
  goShop(){
    wx.navigateTo({
      url: '../indexPage/shopHome/shopHome',
    })
  },

  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  onReachBottom: function () {
    // wx.showLoading({
    //   title: '正在加载~',
    // })
  },
})
