import { pageConfig, eventConfig } from '../utils/index'

let lastElement = null
let lastCallback = null

const appOnLaunchHook = function (event, methodName) {
  console.log('hook ' + methodName)
}

const appOnPageNotFoundHook = function (event, methodName) {
  console.log('hook ' + methodName)
}

const appOnErrorHook = function (event, methodName) {
  const list = event.split('\n')
  console.log(`monitor: JS错误 ${list[1]} ${list[3].trim()}`)
}

const appOnUnhandledRejection = function (event, methodName) {
  console.log('monitor: Promise错误')
}

const appOnThemeChange = function () {
  console.log('monitor: 系统主题改变')
}

const apponPageNotFound = function (event, methodName) {
  console.log('monitor: 页面不存在')
}

const evnetHook = (obj) => {
  for (const key in obj) {
    if (!pageConfig.includes(key)) {
      let oldMethod = obj[key]
      obj[key] = function (event) {
        if (event && eventConfig.includes(event.type)) {
          console.log('monitor: 上报事件', event)
        } else {
          console.log(`monitor: 普通函数调用 ${oldMethod.name}`)
        }
        oldMethod.call(this, event)
      }
    }
  }
}

export {
  appOnLaunchHook,
  appOnPageNotFoundHook,
  appOnErrorHook,
  appOnUnhandledRejection,
  apponPageNotFound,
  appOnThemeChange,
  evnetHook
}
