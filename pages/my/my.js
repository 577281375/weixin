// pages/my1/my1.js
Page({

  /**
   * 页面的初始数据
   */
  
  data: {
    percent: 50,
    flag: true,
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    audioCtx:'',
    poster: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
    name: '此时此刻',
    author: '许巍',
    src: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
    videoContext:'',
    videoSrc: 'http://img.moviebase.cn/img/video/2017/12/55ef18b726f1ce92d2c20689d5a4e923.mp4',
    danmuList: [
      {
        text: '第 1s 出现的弹幕',
        color: '#ff0000',
        time: 1
      },
      {
        text: '第 3s 出现的弹幕',
        color: '#ff00ff',
        time: 3
      }],
    inp: '',
  },
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var timer = setInterval(() => {
      if (this.data.percent <= 100) {
        this.setData({
          percent: ++this.data.percent
        })
      } else {
        console.log(this.data.percent);
        clearInterval(timer);
        this.setData({
          flag: !this.data.flag
        })
      }
    }, 50)
    
  },

  audioPause: function () {
    this.audioCtx.pause()
  },
  audioPlay:function(){
    this.audioCtx.play()
  },
  bindInputBlur: function (e) {
    this.inp = e.detail.value
  },
  bindButtonTap: function () {
    var that = this
    wx.chooseVideo({
      sourceType: ['album', 'camera'],
      maxDuration: 60,
      camera: ['front', 'back'],
      success: function (res) {
        that.setData({
          videoSrc: res.tempFilePath
        })
      }
    })
  },
  bindSendDanmu: function () {
    console.log("!")
    this.videoContext.sendDanmu({
      text: this.inp,
      color: getRandomColor()
    })
    this.setData({
      inp:""
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.audioCtx = wx.createAudioContext('myAudio'),
    this.videoContext = wx.createVideoContext('myVideo'),
    wx.getNetworkType({
      success: function (res) {
        // 返回网络类型, 有效值：
        // wifi/2g/3g/4g/unknown(Android下不常见的网络类型)/none(无网络)
        var networkType = res.networkType;
        wx.setStorageSync({
          key: 'play',
          data: networkType,
        })
        console.log(networkType)
      }
    })
  },
  showModal() {
    wx.showModal({
      title: '警告',
      content: '当前网络环境为4G,是否播放?',
      confirmText: "继续观看",
      confirmColor: "",
      cancelText: "取消观看",
      cancelColor: "#333",
      success: (res) => {
        console.log(res);
        if (res.confirm) {
          // 继续
          this.videoCtx.play();
          wx.setStorageSync("play", true);
        } else if (res.cancel) {
          // 取消
          this.videoCtx.pause();
        }
      }
    })
  },

  videoplay() {
    console.log("play");

    if (!wx.getStorageSync("play")) {
      this.videoCtx.pause();
      // 4g 3g 提示警告  
      this.showModal();
    }
  },
  takePhoto:function(){
    wx.navigateTo({
      url: '../photo/photo'
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
function getRandomColor() {
  let rgb = []
  for (let i = 0; i < 3; ++i) {
    let color = Math.floor(Math.random() * 256).toString(16)
    color = color.length == 1 ? '0' + color : color
    rgb.push(color)
  }
  console.log(rgb)
  return '#' + rgb.join('')
}