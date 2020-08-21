<template>
	<div class="home">
		<AppNav />
		<div class="intro row no-gutters">
			<div class="col-sm-12 col-md-8 col-lg-8 col-xl-8 main">
				<div class="header">
					<img src="@/assets/images/logo/logo.svg" alt="Logo"/>
					<h2>Coindex</h2>				
				</div>				
			</div>
			<div class="col-sm-12 col-md-4 col-lg-4 col-xl-4 side">
				<div class="row items">
					<router-link class="col-6 blog" to="/blog">
						Blog
					</router-link>
					<router-link class="col-6" to="/auth/sign-in">
						Sign In
					</router-link>
				</div>
			</div>
		</div>
	</div>
</template>
<style lang="stylus" scoped>
.intro.row
	padding 0
	margin 0
	div
		height 400px
		margin 0
		padding 0
		&.main
			.header
				display flex
				flex-direction column
				justify-content center
				align-items center
				background #eee
				img
					width 100px
					height auto
					margin 0
					padding 0
				h2
					text-transform uppercase
		&.side
			.items
				a
					height 100px
					max-height 100px
					padding 0
					padding-top 40px
					font-size 30px
					text-align center
					text-decoration none
					color #444
					&:hover
						background #eee
</style>
<script>
export default {
	name: 'HomeIndex',
	metaInfo: {
    title: 'Coindex · Home'
  },
}
</script>