export default {
	state: {
		user: {}
	},
	mutations: {
		setUser(state, userData) {
			state.user = userData
		},
		logout(state) {
			state.user = null
		}
	},
	getters: {
		getUser(state) {
			return state.user
		}
	}
}