<template>
	<div class="main row">
		<Sidebar :active="active" />
		<div
			class="button"
			@click="active ? active = false : active = true"
			:class="{
				'activate': active
			}"
		/>
		<div class="section col-sm-12 col-md-9 col-lg-9 col-xl-9 content">
			<router-view />
		</div>
	</div>
</template>
<style media="screen" lang="stylus" scoped>
@media all and (max-width: 760px)
	.main
		.button
			display block !important
.main
	overflow hidden
	margin 0
	padding 0
	position fixed
	left 0
	right 0
	top 0
	bottom 0
	width 100%
	height 100%
	.section
		height 100%
		overflow auto
		&.sidebar, &.content
			padding 0
	.button
		display none
		position fixed
		left 0
		top 0
		background #fff
		width 60px
		height 60px
		margin 10px
		border-radius 100%
		// box-shadow 0px 3px 5px rgba(25, 25, 25, .50)
		background-image url('../../assets/images/icons/menu.svg')
		background-size 50%
		background-position center
		background-repeat no-repeat
		cursor pointer
		z-index 100
		transition .2s
		&:hover
			background-color #eee
			transition .2s
		&.activate
			left unset
			top unset
			right 0
			bottom 0
			background-image url('../../assets/images/icons/close.svg')
</style>
<script>
// import ProfileInfo from '@/components/User/ProfileInfo.vue'
import Sidebar from '@/components/User/Sidebar.vue'
export default {
	name: 'UserMe',
	data() {
		return {
			active: false
		}
	},
	components: {
		// ProfileInfo,
		Sidebar
	},
	computed: {
		user() {
			return this.$store.getters
		},
		loadingUserData() {
      return this.$store.getters.getLoadingUserDataStatus
    },
    profile() {
      return this.$store.getters.getProfile
    }
	}
}
</script>
