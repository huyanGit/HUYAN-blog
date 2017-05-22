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
	},
	getOneBlog: function (blogId) {
		return instance.get('/blog/' + blogId);
	},
	updateOneBlog: function(blogId, data) {
		return instance.put('/blog/' + blogId, data);
	}
}

export default blogResource;