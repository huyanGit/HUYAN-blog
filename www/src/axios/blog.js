import instance from './instance';

var blogResource = {
	getBlogs: function () {
		return instance.get('/blog');
	},
	getBlogById: function (blogName) {
		return instance.get('/blog/' + blogName);
	}
}

export default blogResource