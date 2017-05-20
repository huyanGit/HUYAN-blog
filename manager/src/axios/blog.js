import instance from './instance'

var blogResource = {
	createOneBlog: function (data) {
		return instance.post('/blog', data);
	},
	getBlogs: function () {
		return instance.get('/blog');
	},
	deleteOneBlog: function (blogId) {
		return instance.delete('/blog/' + blogId);
	}
}

export default blogResource;