// pages/myPage/manageAdd/manageAdd.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phoneHeight:'',//手机屏幕高度
    addFlag:false,//默认地址开关
    region:[],//省市区
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
           phoneHeight: res.windowHeight + "px"
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

  // 选择区域
  bindRegionChange: function (e) {
    this.setData({
      region: e.detail.value
    })
  },
  // 默认地址开关
  changeFlag(e){
    this.setData({
      addFlag:e.detail.value
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