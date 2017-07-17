import {Message} from 'element-ui'
const $message = function (opts, onCloses) {
  let close, msg, tp, time
  close = true
  msg = '出错啦!'
  tp = 'success'
  time = 2000
  if (opts.close) {
    close = opts.close
  }
  if (opts.msg) {
    msg = opts.msg
  }
  if (opts.tp) {
    tp = opts.tp
  }
  if (opts.time) {
    time = opts.time
  }
  Message({
    showClose: close,
    message: msg,
    type: tp,
    duration: time,
    onClose: function () {
      onCloses()
    }
  })
}
/**
 *  验证出口
 */
export default $message
