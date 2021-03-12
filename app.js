// app.js
const APP = getApp();
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo: null
  },
  //请求方法
  request(url,data,method) {
    return new Promise((resolve, reject) => {
      wx.request({
        url:Url + url,
        data:data,
        method:method,
        header: { 'content-Type': 'application/json'},
        success:res=>{resolve(res)},
        fail:err=>{reject(err)}
      })
    })
  }
})
