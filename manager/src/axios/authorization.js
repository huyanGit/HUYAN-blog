import instance from './instance'

var authorization = function(data){
	return instance.post('/admin/authorization', data);
}

export default authorization;