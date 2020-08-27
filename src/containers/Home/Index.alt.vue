<template>
	<div class="landing container-fluid">
		<div class="navbar row justify-content-center align-items-center">
			<div class="col-sm-12 col-md-8 col-lg-8 col-xl-8">
				<WelcomeNav />
			</div>
		</div>
		<div class="content row justify-content-center align-items-center">
			<div class="col-sm-12 col-md-8 col-lg-8 col-xl-8 content-content">
				<div class="wrapper"></div>
				<div class="bottom">
					<div class="container-fluid bottom-c">
						<div class="banner">
							<h2>Cryptocurrency Exchange</h2>
							<h3>Trade between so many currencies and make your money flow</h3>							
						</div>
						<div class="row no-gutters">
							<div class="sectx col-sm-12 col-md-6 col-lg-6 text">
								<p>Cryptocurrencies exchange &amp; trader tool</p>
							</div>

							<div v-if="user && user.id" class="sectx col-sm-12 col-md-6 col-lg-6 call-to-action">
								<router-link to="/blog" class="primary">
									Visit blog
								</router-link>
								<router-link to="/me" class="filled">
									Got to account
								</router-link>
							</div>

							<div v-else class="sectx col-sm-12 col-md-6 col-lg-6 call-to-action">
								<router-link to="/survey" class="primary">
									Take a tour
								</router-link>
								<router-link to="/auth/sign-up" class="filled">
									Get started
								</router-link>
							</div>

						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<style scoped lang="stylus">
@media all and (max-width: 760px)
	.landing
		.content
			.content-content
				.bottom
					.bottom-c
						.banner
							padding 0 40px
						.row
							border none !important
							.sectx
								&.text
									padding 0 40px !important
								&.call-to-action
									justify-content center !important
									a
										width 40% !important
										margin-right 10px !important
.landing
	position fixed
	left 0
	right 0
	top 0
	bottom 0
	width 100%
	height 100%
	background-color #86377b
	background-image url('../../assets/images/landing.jpg')
	background-size cover
	background-position center
	background-attachment fixed
	overflow auto
	.navbar
		backdrop-filter blur(20px)
		box-shadow 0 10px 30px rgba(0,0,0,0.05)
		background rgba(255,255,255,0.2)
	.content
		height 90%
		background linear-gradient(to top, rgba(25, 25, 25, .90), rgba(25, 25, 25, .10))
		.content-content
			padding 0
			.wrapper
				width 100%
				height 50%
			.bottom
				.container-fluid
					height 100%
					padding 0
					.banner
						h2, h3
							padding 0
							margin 0
							color #fff
						h2
							font-size 30pt
					.row
						border-top 1px solid #fff
						margin 0
						padding 10px 0
						.sectx
							padding 0
							&.text
								padding 0
								margin 0
								p
									display block
									padding 10px 0
									margin 0
									box-sizing border-box
									color #fff
							&.call-to-action
								display flex
								flex-direction row
								justify-content space-between
								a
									width 49%
									padding 10px
									margin 0
									display block
									box-sizing border-box
									border-radius 5px
									text-align center
									text-decoration none
									transition .2s
									&.primary
										background #fff
										color #86377b
									&.filled										
										background #86377b
										color #fff
									&:hover
										box-shadow 0px 0 5px rgba(25, 25, 25, .50)
										transition .2s
</style>
<script>
import WelcomeNav from '@/components/Home/WelcomeNavbar.vue'
export default {
	name: 'Welcome',
	components: {
		WelcomeNav
	},
	computed: {
		user() {
			return this.$store.getters.getUser
		}
	}
}
</script>