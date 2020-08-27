<template>
	<div class="welcome container-fluid">
		<Nav />
		<div class="row main no-gutters">
			<div
				class="col-sm-12 col-md-6 col-lg-6 col-xl-6 text"
			>
				<div class="landing">
					<h2>
						Crypto exchange
					</h2>
					<h3>
						Do your trades with the fastest and secure way
					</h3>
					<p>
						Discover how easy you can trade your crypto currency with another cash, keep it stupid simple, secure and fast.
					</p>
					<div class="buttons">
						<router-link to="/auth/sign-up" class="button get-started">
							Get started
						</router-link>
						<router-link class="button tour" to="/intro">
							See how it works
						</router-link>
					</div>					
				</div>
			</div>
			<div class="col-sm-12 col-md-6 col-lg-6 col-xl-6 image">
				<Carousel />
			</div>
		</div>
	</div>
</template>
<style scoped lang="stylus">
.welcome
	position fixed
	left 0
	right 0
	top 0
	bottom 0
	width 100%
	height 100%
	.main
		height 100%
		box-sizing border-box
		div
			padding 0
			margin 0
			&.text
				background-repeat no-repeat
				display flex
				flex-direction column
				align-items flex-start
				justify-content center
				.landing
					margin 40px
					text-align left
					h2, h3
						margin 0
						padding 0
					h2
						font-size 50pt
						text-transform uppercase
					.buttons
						.button
							padding 10px 20px
							background-color #fff
							display inline-block
							margin 10px 0
							margin-right 10px
							border-radius 20px
							color #fff
							text-decoration none
							&.get-started
								background-color #27273c
								&:hover
									box-shadow 0 0 0 3px #1e87f0
							&.tour
								background-color #1e87f0
								&:hover
									box-shadow 0 0 0 3px #27273c
			&.image
				height 100%
</style>
<script>
import Carousel from '@/components/Home/Carousel.vue'
import Nav from '@/components/Home/Nav.vue'
export default {
	name: 'HomeWelcome',
	components: {
		Carousel,
		Nav
	},
	metaInfo: {
    title: 'Coindex · Welcome'
  },
}
</script>