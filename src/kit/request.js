import axios from 'axios'
import {Loading, Message} from 'element-ui'
/**
 * @param opts
 */
const $http = function (opts) {
  let loadingInstance = Loading.service()
  loadingInstance.close()
  axios({
    method: opts.method,
    url: opts.url,
    headers: opts.headers || {},
    params: opts.params || {},
    data: opts.data || {}
  }).then(function (response) {
    loadingInstance.close()
    opts.success(response)
  }).catch(function (error) {
    console.log(error)
    Message.warning({message: '系统异常'})
    loadingInstance.close()
  })
}
/**
 *  出口
 */
export default $http
