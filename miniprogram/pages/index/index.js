import { request } from "../../request/index.js";
Page({
  data: {
    // 获取轮播图数组
    swiperList:[
      {
        "id": '0',
        "img_src": "https://i.niupic.com/images/2020/04/04/7hiu.jpg"
      },
      {
        "id": '1',
        "img_src": "https://i.niupic.com/images/2020/04/04/7hiv.jpg"
      },
      {
        "id": '2',
        "img_src":  "https://i.niupic.com/images/2020/04/04/7hix.jpg"
      },
      {
        "id": '3',
        "img_src": "https://i.niupic.com/images/2020/04/04/7hiw.jpg"
      }
    ],

    //中间导航栏
    tabs:[
      {
        "id": 0,
        "name": "精品推荐",
        "Asrc": "../../icon/home/全部-o.png",
        "src": "../../icon/home/全部.png",
        "isActive": true
      },
      {
        "id": 1,
        "name": "正餐",
        "Asrc": "../../icon/home/正餐-o.png",
        "src": "../../icon/home/正餐.png",
        "isActive": false
      },
      {
        "id": 2,
        "name": "小吃",
        "Asrc": "../../icon/home/小吃-o.png",
        "src": "../../icon/home/小吃.png",
        "isActive": false
      },
      {
        "id": 3,
        "name": "饮品",
        "Asrc": "../../icon/home/饮品-o.png",
        "src": "../../icon/home/饮品.png",
        "isActive": false
      }
    ],

    allImg:[
      // 精品推荐
      {
        "isActive": true,
        "Img":[
          {
            "id": 0,
            "name": "八宝饭",
            "src":"https://i.niupic.com/images/2020/04/04/7hiG.jpg",
            "likes": 0,
            "liked": false
          },
          {
            "id": 1,
            "name": "芝士",
            "src":"https://i.niupic.com/images/2020/04/04/7hiF.jpg",
            "likes": 0,
            "liked": false
          }
        ]
      },
      
      // 正餐
      {
        "isActive": false,
        "Img":[
          {
            "id": 1,
            "name": "芝士",
            "src":"https://i.niupic.com/images/2020/04/04/7hiF.jpg",
            "likes": 0,
            "liked": false
          },
          {
            "id": 2,
            "name": "水饺",
            "src":"https://i.niupic.com/images/2020/04/04/7hiH.jpg",
            "likes": 0,
            "liked": false
          },
          {
            "id": 3,
            "name": "绿豆",
            "src":"https://i.niupic.com/images/2020/04/04/7hiI.jpg",
            "likes": 0,
            "liked": false
          }
        ]
      },

      // 小吃
      {
        "isActive": false,
        "Img":[
          {
            "id": 1,
            "name": "芝士",
            "src":"https://i.niupic.com/images/2020/04/04/7hiF.jpg",
            "likes": 0,
            "liked": false
          },
          {
            "id": 2,
            "name": "水饺",
            "src":"https://i.niupic.com/images/2020/04/04/7hiH.jpg",
            "likes": 0,
            "liked": false
          },
          {
            "id": 3,
            "name": "绿豆",
            "src":"https://i.niupic.com/images/2020/04/04/7hiI.jpg",
            "likes": 0,
            "liked": false
          }
        ]
      },

      // 饮品
      {
        "isActive": false,
        "Img":[
          {
            "id": 1,
            "name": "芝士",
            "src":"https://i.niupic.com/images/2020/04/04/7hiF.jpg",
            "likes": 0,
            "liked": false
          },
          {
            "id": 2,
            "name": "水饺",
            "src":"https://i.niupic.com/images/2020/04/04/7hiH.jpg",
            "likes": 0,
            "liked": false
          },
          {
            "id": 3,
            "name": "绿豆",
            "src":"https://i.niupic.com/images/2020/04/04/7hiI.jpg",
            "likes": 0,
            "liked": false
          }
        ]
      }
    ],
    //新定义的tab数组，用于展示中间导航栏和图片下面内容
    
  },
  // 中间导航栏 子向父传递数据
  handleItemChange(e){
    const {index} = e.detail;
    let {tabs} = this.data;
    let {allImg} = this.data;
    // 循环遍历数组
    tabs.forEach((v,i)=>i===index?v.isActive=true:v.isActive=false);
    allImg.forEach((v,i)=>i===index?v.isActive=true:v.isActive=false);
    this.setData({
      tabs,
      allImg
    })
  },

  // 点赞数
  handlelikes_allChange(e){
    const {index} = e.detail;
    let {allImg} = this.data;
    // 点赞和取消点赞
    for(var i = 0; i < allImg.length; i++){
      if(allImg[i].isActive == true){
        for(var j = 0; j < allImg[i].Img.length ; j++){
          if(j === index){
            if(allImg[i].Img[j].liked){
              allImg[i].Img[j].liked = false;
              allImg[i].Img[j].likes -= 1;
              for(var t = 1; t < allImg.length ; t++){
                for(var u = 1; u < allImg[t].Img.length; u++){
                  if(allImg[i].Img[j].id == allImg[t].Img[u].id){
                    allImg[t].Img[u].liked = false;
                    allImg[t].Img[u].likes -= 1;
                  }
                }
              }
            }else{
              allImg[i].Img[j].liked = true;
              allImg[i].Img[j].likes += 1;
              for(var t = 1; t < allImg[i].Img.length ; t++){
                for(var u = 1; u < allImg[t].Img.length; u++){
                  if(allImg[i].Img[j].id == allImg[t].Img[u].id){
                    allImg[t].Img[u].liked = true;
                    allImg[t].Img[u].likes += 1;
                  }
                }
              }
            }
          }
        }
      }
    }
    this.setData({
      allImg
    })
  },

  
  //获取轮播图数组
  /* onLoad: function(options){
    request({url:""})
    .then(result=>{
      this.setData({
        swiperList: result.data
      })
    })
  } */
})
