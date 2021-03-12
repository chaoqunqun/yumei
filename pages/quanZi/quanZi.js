// pages/quanZi/quanZi.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navIndex:0,
    num:[
      {num:1,
       bomList:[
         {nbm:1},
         {nbm:2},
         {nbm:3},
         {nbm:4}
       ]
      },
      {num:2,
      bomList:[
        {nbm:1},
        {nbm:2},
        {nbm:3},
        {nbm:4}
      ]
      },
      {num:3,
        bomList:[
          {nbm:1},
          {nbm:2},
          {nbm:3},
          {nbm:4}
        ]},
      {num:4,
        bomList:[
          {nbm:1},
          {nbm:2},
          {nbm:3},
          {nbm:4}
        ]}
    ],
    nam:0
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
    this.setData({
      navIndex:e.currentTarget.dataset.index
    })
  },

  // 点击showBomNum
  clickBom(e){
    let bindex = e.currentTarget.dataset.bindex;
    let index = e.currentTarget.dataset.index;
    let onum = this.data.num[bindex].bomList[index].nbm;
    this.data.num[bindex].bomList[index].nbm = (onum + 1);
    this.setData({
      num:this.data.num
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