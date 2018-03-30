// pages/user/user.js

Page({
  data: {
    avatar:'',
    name:""
  },
  onLoad: function (options) {
    wx.getSetting({
    success(res) {
        if (!res.authSetting['scope.record']) {
            wx.authorize({
                scope: 'scope.record',
                success() {
                    // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
                    wx.startRecord()
                }
            })
        }
    }
}),
    wx.login({
      success:res =>{
        wx.getUserInfo({
          success: res => {
            var userInfo = res.userInfo
            this.setData({
              name:userInfo.nickName,
              avatar:userInfo.avatarUrl
            })
          }
        })
      }
    })
  },

  onReady: function () {
  
  },

  onShow: function () {
  
  },
  onHide: function () {
  
  },

  onUnload: function () {
  
  },

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