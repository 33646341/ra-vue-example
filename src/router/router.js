/**
 *  导入文件
 *  @Vue: vue
 *  @VueRouter: 路由
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
/**
 *  加载模块
 */
Vue.use(VueRouter)
/**
 *  配置滚动条的位置
 *  通过这个这个属性（是个函数），可以让应用像浏览器的原生表现那样，在按下 后退/前进 按钮时，简单地让页面滚动到顶部或原来的位置。
 */
const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    return savedPosition
  } else {
    return { x: 0, y: 0 }
  }
}
/**
 *  路由配置
 *  @mode: 配置路由模式（"hash" | "history" | "abstract"）
 *  @base: 如果整个单页应用服务在 /app/ 下，然后 base 就应该设为 "/app/"。
 *  @linkActiveClass: 点击触发的class
 *  @scrollBehavior: 配置滚动条的位置
 */
const router = new VueRouter({
  base: __dirname,
  likActiveClass: 'link-active',
  scrollBehavior,
  routes: [
    {
      path: '/init',
      name: 'init',
      component: resolve => require(['../components/init.vue'], resolve),
      children: [
        {
          path: '/init/home',
          name: 'home',
          component: resolve => require(['../components/home.vue'], resolve),
          meta: {title: '主页'}
        },
        {
          path: '/init/user/userList',
          name: 'userList',
          component: resolve => require(['../components/user/userList.vue'], resolve),
          meta: {title: '主页'}
        },
        {
          path: '/init/user/addUser',
          name: 'addUser',
          component: resolve => require(['../components/user/addUser.vue'], resolve),
          meta: {title: '主页'}
        }
      ]
    }, {
      path: '/login',
      name: 'login',
      component: resolve => require(['../components/login.vue'], resolve),
      meta: {title: '登录'}
    }
  ]
})

/**
 *  路由出口
 */
export default router
