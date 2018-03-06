// pages/photo/photo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    latitude:"",
    longitude:"",
    markers: [],
    controls:[],
    polyline:[]
  },
  takePhoto() {
    const ctx = wx.createCameraContext()
    ctx.takePhoto({
      quality: 'high',
      success: (res) => {
        this.setData({
          src: res.tempImagePath
        })
      }
    })
  },
  error(e) {
    console.log(e.detail)
  },
  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    console.log(e.markerId)
  },
  controltap(e) {
    console.log(e.controlId)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getLocation({
      type: 'wgs84',
      success:(res)=> {
        var latitude = res.latitude
        var longitude = res.longitude
        console.log(longitude)
        var speed = res.speed
        var accuracy = res.accuracy
        this.setData({
          latitude: latitude,
          longitude:longitude,
          markers:[{
            iconPath: "/images/find-on.png",
            id: 0,
            latitude: latitude,
            longitude: longitude,
            width: 50,
            height: 50
          }],
          controls: [{
            id: 1,
            iconPath: '/images/find-on.png',
            position: {
              left: 0,
              top: 20,
              width: 50,
              height: 50
            },
            clickable: true
          }],
          polyline: [{
            points: [{
              longitude: latitude,
              latitude: longitude
            }, {
                longitude: 141.37559,
                latitude: 254.32168
            }],
            color: "#FF0000DD",
            width: 2,
            dottedLine: true
          }],
        })
      }
    })
  },
  controltap(e) {
    console.log(e.controlId)
  },
  markertap(e) {
    console.log(e.markerId)
  },
  regionchange(e) {
    console.log(e.type)
  },
  canvasIdErrorCallback: function (e) {
    console.error(e.detail.errMsg)
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // 使用 wx.createContext 获取绘图上下文 context
    var context = wx.createCanvasContext('firstCanvas')

    context.setStrokeStyle("#00ff00")
    context.setLineWidth(5)
    context.rect(0, 0, 200, 200)
    context.stroke()
    context.setStrokeStyle("#ff0000")
    context.setLineWidth(2)
    context.moveTo(160, 100)
    context.arc(100, 100, 60, 0, 2 * Math.PI, true)
    context.moveTo(140, 100)
    context.arc(100, 100, 40, 0, Math.PI, false)
    context.moveTo(85, 80)
    context.arc(80, 80, 5, 0, 2 * Math.PI, true)
    context.moveTo(125, 80)
    context.arc(120, 80, 5, 0, 2 * Math.PI, true)
    context.stroke()
    context.draw()
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