import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'
import globalcfg from './global'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
		user: user,
		global: globalcfg
  }
})
export default store