// pages/my/my.js
var ringChart = null;
const wxCharts = require('../../utils/wxcharts.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getCanvasData()
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

  // 修改头像
  changeAvatar(){
    var that=this;
    wx.chooseImage({
        count: 1, // 默认9
        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
        success: function (res) {    
            // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
            var avatarSrc = res.tempFilePaths
            wx.uploadFile({
                url: 'https://product.fishqc.com/User/Profile/upImg',//上传地址
                filePath: res.tempFilePaths[0],
                name: 'avatar',
                formData: { avatar: avatarSrc}, // HTTP 请求中其他额外的 form data
                header: {
                    // 'content-type': 'application/x-www-form-urlencoded', // 默认值
                    'skey': wx.getStorageSync('getstoreskey')
                },
                success: function (info) {
                    // console.log(info,'info')
                    // if (JSON.parse(info.statusCode)=="200"){
                    //     that.setData({
                    //         'UserInfodata.image': JSON.parse(info.data).data.image,
                    //         'Headimg': JSON.parse(info.data).data.image
                    //     });
                    // }
                }
            })
        }
    })
  },

  // canvas绘制图形
  getCanvasData(){
      ringChart = new wxCharts({
          animation: true,
          canvasId: 'ringCanvas',
          type: 'ring',
          extra: {
              ringWidth:10
          },
          title: {
              name: '89.00',
              color: '#222B45',
              fontSize: 16
          },
          series: [{
              name: '成交量1',
              data: 89.00,
              color:'#FF5901',
              stroke: false
          }, {
              name: '成交量2',
              data: 30.00,
              color:'pink',
              stroke: false
          }],
          disablePieStroke: true,
          width:124,
          height:124,
          dataLabel: false,
          legend: false,
          padding: 0
      });
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