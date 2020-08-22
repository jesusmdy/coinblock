<template>
	<div class="container">
		<div class="row justify-content-center">
			<form action="./" method="post" class="col-sm-12 col-md-5 col-lg-5 col-xl-5 uk-card uk-card-muted uk-card-body">
				<div class="logo">
					<img src="@/assets/images/logo/logo.svg" />
					<h1 class="uk-card-title">Sign In</h1>
				</div>
				<legend class="uk-legend">Continue with your account</legend>
				<div class="uk-margin">
					<input class="uk-input" type="email" required placeholder="Your email">
				</div>
				<div class="uk-margin">
					<input class="uk-input" type="password" required placeholder="Your password">
				</div>
				<div class="row no-gutters footer">
					<div class="col-sm-12 col-md-6 col-lg-6 uk-text-center">
						<div class="uk-text-muted">
							Don't you have an account yet? <router-link to="/auth/sign-up">Sign Up!</router-link>
						</div>
					</div>
					<div class="col-sm-12 col-md-6 col-lg-6">
						<button class="uk-button uk-button-primary">Confirm</button>
					</div>
				</div>
			</form>
		</div>
		<div class="card"></div>
	</div>
</template>
<script>
import '@/styles/pages/sign-in.styl'
export default {
	name: 'AuthSignIn'
}
</script>