// pages/myPage/myCommission/myCommission.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navIndex:0,
    tiFlag:true,
    yongFlag:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
        tiFlag:true,
        yongFlag:false
      })
    }else{
      this.setData({
        tiFlag:false,
        yongFlag:true
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