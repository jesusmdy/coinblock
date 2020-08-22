<template>
	<div class="main">
		<AppNav />
		<router-view />
	</div>
</template>
<style lang="stylus" scoped>
.main
	.header
		height 300px
		background-image url('/assets/auth.jpg')
		background-position center
		background-size cover
</style>
<script>
export default {
	name: 'AuthIndex'
}
</script>