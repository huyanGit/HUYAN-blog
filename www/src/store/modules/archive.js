import * as types from '../mutation-types'
import archiveResource from '../../api/archive'

const state = {
	archives: []
}

const getters = {

}

const mutations = {
	[types.LOAD_ARCHIVE_LIST] (state, { archives }) {
		state.archives = archives
	}
}

const actions = {
	getArchives({ commit }) {
		archiveResource.getArchives().then( res => {
			commit(types.LOAD_ARCHIVE_LIST, { archives: res.data })
		})
	}
}

export default {
	state,
	getters,
	mutations,
	actions
}