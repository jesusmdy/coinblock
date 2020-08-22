<template>
	<div class="home">
		<div class="landing">
			<Nav />
			<router-view />
			<Foo />
		</div>		
	</div>
</template>
<style scoped lang="stylus">
.home
	position fixed
	left 0
	right 0
	top 0
	bottom 0
	width 100%
	height 100%
	overflow-y auto
	overflow-x hidden
	.landing
		height 100%
</style>
<script>
import Nav from '@/components/Home/Nav.vue'
import Foo from '@/components/Home/Footer.vue'
export default {
	name: 'HomeIndex',
	components: {
		Nav,
		Foo
	},
	metaInfo: {
    title: 'Coindex · Home'
  },
}
</script>