// pages/category/category.js
Page({

  /**
   * 页面的初始数据
   */

  handleNav: function (e) {
      console.log(e.currentTarget.id)
      this.setData({
        activeIndex: e.currentTarget.id
      })
  },
  data: {
      height:0,
      activeIndex:1,
      category:[
        {
          name:'手机相机',
          id:1
        },
        {
          name: '数码',
          id: 1
        },
        {
          name: '电脑',
          id: 1
        },
        {
          name: '水果',
          id: 1
        },
        {
          name: '手机',
          id: 1
        },
        {
          name: '手机',
          id: 1
        },
        {
          name: '手机',
          id: 1
        },
        {
          name: '手机',
          id: 1
        }
      
      ]
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
    var self = this
    wx.getSystemInfo({
      success: function (res) {
        console.log(res)
        self.setData({
          height: res.windowHeight
        })
      },
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
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