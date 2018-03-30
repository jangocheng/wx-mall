// pages/address/address.js
Page({

  /**
   * 页面的初始数据
   */
  //调用微信收货地址
  wechatAddress:function () {
      wx.chooseAddress({
        success: res =>{
          console.log(res)
          wx.request({
            url: 'https://www.easy-mock.com/mock/5a178cf2d0e40f353594d23d/mall/address',
            //拿到微信收货地址数据后请求回传数据给后台
            data:{
              userName:res.userName,
              telNumber:res.telNumber,
              provinceName:res.provinceName,
              cityName:res.cityName,
              countyName:res.countyName,
              detailInfo:res.detailInfo,
              postalCode:res.postalCode,
              nationalCode: res.nationalCode
            },
            header: {
              'content-type': 'application/json'
            },
            method:'post',
            success: function (res) {
              console.log(res.data)
              //重新请求收货地址列表
            }

          })
        }
      })
  },
  //跳转新增页面
  addAddress: function () {
      wx.navigateTo({
        url: "/pages/address/address_update/address_update"
      })
  },
  data: {
      address:[
        {
          name:"曾镜科",
          phone:"15914900003",
          address:"广东省广州市海珠区琶洲街道阅江中路382号1111",
          id:1,
          checked:true
        },
        {
          name: "五阿哥",
          phone: "15914900002",
          address: "广东省广州市海珠区琶洲街道阅江中路",
          id: 2,
          checked: false
        },
        {
          name: "小燕子",
          phone: "15914900001",
          address: "广东省广州市海珠区琶洲街道",
          id: 3,
          checked: false
        },
        {
          name: "尔康",
          phone: "15914900000",
          address: "广东省广州市海珠区",
          id: 4,
          checked: false
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