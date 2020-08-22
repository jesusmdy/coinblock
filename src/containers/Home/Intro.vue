<template>
	<div class="welcome">
		<div class="row main">
			<div
				class="col-sm-12 col-md-6 col-lg-6 col-xl-6 text"
			>
				<div class="landing">
					<h2>
						Getting started
					</h2>
					<h3>
						There are some points to keep in mind
					</h3>
					<div class="buttons">
						<a href="/auth/sign-up" class="button get-started">
							Create a new account
						</a>
						<router-link class="button tour" to="/blog">
							Visit blog
						</router-link>
					</div>					
				</div>
			</div>
			<div class="col-sm-12 col-md-6 col-lg-6 col-xl-6 image">
				<div class="title">
					Features
				</div>
				<div class="features">

					<div class="feature row">
						<div class="image-logo col-3 security">
							<img v-if="false" src="@/assets/images/vectors/features/g3158.png">
						</div>
						<div class="body col-6">
							<div class="title">
								Security & Reliability
							</div>
							<div class="description">
								Built with top-end technologies to keep your actives &amp; data away from intruders
							</div>
						</div>
						<div class="col-3"></div>
					</div>

					<div class="feature row">
						<div class="col-3"></div>
						<div class="body col-6">
							<div class="title">
								Easy to use
							</div>
							<div class="description">
								You don't have to learn about some dilemmas to get started
								With our step-to-step guidance you never will get a headache
							</div>
						</div>
						<div class="image-logo col-3 easy">
							<img v-if="false" src="@/assets/images/vectors/features/g3080.png">
						</div>
					</div>

					<div class="feature row">
						<div class="image-logo col-3 backup">
							<img v-if="false" src="@/assets/images/vectors/features/g2686.png">
						</div>
						<div class="body col-6">
							<div class="title">
								Your money is backed
							</div>
							<div class="description">
								You count with some back-end logics to keep you far, far away from hoaxes, scams and losses
								We keep in mind that your money is so important
							</div>
						</div>
						<div class="col-3"></div>
					</div>

					<div class="feature row">
						<div class="col-3"></div>
						<div class="body col-6">
							<div class="title">
								Get in touch
							</div>
							<div class="description">
								If you feeling doubt or need some help with something our blog is your place
								We have guides and rulesets which will help you a lot
							</div>
						</div>
						<div class="image-logo col-3 customer">
							<img v-if="false" src="@/assets/images/vectors/features/g3336.png">
						</div>
					</div>

				</div>
			</div>
		</div>
	</div>
</template>
<style scoped lang="stylus">
.welcome
	width 100%
	height 100%
	.main
		height 100%
		box-sizing border-box
		div
			padding 0
			margin 0
			&.text
				background-color #fff
				background-image url('../../assets/images/vectors/g5597.png')
				background-position bottom right
				background-size 70%
				background-repeat no-repeat
				background-color #fff
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
				background-image url('../../assets/images/vectors/g1017.png')
				background-position top center
				background-size 100%
				background-repeat no-repeat
				background-color #27273c
				.title
					height 80px
					padding 20px 40px
					padding-bottom 0
					font-size 20pt
					color #fff
				.features
					padding 0 40px
					.feature
						margin-bottom 10px
						.image-logo
							display flex
							flex-direction column
							justify-content center
							align-items center
							background-size contain
							background-position center
							background-repeat no-repeat
							min-height 100px
							&.security
								background-image url('../../assets/images/vectors/features/g3158.png')
								background-size 105%
							&.easy
								background-image url('../../assets/images/vectors/features/g3080.png')
							&.backup
								background-image url('../../assets/images/vectors/features/g2686.png')
							&.customer
								background-image url('../../assets/images/vectors/features/g3336.png')
							img
								width 130px
						.body
							.title
								padding 0
								margin 0
								height auto
							.description
								color #fff
</style>
<script>
export default {
	name: 'HomeWelcome',
	metaInfo: {
    title: 'Coindex · Getting started'
  },
}
</script>