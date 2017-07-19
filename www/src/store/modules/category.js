import * as types from '../mutation-types'
import categoryResource from '../../api/category'

const state = {
	categories: [],
	category: {}
}

const getters = {

}

const mutations = {
	[types.LOAD_CATEGORY_LIST] (state, { categories }) {
		state.categories = categories
	},
	[types.GET_ONE_CATEGORY] (state, { category }) {
		state.category = category
	}
}

const actions = {
	getAllCategories ({ commit }) {
		categoryResource.getCategories().then( res => {
			commit(types.LOAD_CATEGORY_LIST, { categories: res.data })
		})
	},
	getOneCategory ({ commit }, categoryName) {
		categoryResource.getCategoryById(categoryName).then( res => {
			commit(types.GET_ONE_CATEGORY, { category: res.data})
		})
	}
}

export default {
	state,
	getters,
	mutations,
	actions
}