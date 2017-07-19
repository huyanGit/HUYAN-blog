import * as types from '../mutation-types'
import blogResource from '../../api/blog'
import commentResource from '../../api/comment'
const state = {
	blogs: [],
	blogDetail: {},
	comments: [],
	comment: {
		user: '',
		content: '',
		blog: ''
	}
}

const getters = {

}

const mutations = {
	[types.LOAD_BLOG_LIST] (state, { blogs }) {
		state.blogs = blogs
	},
	[types.GET_ONE_BLOG] (state, { blogDetail }) {
		state.blogDetail = blogDetail
	},
	[types.GET_ALL_COMMENTS] (state, { comments }) {
		state.comments = comments
	},
	[types.ADD_COMMENT] (state, { comment }) {
		state.comments.push(comment)
	},
	[types.ADD_COMMENT_TO_BLOG] (state) {
		state.comment.blog = state.blogDetail._id
	},
	[types.CLEAR_COMMENT_CONTENT] (state) {
		state.comment.content = ''
	}
}

const actions = {
	getAllBlogs ({ commit }) {
		blogResource.getBlogs().then( res => {
			commit(types.LOAD_BLOG_LIST, { blogs: res.data })
		})
	},
	getOneBlog ({ commit }, blogName) {
		blogResource.getBlogById(blogName).then( res => {
			commit(types.GET_ONE_BLOG, { blogDetail: res.data })
		})
	},
	getComments ({ commit }, blogName) {
		commentResource.getAllComments().then( res => {
			var comments = []
			for (let i = 0; i < res.data.length; i++) {
				if (res.data[i].blog.code === blogName) {
					comments.push(res.data[i])
				}
			}
			commit(types.GET_ALL_COMMENTS, { comments: comments })
		})
	},
	addComment ({ commit, state }) {
		commit(types.ADD_COMMENT_TO_BLOG)
		if(state.comment.content != '' && state.comment.user != ''){
			commentResource.createComment(state.comment).then( res => {
				commit(types.ADD_COMMENT, { comment: res.data})
				commit(types.CLEAR_COMMENT_CONTENT)
			})
		}
	}
}

export default {
	state,
	getters,
	mutations,
	actions
}