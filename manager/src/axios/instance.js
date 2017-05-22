import axios from 'axios'
import configs from '../configs'

var instance = axios.create({
	baseURL: configs.baseURL,
	timeout: 5000,
	headers: {'Authorization': 'Bearer ' +  window.sessionStorage.getItem('token')}	
});

export default instance