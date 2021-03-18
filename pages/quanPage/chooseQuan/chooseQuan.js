// pages/quanPage/chooseQuan/chooseQuan.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phoneHeight:'',
    navBox:[
      '正大集团','精品课程','运营技巧','精品推荐','导入引流','精品直播'
    ],
    navIndex:0,
    scrollleft:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
           phoneHeight: res.windowHeight - 55 + "px"
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

  // 切换nav
  clickNav(e) {
    let index = e.currentTarget.dataset.index;
    this.setData({
      navIndex:index,
      scrollleft: (index - 2) * 61 + 55
    })
  },

  // 选择圈子
  radioChange(e){
    console.log(e)
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