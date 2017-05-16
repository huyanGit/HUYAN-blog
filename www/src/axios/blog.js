import instance from './instance';

var blogResource = {
	getBlogs: function () {
		return instance.get('/blog');
	},
	getBlogById: function (blogId) {
		return instance.get('/blog/' + blogId);
	}
}

export default blogResource