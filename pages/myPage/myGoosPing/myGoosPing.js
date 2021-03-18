// pages/myPage/myGoosPing/myGoosPing.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    stardata: [1, 2, 3, 4, 5],//星星集合
    flag:[0],//开关
    tempFilePaths: [],//上传图片集合
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

  // 评价五星
  changeColor: function (e) {
    let index = e.currentTarget.dataset.index;
    let num = e.currentTarget.dataset.no;
    let a = 'flag[' + index + ']';
    let that = this;
    if (num == 1) {
      that.setData({
        [a]: 1
      });
    } else if (num == 2) {
      that.setData({
        [a]: 2
      });
    } else if (num == 3) {
      that.setData({
        [a]: 3
      });
    } else if (num == 4) {
      that.setData({
        [a]: 4
      });
    } else if (num == 5) {
      that.setData({
        [a]: 5
      });
    }
  },
  
  // 上传图片
  uploadImg(){
    let that = this;
    // if(that.data.tempFilePaths.length>=6){
    //    wx.showToast({
    //      icon:'success',
    //      title: '最多上传六张图片',
    //    })
    //   return;
    // } 
    wx.chooseImage({
      count: 6, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: res => {
        wx.showToast({
          title: '正在上传...',
          icon: 'loading',
          mask: true,
          duration: 1000
        })
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        let tempFilePaths = that.data.tempFilePaths.concat(res.tempFilePaths)

        that.setData({
          tempFilePaths: tempFilePaths.splice(0,6)
        })
        /**
         * 上传完成后把文件上传到服务器
         */
        var count = 0;
        for (var i = 0;i < tempFilePaths.length; i++) {
          //上传文件
          /*  wx.uploadFile({
              url: HOST + '地址路径',
              filePath: tempFilePaths[i],
              name: 'uploadfile_ant',
              header: {
                "Content-Type": "multipart/form-data"
              },
              success: function (res) {
                count++;
                //如果是最后一张,则隐藏等待中  
                if (count == tempFilePaths.length) {
                  wx.hideToast();
                }
              },
              fail: function (res) {
                wx.hideToast();
                wx.showModal({
                  title: '错误提示',
                  content: '上传图片失败',
                  showCancel: false,
                  success: function (res) { }
                })
              }
            });*/
        }
      }
    })
  },

  // 长按删除图片
  deleteImage: function (e) {
    var that = this;
    var tempFilePaths = that.data.tempFilePaths;
    var index = e.currentTarget.dataset.index;//获取当前长按图片下标
    wx.showModal({
      title: '提示',
      content: '确定要删除此图片吗？',
      success: function (res) {
        if (res.confirm) {
          console.log('点击确定了');
          tempFilePaths.splice(index, 1);
        } else if (res.cancel) {
          console.log('点击取消了');
          return false;
        }
        that.setData({
          tempFilePaths
        });
      }
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