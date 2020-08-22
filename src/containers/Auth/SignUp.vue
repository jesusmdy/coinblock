<template>
	<div class="container">
		<div class="row justify-content-center">
			<form action="./" method="post" class="col-sm-12 col-md-5 col-lg-5 col-xl-5 uk-card uk-card-default uk-card-body">
				<div class="logo">
					<img src="@/assets/images/logo/logo.svg" />
					<h1 class="uk-card-title">Sign Up</h1>
				</div>
				<legend class="uk-legend">Create a new account</legend>
				<div class="uk-margin">
					<input class="uk-input" type="email" required placeholder="New email">
				</div>
				<div class="uk-margin">
					<input class="uk-input" type="text" required placeholder="New username">
				</div>
				<div class="uk-margin">
					<input class="uk-input" type="password" required placeholder="New password">
				</div>
				<div class="row no-gutters footer">
					<div class="col-sm-12 col-md-6 col-lg-6 uk-text-center">
						<router-link class="uk-button uk-button-link" to="/auth/sign-in">Sign In</router-link>
					</div>
					<div class="col-sm-12 col-md-6 col-lg-6">
						<button class="uk-button uk-button-primary">Continue</button>
					</div>
				</div>
			</form>
		</div>
	</div>
</template>
<style scoped lang="stylus">
.uk-button-primary
	border-radius 30px
	box-shadow 0px 3px 5px #eee
</style>
<script>
import '@/styles/pages/sign-up.styl'
export default {
	name: 'AuthSignIn'
}
</script>