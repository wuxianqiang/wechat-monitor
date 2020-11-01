import { createPage } from '../../monitor/index'

//logs.js
const util = require('../../utils/util.js')

createPage({
  data: {
    logs: []
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  }
})
