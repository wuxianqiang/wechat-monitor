const pageConfig = [
  'data',
  'onLoad',
  'onShow',
  'onReady',
  'onHide',
  'onUnload',
  'onPullDownRefresh',
  'onReachBottom',
  'onShareAppMessage',
  'onShareTimeline',
  'onAddToFavorites',
  'onPageScroll',
  'onResize',
  'onTabItemTap'
]

const eventConfig = [
  'touchstart',
  'touchmove',
  'touchcancel',
  'touchend',
  'tap',
  'longpress',
  'longtap',
  'transitionend',
  'animationstart',
  'animationiteration',
  'animationend',
  'touchforcechange'
]

const proxy = (obj, methodName, custom) => {
  if (obj[methodName]) {
    let method = obj[methodName]
    obj[methodName] = function (event) {
      custom.call(this, event, methodName)
      method.call(this, event)
    }
  } else {
    obj[methodName] = function (event) {
      custom.call(this, event, methodName)
    }
  }
}

export {
  proxy,
  pageConfig,
  eventConfig
}
