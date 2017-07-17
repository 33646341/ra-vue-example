/**
 *  导入文件
 *  @Vue: vue
 *  @Vuex: vue的一种状态管理模式
 *  @FastClick: 点击时延迟
 *  @Element: element-ui
 *  @App: 入口vue
 *  @router: 路由文件
 */
import Vue from 'vue'
import Vuex from 'vuex'
import FastClick from 'fastclick'
import Element from 'element-ui'
import App from './App'
import router from './router/router'
import 'element-ui/lib/theme-default/index.css'
import $http from './kit/request'
import $message from './kit/message'
import $cookie from './kit/cookie'
/**
 * 加载插件
 */
Vue.use(Vuex)
Vue.use(Element)
/**
 *  设置常量信息
 */
let DOMAIN_NAME = ''
let SERVER_NAME = ''
let API_PREFIX = ''
/**
 *  设置全局公用常量
 */
Vue.prototype.DOMAIN_NAME = DOMAIN_NAME
Vue.prototype.SERVER_NAME = SERVER_NAME
Vue.prototype.API_PREFIX = API_PREFIX
/**
 *  设置store
 */
const store = new Vuex.Store({})
/**
 *  监听路由
 *  修改网站title的值
 */
router.afterEach((transition) => {
  if (transition.meta.title) {
    document.title = transition.meta.title
  }
})
/**
 *  通用工具类
 */
Vue.prototype.$post = function (opts) {
  opts.method = 'post'
  $http(opts)
}
Vue.prototype.$get = function (opts) {
  opts.method = 'get'
  $http(opts)
}
/**
 * 弹出层
 * @param opts
 * @param onCloses
 */
Vue.prototype.$message = function (opts, onCloses) {
  $message(opts, onCloses)
}
/**
 * 操作coookie
 * @param name
 * @param value
 * @param day
 */
Vue.prototype.$cookieSet = function (opts) {
  opts.method = 'set'
  $cookie(opts)
}
Vue.prototype.$cookieGet = function (opts) {
  opts.method = 'get'
  return $cookie(opts)
}
Vue.prototype.$cookieDel = function (opts) {
  opts.method = 'del'
  $cookie(opts)
}
/**
 *  日志输出开关
 */
Vue.config.productionTip = true
/**
 *  点击延迟
 */
FastClick.attach(document.body)
/**
 *  创建实例
 */
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
