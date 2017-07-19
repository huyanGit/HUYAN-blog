import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import blog from './modules/blog'
import tag from './modules/tag'
import category from './modules/category'
import archive from './modules/archive'

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		blog,
		category,
		tag,
		archive
	},
	getters
})
