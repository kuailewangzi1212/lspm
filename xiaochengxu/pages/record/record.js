// pages/record/record.js
let http = require('../../utils/requestService.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    recordList: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const that = this;
    /**
         * 查询记录
         */
    http.sendRrquest("/api/findRecord", 'POST', { }, {})
      .then(function (res) {
        let recordList = [];
        let recordInfo = res.data.message;
        for (var i = 0; i < recordInfo.length; i++) {
          let str = recordInfo[i].addDate.slice(0, 10) + "在" + recordInfo[i].warehouse + "，" + recordInfo[i].operation + recordInfo[i].brand + recordInfo[i].category + recordInfo[i].model;
          recordList.push(str);
        }
        that.setData({
          recordList: recordList,
        })

      }, function (error) {
        console.log(error);
      });
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