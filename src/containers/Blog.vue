<template>
	<div class="main">
		<div class="row no-gutters" >
			<div class="col-sm-12 col-md-8 col-lg-8 col-xl-8">
				<router-view />
			</div>
			<div class="col-sm-12 col-md-4 col-lg-4 col-xl-4">
				<Categories />
			</div>
		</div>
	</div>
</template>
<style scoped>
.main {
	margin: 0 40px;
}
.row > div {
	padding-top: 40px;
}
</style>
<script>
export default {
	name: 'Blog',
	components: {
		Categories: () => import(`../components/Blog/Categories.vue`)
	}
}
</script>