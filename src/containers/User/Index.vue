<template>
	<div>
		<router-view />
	</div>
</template>
<script>
export default {
	name: 'User',
	watch: {
		"user": function() {
			if (!this.user) {
				localStorage.removeItem('jwt')
				this.$store.commit('logout')
				this.router.push({
					path: '/auth/sign-in'
				})
			}
		}
	},
	computed: {
		user() {
			return this.$store.getters.getUser
		}
	}
}
</script>