let info = null

function getRouter () {
  let pages = getCurrentPages();
  let currPage = {}
  if (pages.length) {
    currPage = pages[pages.length - 1];
  }
  return currPage.is || '首页'
}

let time = 0
const pageOnLoadHook = function (event, methodName) {
  time = Date.now()
}

const pageOnReadyHook = function (event, methodName) {
  // 统计页面的加载时间
  if (time) {
    info.loadingTime = Date.now() - time
    console.log(info)
  }
}

const pageOnShowHook = function (event, methodName) {
  info = {
    onShowTime: Date.now(),
    url: getRouter()
  }
}

const pageOnUnloadHook = function (event, methodName) {
  // 统计页面的停留时间
  time = 0
  info.stopTime = Date.now() - info.onShowTime
  console.log(info)
}

const pageOnHideHook = function (event, methodName) {
  // 统计页面的停留时间
  time = 0
  info.stopTime = Date.now() - info.onShowTime
  console.log(info)
}

export {
  pageOnLoadHook,
  pageOnReadyHook,
  pageOnShowHook,
  pageOnUnloadHook,
  pageOnHideHook
}
