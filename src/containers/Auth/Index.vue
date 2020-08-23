<template>
	<div class="main">
		<div class="row viewport">
			<div class="col-sm-12 col-md-6 col-lg-6 col-xl-6 sidebar-content">
				<div class="o a" />
				<div class="o b" />
				<div class="o c" />
				<div
					class="o d"
					:class="{
						'sign-up': $route.path == '/auth/sign-up',
						'sign-in': $route.path == '/auth/sign-in'
					}"
				/>
			</div>
			<div
				class="
					col-sm-12col-md-6
					col-lg-6
					col-xl-6
					flex-sm-first
					flex-md-last
					flex-lg-last
					flex-xl-last
					router-view
				"
			>
				<transition name="fade" mode="out-in" appear>
					<router-view />
				</transition>
			</div>
		</div>
	</div>
</template>
<style lang="stylus" scoped>
.fade-enter-active, .fade-leave-active
	transition opacity 0.3s
.fade-enter, .fade-leave-active
	opacity 0
@media all and (max-width: 760px)
	.main
		.viewport
			.sidebar-content
				display none
.main
	background #27273c
	position fixed
	left 0
	right 0
	top 0
	bottom 0
	width 100%
	height 100%
	display flex
	flex-direction column
	justify-content center
	align-items center
	.viewport
		background #fff
		width 100%
		height 100%
		div
			padding 0
			margin 0
			height 100%
			&.router-view
				position relative
				overflow hidden
				background #fff
			&.sidebar-content
				color #444
				.o
					position absolute
					left 0
					right 0
					top 0
					bottom 0
					width 100%
					height 100%
					background-repeat no-repeat
					&.a
						background-image url('../../assets/images/vectors/g1017.png')
						background-size 100%
						background-position top left
						display none
					&.b
						background-image url('../../assets/images/vectors/g1055.png')
						background-size 70%
						background-position bottom right
						display none
					&.c
						background-image url('../../assets/images/vectors/g5637.png')
						background-size 70%
						background-position top right
						display none
					&.d
						background-size 80%
						background-position center
						&.sign-up
							background-image url('../../assets/images/vectors/g1265.png')
						&.sign-in
							background-image url('../../assets/images/vectors/g2507.png')
</style>
<script>
export default {
	name: 'AuthIndex'
}
</script>