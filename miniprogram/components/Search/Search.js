// components/search.js
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

  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 首页点击搜索按钮进入搜索页面
    hadletap(){
      wx.navigateTo({
        url: '../searchpage/searchpage',
      });
        
    }
  }
})
