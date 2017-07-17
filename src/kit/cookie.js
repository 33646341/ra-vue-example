import Vue from 'vue'
const $cookie = function (opts) {
  let name, value, day, date
  name = opts.name || ''
  value = opts.value || ''
  day = opts.day || 7
  date = new Date()
  if (opts.method === 'set') {
    date.setTime(date.getTime() + 24 * 60 * 60 * 1000 * day)
    window.document.cookie = name + '=' + JSON.stringify(value) + ';path=/;expires=' + date.toGMTString()
  } else if (opts.method === 'get') {
    let v = window.document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)')
    return v ? v[2] : null
  } else {
    date.setTime(date.getTime() - 1)
    let val = Vue.$cookieGet(name)
    if (val != null) {
      document.cookie = name + '=' + val + ';expires=' + date.toGMTString()
    }
  }
}
/**
 *  出口
 */
export default $cookie
