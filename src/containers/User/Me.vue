<template>
	<div>
		<pre>{{ user }}</pre>
	</div>
</template>
<script>
export default {
	name: 'UserMe',
	computed: {
		user() {
			return this.$store.getters
		}
	}
}
</script>