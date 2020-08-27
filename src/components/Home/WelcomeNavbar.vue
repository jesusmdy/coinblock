<template>
	<nav class="uk-navbar-container" uk-navbar>
		<div class="uk-navbar-left">
			<ul class="uk-navbar-nav">
				<li class="logo">
					<router-link to="/" class="logo-a">
						<img src="@/assets/images/logo/logo.svg" alt="" class="logo-image">									
					</router-link>
				</li>
			</ul>
		</div>
		<div v-if="user && user.username" class="uk-navbar-right">
			<ul class="uk-navbar-nav">
				<li>
					<router-link to="/buy" class="primary">
						Buy
					</router-link>
				</li>
				<li>
					<router-link to="/sell" class="filled">
						Sell
					</router-link>
				</li>
				<li>
					<router-link to="/user">
						{{ user.username }}
					</router-link>
				</li>
			</ul>
		</div>
		<div v-else class="uk-navbar-right">
			<ul class="uk-navbar-nav">
				<li class="logo">
					<router-link to="/auth" class="primary">
						Sign In
					</router-link>
				</li>
				<li class="logo">
					<router-link to="/auth/sign-up" class="filled">
						Try it now
					</router-link>
				</li>
			</ul>
		</div>
	</nav>
</template>
<style scoped lang="stylus">
@media all and (max-width: 760px)
	.uk-navbar
		padding 0 30px !important
.uk-navbar
	background none !important
	.uk-navbar-left
		.uk-navbar-nav
			.logo
				display flex
				.logo-a
					padding 0
					.logo-image
						width 45px
						display block
	.uk-navbar-right
		.uk-navbar-nav
			li
				margin 0 5px
				a
					display block
					min-height auto
					padding 10px 30px
					line-height 1
					border-radius 5px
					color #fff
					border 1px solid #fff
					text-transform capitalize
					font-weight 600
					&.filled
						background #fff
						color #86377b
						&:hover
							box-shadow 0 0 0 3px #86377b3b
					&.primary
						background #86377b
						border-color #86377b
						&:hover
							box-shadow 0 0 0 3px #86377b3b
</style>
<script>
export default {
	computed: {
		user() {
			return this.$store.getters.getUser
		}
	}
}
</script>