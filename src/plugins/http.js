// 插件
import axios from 'axios'
const MyHttpServer = {}
MyHttpServer.install = (Vue) => {
    // 添加实例方法
    axios.defaults.baseURL= 'http://127.0.0.1:5000/api'
    Vue.prototype.$http = axios
  }

export default MyHttpServer