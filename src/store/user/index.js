export default {
	state: {
		user: {}
	},
	mutations: {
		setUser(state, userData) {
			state.user = userData
		}
	},
	getters: {
		getUser(state) {
			return state.user
		}
	}
}