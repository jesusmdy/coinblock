import Vue from 'vue'
export default {
	install () {
		Vue.prototype.$auth = {
			signIn: data => {
				window.localStorage.removeItem('jwt')
				Vue.prototype.$api.post('/auth/local', { ...data })
				.then(response => {
					return response	
				})
				.catch(err => {
						err.response.data.message.forEach(message => {
						window.localStorage.removeItem('jwt')
						message.messages.forEach(msg => {
							Vue.prototype.$uikit.notification({
								message: msg.message,
								status: 'warning',
								pos: 'top-right',
								timeout: 5000
							})
						})
					})					
				})
			}
		}
	}
}