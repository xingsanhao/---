// pages/dingzhiList/dingzhiList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    foodList:[
      {
        id:0,
        name:"西红柿炒鸡蛋",
        username:"官方账号",
        src:"https://s1.ax1x.com/2020/05/26/tPfVQs.jpg"
      },
      {
        id:1,
        name:"西红柿炒鸡蛋",
        username:"官方账号",
        src:"https://i.niupic.com/images/2020/04/04/7hiI.jpg"
      },
      {
        id:2,
        name:"西红柿炒鸡蛋",
        username:"官方账号",
        src:"https://i.niupic.com/images/2020/04/04/7hiH.jpg"
      }
    ]
  },

  // 跳转页面
  goToShow:function(e){
    const {index} = e.currentTarget.dataset;
    let {foodList} = this.data;
    for(var i = 0; i < foodList.length; i++){
      if(i == index){
        wx.navigateTo({
          url: '../dingzhiShow/dingzhiShow'
        })
      }
    }
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