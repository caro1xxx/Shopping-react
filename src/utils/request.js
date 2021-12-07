import axios from 'axios';
import qs from 'qs'
import url from './url'


// 请求拦截器
axios.interceptors.request.use(config => {
  if (Object.prototype.toString.call(config.data) !== '[object FormData]') {
      config.data = qs.stringify(config.data);
  }
  return config
})
// 响应拦截器
axios.interceptors.response.use(response => {
  if (response.data.code){
    // 根据状态码做反应
    switch (response.data.code) {
      case 200:
        return response.data
      case 401:
        break;
      case 402:
        break;
      case 403:
        break;
      case 404:
        break;
    }
  }else {
    return response
  }
})


//请求商品数据
function getRequest(url,params) {
  return axios.get(url,{params})
}


export default {
  ...url,
  getRequest,
}