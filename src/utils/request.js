import axios from 'axios'
import {getToken} from '@/utils/user'

//create an axios instance
const service = axios.create({
  baseURL:/https:\/\/jasonandjay.com/.test(window.location.origin)? 
  'https://exam.jasonandjay.com/':'http://169.254.78.4:7001/',
  //withCredentials: true, // 跨域请求时发送 cookie
  timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // 判断是否有登录态
    if (getToken()) {
      // 让每个请求携带authorization
      config.headers['authorization'] = getToken()
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => response.data,
  error => {
    return Promise.reject(error)
  }
)

export default service