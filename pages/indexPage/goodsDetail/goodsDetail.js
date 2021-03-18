// pages/indexPage/goodsDetail/goodsDetail.js
var WxParse = require('../../wxParse/wxParse.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
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
    var articl = '<div class="article-box"><h1 class="article-title">你的房间就是你的生命状态</h1> <div class="article-sub"><!----> <span>正能量励志</span> <span>2017-09-11 10:22</span></div> <div class="article-content"><div><p>1</p><p>你的房间就像你自己</p><p>哈佛商学院经过多年的研究，发现一个现象：幸福感强的成功人士，往往居家环境十分干净整洁；而不幸的人们，通常生活在凌乱肮脏中。由小家及大家，一个成功的企业，往往窗明几净；反之一个濒临破产的企业，一定有肮脏的角落。</p><p>于是摸索出这样一个结论：“你所居住的房间正是你自身的折射，你的人生其实就像你的房间。”</p><p>此语一出，举世哗然，有不置可否的，有跌足顿悟的。</p>'
    let that = this;
    WxParse.wxParse('article', 'html', articl, that, 5);
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

  // 跳转评论
  goPing(){
    wx.navigateTo({
      url: '../goodsComment/goodsComment',
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