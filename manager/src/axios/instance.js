import axios from 'axios'
import configs from '../configs'
import router from '../router'
var instance = axios.create({
	baseURL: configs.baseURL,
	timeout: 5000,
	headers: {'Authorization': 'Bearer ' +  window.sessionStorage.getItem('token')}	
});
//响应拦截器
instance.interceptors.response.use(response => {
	// do something about response
	return response;
}, error => {
	//do something when error
	console.log(error.response.data.message);
	if(error.response.data.message == 'jwt expired'){
    router.replace({
      path: '/login'
    })
	}
	return Promise.reject(error);
});


export default instance