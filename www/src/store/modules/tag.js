import * as types from '../mutation-types'
import tagResource from '../../api/tag'
const state = {
	tags: [],
	tag: {}
}

const getters = {

}

const mutations = {
	[types.LOAD_TAG_LIST] (state, { tags }) {
		state.tags = tags
	},
	[types.GET_ONE_TAG] (state, { tag }) {
		state.tag = tag
	}
}

const actions = {
	getTags ({ commit }) {
		tagResource.getTags().then( res => {
			commit(types.LOAD_TAG_LIST, { tags: res.data })
		})
	},
	getOneTag ({ commit }, tagName) {
		tagResource.getTagById(tagName).then( res => {
			commit(types.GET_ONE_TAG, { tag: res.data })
		})
	}
}

export default {
	state,
	getters,
	mutations,
	actions
}