// pages/schoolPage/lessionTouSu/lessionTouSu.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phoneHeight:'',
    resionList:[
      {name:'上课内容违规（色情 赌博 欺诈 违法犯罪等）',selected:false},
      {name:'内容与课程不符',selected:false},
      {name:'老师没来上课（直播显示）',selected:false},
      {name:'诱导学员私下交易',selected:false},
      {name:'宣传其他平台或网站',selected:false},
      {name:'广告过多',selected:false},
      {name:'视频卡顿 不流畅 黑屏等',selected:false},
    ],
    resionBox:[],
    select:false
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

  checkboxChange(e){
    let resionList = this.data.resionList;
    this.setData({
      resionBox:e.detail.value
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