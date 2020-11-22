Page({

  /**
   * 页面的初始数据
   */
  data: {
    foodShow:{
      src:"https://i.niupic.com/images/2020/04/04/7hiI.jpg",//食物图片
      name:"西红柿炒鸡蛋",//食物名称
      likes:0,//点赞数
      username:"官方账号",//作品提交者
      tag:["普遍口味","宝宝","减脂"],//食物标签
      food:["西红柿","鸡蛋","葱花"],//食物的食材
      material:["盐","油"],//食物的辅料
      // 制作步骤
      steps:[
        {
          id:0,
          msg:"鸡蛋处理，把鸡蛋磕到碗中，用筷子使劲搅打把蛋黄，蛋清搅到均匀混合为止"
        },
        {
          id:1,
          msg:"西红柿洗净，切成片状，待用"
        },
        {
          id:2,
          msg:"把锅预热，加入油，油烧热后，把准备好的鸡蛋放入翻炒，炒熟后，装盘待用"
        },
        {
          id:3,
          msg:"另起锅，加入油，油热后，加入西红柿，放入盐继续翻炒，西红柿变软，流汁时，把前面做好的鸡蛋放入，翻炒"
        },
        {
          id:4,
          msg:"继续翻炒一会，撒入葱花，起锅即可！OK！西红柿炒鸡蛋大功告成"
        }
      ]
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