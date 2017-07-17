# vue

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run e2e tests
npm run e2e

# run all tests
npm test
```
该项目使用Vue+Vue-Router+ElementUI搭建

此项目提供项目框架组件方案，适合初学者。

由于公司项目紧张,这是晚上下班写了一点点。

Element-UI中组件很完善，就没有写页面组件

路由搭配使用

assets存放静态JSON文件

components/layout存放header、menu部分,将这两部分放到init中,后续页面放在init的子路由中即可

kit工具类 用于写http请求，cookie, 弹出层之类的封装，因为日vue在main里面new的所有：

工具类在main主函数里面引用后，在其任意页面可以直接引用（vue.方法名）

router路由文件

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
微博(http://weibo.com/818qizai898)
