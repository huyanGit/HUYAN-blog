import instance from './instance'

var blogResource = {
	createOneBlog: function (data) {
		return instance.post('/blog', data);
	}
}

export default blogResource;