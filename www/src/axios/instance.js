import axios from 'axios'
import configs from '../configs'

//自定义配置创建axios实例
var instance = axios.create({
	baseURL: configs.baseURL,
	timeout: 5000
});

//你可以截取请求或响应，当它在被 then 或者 catch 处理之前
//axios.interceptors.request.use()
//axios.interceptors.response.use()
//添加响应拦截器
instance.interceptors.response.use(response => {
	// do something about response
	return response;
}, error => {
	//do something when error
	console.log(error.response.data.message);
	return Promise.reject(error);
});

export default instance