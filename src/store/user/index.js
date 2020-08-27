import router from '@/router'
export default {
	state: {
		user: {},
		profile: {}
	},
	mutations: {
		setProfile(state, profileData) {
			state.profile = profileData
		},
		setUser(state, userData) {
			state.user = userData
		},
		logout(state) {
			state.user = null
			state.profile = null
			window.localStorage.removeItem('jwt')
			router.push({
				path: '/auth/sign-in'
			})
		}
	},
	getters: {
		getUser(state) {
			return state.user
		},
		getProfile(state) {
			return state.profile
		}
	}
}