// pages/dingzhihome/dingzhihome.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    foodList:[],//存放输入的食材
    food:null,//存放一次输入的食材用于写进foodList数组
    inputValue: null,//输入框的文字
    // 喜好的数组（风格，是否被选中，id）
    hobbyList:[
      {
        id:0,
        name:"川菜",
        isActive:false
      },
      {
        id:1,
        name:"浙菜",
        isActive:false
      },
      {
        id:2,
        name:"鲁菜",
        isActive:false
      },
      {
        id:3,
        name:"东北菜",
        isActive:false
      },
      {
        id:4,
        name:"都可以接受",
        isActive:true
      }
    ],
    // 其他要求的数组（对应的icon路径，标题，简要说明，id，是否被选中）
    requireList:[
      {
        id:0,
        tittle:"减脂",
        text:"为您推荐更合理健康的减脂期美味",
        icon_src:"https://s1.ax1x.com/2020/05/25/tC3wb8.png",
        isActive:false
      },
      {
        id:1,
        tittle:"宝宝",
        text:"宝宝吃的健康，妈妈才放心",
        icon_src:"https://s1.ax1x.com/2020/05/25/tC3DUg.png",
        isActive:false
      },
      {
        id:2,
        tittle:"快捷",
        text:"三分钟就可以拥有的快手美食",
        icon_src:"https://s1.ax1x.com/2020/05/25/tC3WrV.png",
        isActive:false
      },
      {
        id:3,
        tittle:"小吃",
        text:"休闲时光，做点零食犒劳自己",
        icon_src:"https://s1.ax1x.com/2020/05/25/tC34VU.png",
        isActive:false
      }
    ]
  },

  // 添加食材
  talk:function(e){
    this.setData({
      food:e.detail.value
    })
  },

  // 添加食材的组件
  addFood:function(e){
    var food = this.data.food;
    if(food != null){
      this.data.foodList.push(food)
      this.setData({
        foodList : this.data.foodList,
        'inputValue' : '',
        food:null
      });
    }
  },

  // 删除食材
  deleteFood:function(e){
    this.setData({
      foodList:[]
    })
  },

  // 更改喜好
  changeHobby:function(e){
    // 获取索引
    const {index} = e.currentTarget.dataset;
    // 获取数组
    let {hobbyList} = this.data;
    // 循环数组
    hobbyList.forEach((v,i)=>i===index?v.isActive=true:v.isActive=false);
    this.setData({
      hobbyList
    })
  },

  // 更改其他要求
  changeActive:function(e){
    // 获取索引
    const {index} = e.currentTarget.dataset;
    // 获取数组
    let {requireList} = this.data;
    // 循环数组
    // requireList.forEach((v,i)=>i===index?v.isActive=true:v.isActive=false);
    for(var i = 0; i < requireList.length; i++){
      if(index == i){
        if(requireList[i].isActive == true){
          requireList[i].isActive = false;
        }
        else{
          requireList[i].isActive = true;
        }
      }
      else{
        requireList[i].isActive = false;
      }
    }
    this.setData({
      requireList
    })
  },

  // 提交
  submit:function(e){
    let {foodList} = this.data;
    if(foodList.length != 0){
      wx.navigateTo({
        url: '../dingzhiList/dingzhiList'
      })
    }
    else{
      wx.showToast({
        title: '请选择食材', // 标题
        icon: 'none',  // 图标类型，默认success
        duration: 1500  // 提示窗停留时间，默认1500ms
      })
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