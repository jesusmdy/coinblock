<template>
	<div class="row c justify-content-center align-items-center">
		<form
			action="./"
			method="post"
			class="
				col-sm
				@media all and (max-width: 760px)
					.row.c
						.uk-card
							height 100%
				col-md-8
				col-lg-8
				col-xl-8
				uk-card
				uk-card-default
				uk-card-body
			"
		>
			<a href="/" class="logo">
				<img src="@/assets/images/logo/logo.svg" alt="Logo">
			</a>
			<div class="title row">
				<div class="col-6 title">
					<legend class="uk-legend">Sign In</legend>
				</div>
				<div class="col-6 ssos">
					<button class="sso facebook">
						<img src="@/assets/images/icons/facebook.svg" />
					</button>
					<button class="sso google">
						<img src="@/assets/images/icons/google.svg" />
					</button>
				</div>
			</div>
			<div class="uk-margin">
				<input class="uk-input" type="email" required placeholder="New email">
			</div>
			<div class="uk-margin">
				<input class="uk-input" type="password" required placeholder="New password">
			</div>
			<div class="uk-margin foo">
				<button class="uk-button uk-button-primary">
					Continue
				</button>
			</div>
			<div class="uk-margin">
				<p>
					Do not have an account? <router-link to="./sign-up">Create an account now.</router-link>
				</p>
			</div>
		</form>
	</div>
</template>
<style scoped lang="stylus">
@media all and (max-width: 760px)
	.row.c
		.uk-card
			height 100%
			overflow auto
.row.c
	background-image url('../../assets/images/vectors/g5597.png')
	background-size 60%
	background-repeat no-repeat
	background-position bottom right
	width 100%
	height 100%
	.uk-card
		padding 50px 40px
		background none
		text-align center
		.logo
			display block
			padding-bottom 20px
			img
				width 70px
		.title.row
			div
				padding 0
				&.title
					text-align left
					legend
						padding 0 20px
						font-size 30pt
				&.ssos
					display flex
					flex-direction row
					justify-content flex-end
					align-items center
					.sso
						padding 10px
						margin 10px
						border-radius 30px
						border none
						background none
						cursor pointer
						&:hover
							box-shadow 0px 3px 5px #eee
						&.facebook
							margin-right 0
							img
								width 25px
								height 25px
						&.google
							margin-right 0
							img
								width 25px
								height 25px
		.uk-margin
			&.foo
				.uk-button
					width 100%
					color #fff
</style>
<script>
import '@/styles/pages/sign-up.styl'
export default {
	name: 'AuthSignIn'
}
</script>