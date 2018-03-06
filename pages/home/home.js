// pages/home/home.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    id:"title",
    text:"幸福小窝",
    checked:true,
    a:1,
    b:3,
    flag:"!!0",
    numArr:[1,2,3,4,5,6,7,8,9],
    eventText:"bind绑定事件不会阻止毛傲时间向上冒泡,catch时间绑定可以阻止时间向上冒泡",
    actionsheet:{

    }
  },
  actionsheetHidden:{

  },
  /**
   * 组件的方法列表
   */
  methods: {

  change(){
    this.setData({
      flag : !this.data.flag
    })
  },
  changeText(event){
    console.log(event.target.dataset.id);
    
  },
  actionsheetchange(){

  }

  },
  openModal(){
        wx.showModal({
          title: '提醒',
          content: '今天你写项目了吗?',
          cancelText:"不想写",
          cancelColor:"#ccc",
          confirmText:"马上写",
          confirmColor:"#123456",
          success(res){
            console.log(res)
            wx.showToast({
              title: '提醒成功!',
            })
          },

        })  
  },

  openaction(){
     wx.showActionSheet({
       itemList: ["充值","办卡","忽视"],
       success(res){
          console.log(res.tapIndex);
       },
       fail: function (res) {
         console.log(res.errMsg)
       }
     })
  },

  open(){
      this.setData({
          "actionsheet.actionsheetHidden":false
      }) 
  },

  actionitemchange(res){
    console.log("item");
    console.log(res);
    const txt = res.target.dataset.txt;
    this.setData({
      "actionsheet.actionsheetHidden": true
    });

    wx.showToast({
      title: txt+'成功!',
    })
  },

  actionsheetchange(){
    this.setData({
      "actionsheet.actionsheetHidden": true
    });

    wx.showToast({
      title: '取消成功!',
    })
  },




openModal(){
        wx.showModal({
          title: '提醒',
          content: '今天你写项目了吗?',
          cancelText:"不想写",
          cancelColor:"#ccc",
          confirmText:"马上写",
          confirmColor:"#123456",
          success(res){
            console.log(res)
            wx.showToast({
              title: '提醒成功!',
            })
          },

        })  
  },

  openaction(){
     wx.showActionSheet({
       itemList: ["充值","办卡","忽视"],
       success(res){
          console.log(res.tapIndex);
       },
       fail: function (res) {
         console.log(res.errMsg)
       }
     })
  },

  open(){
      this.setData({
          "actionsheet.actionsheetHidden":false
      }) 
  },

  actionitemchange(res){
    console.log("item");
    console.log(res);
    const txt = res.target.dataset.txt;
    this.setData({
      "actionsheet.actionsheetHidden": true
    });

    wx.showToast({
      title: txt+'成功!',
    })
  },

  actionsheetchange(){
    this.setData({
      "actionsheet.actionsheetHidden": true
    });

    wx.showToast({
      title: '取消成功!',
    })
  },

})
