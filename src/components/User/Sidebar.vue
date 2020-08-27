<template>
	<div
		class="section col-sm-12 col-md-3 col-lg-3 col-xl-3 sidebar"
		:class="{
			'active': active,
			'disabled': !active
		}"
	>
		<nav class="uk-navbar-container" uk-navbar>
			<div class="uk-navbar-left">
				<ul class="uk-navbar-nav">
					<li class="logo">
						<router-link to="/" class="logo-a">
							<img src="@/assets/images/logo/logo.svg" class="logo-image">
						</router-link>
					</li>
				</ul>
			</div>
			<div class="uk-navbar-right">
				<ul class="uk-navbar-nav">
					<li>
						<router-link to="/blog">
							Blog
						</router-link>
					</li>
				</ul>
			</div>
		</nav>

		<ul class="uk-list">
			<li>
				<router-link to="/user/me/dashboard">Dashboard</router-link>
			</li>
			<li>
				<router-link to="/buy">Post a buying</router-link>
			</li>
			<li>
				<router-link to="/sell">Post a selling</router-link>
			</li>
			<li class="divider">
				<div class="line"></div>
			</li>
			<li>
				<router-link to="/user/me/settings/security">Security settings</router-link>
			</li>
		</ul>

	</div>
</template>
<style scoped lang="stylus">
@media all and (max-width: 760px)
	.sidebar
		position fixed
		left 0
		right 0
		top 0
		bottom 0
		width 100%
		height 100%
		overflow hidden
		z-index 100
		transition .2s
		&.disabled
			transform translateY(-100%)
			transition .2s
		&.active
			transform translateY(0)
			transition .2s
.sidebar
	background #5f2c82
	background -webkit-linear-gradient(to top, #49a09d, #5f2c82)
	background linear-gradient(to top, #49a09d, #5f2c82)
	.menu
		display none
	.uk-navbar
		backdrop-filter blur(20px)
		box-shadow 0 10px 30px rgba(0,0,0,0.05)
		background rgba(255,255,255,0.2) !important
		.uk-navbar-left
			.uk-navbar-nav
				.logo
					padding 0 40px
					.logo-a
						padding 0
						.logo-image
							width 45px
							display block
		.uk-navbar-right
			.uk-navbar-nav
				li
					padding 0 40px
					a
						color #fff
						padding 0
.sidebar
	.uk-list
		margin 0
		li
			cursor pointer
			padding-bottom 0
			margin 0
			&.divider
				padding 10px 40px
				cursor default
				display flex
				flex-direction column
				justify-content center
				align-items center
				.line
					height 2px
					background rgba(255, 255, 255, .50)
					border-radius 10px
					width 100%
			a
				display block
				padding 20px 40px
				color #fff
				text-decoration none
				border-radius 5px
				transition .2s
				&:hover
					background rgba(25, 25, 25, .10)
</style>
<script>
export default {
	name: 'ProfileSidebar',
	props: {
		active: null
	},
	data() {
		return {
			api_url: process.env.VUE_APP_STRAPI_API_URL || "http://localhost:1337",
		}
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