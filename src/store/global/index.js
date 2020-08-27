export default {
	state: {
		state: {
			loadingUserData: false
		}
	},
	mutations: {
		toggleLoadingUserData(state, value) {
			state.state.loadingUserData = value
		}
	},
	getters: {
		getLoadingUserDataStatus(state) {
			return state.state.loadingUserData
		}
	}
}