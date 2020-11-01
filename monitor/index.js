import { proxy } from './utils/index'
import { appOnLaunchHook, appOnPageNotFoundHook, appOnErrorHook, evnetHook } from './lib/appHooks'
import { pageOnLoadHook, pageOnReadyHook, pageOnShowHook, pageOnUnloadHook, pageOnHideHook } from './lib/pageHooks'

function trackEvent (config) {
  // TODO: 可以自定义上报也可以自动上报
  console.log('monitor: 自定义上报')
}

function createApp (config) {
  proxy(config, 'onLaunch', appOnLaunchHook)
  proxy(config, 'onError', appOnErrorHook)
  proxy(config, 'onPageNotFound', appOnPageNotFoundHook)
  App(config)
}

function createPage (config) {
  proxy(config, 'onLoad', pageOnLoadHook)
  proxy(config, 'onReady', pageOnReadyHook)
  proxy(config, 'onShow', pageOnShowHook)
  proxy(config, 'onUnload', pageOnUnloadHook)
  proxy(config, 'onHide', pageOnHideHook)
  evnetHook(config)
  Page(config)
}

export {
  createApp,
  createPage,
  trackEvent
}
