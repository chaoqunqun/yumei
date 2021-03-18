// pages/myPage/myGuanzhu/myGuanzhu.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phoneHeight:'',
    navIndex:0,
    dongFlag:true,
    showFlag:false,
    list: [{
      id: 174,
      userid: 10,
      title: "日本岚山、和服一日游",
      banner: "https://hbimg.huabanimg.com/ee5bf07b84fead3d57b445d2e7fa8eb6afe827c617e9c-ha1fZH_fw658",
      points: 6,
      like: "62",
      ifzi:'true',
      islike: 0
    },
    {
      id: 173,
      userid: 9,
      title: "日本阿寒湖一日游",
      banner: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2583035764,1571388243&fm=26&gp=0.jpg",
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
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
           phoneHeight: res.windowHeight - 92 + "px"
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  // 点击nav
  clickNav(e){
    if(e.currentTarget.dataset.index==0){
      this.setData({
        dongFlag:true,
        showFlag:false
      })
    }else{
      this.setData({
        dongFlag:false,
        showFlag:true
      })
    }
    this.setData({
      navIndex:e.currentTarget.dataset.index
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})