<template>
	<footer class="foo" :class="{ 'active': active }">
		<div class="expand">
			<button :class="{ 'open': active }" class="expand-button" @click="active ? active = false : active = true">
				<span class="icon"></span>
			</button>			
		</div>
		<div class="content row">
			<div class="col-sm-12 col-md-3 col-lg-3">
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa tempora, in molestias quis harum repudiandae quia, eveniet totam, similique laudantium fugit, ipsam esse. Iusto ipsum nulla illum, labore explicabo distinctio!
			</div>
			<div class="col-sm-12 col-md-9 col-lg-9">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Est maiores consequuntur eos? Rerum veritatis laudantium, libero mollitia recusandae numquam iste iusto nihil, eum explicabo suscipit eius nisi magni, iure perspiciatis.
			</div>
		</div>
	</footer>
</template>
<style scoped lang="stylus">
footer.foo
	position fixed
	transform translateY(330px)
	left 0
	right 0
	bottom 0
	height 300px
	max-height 300px
	min-height 300px
	background #fff
	box-shadow 0px -1px 5px rgba(0, 0, 0, 0.16)
	color #fff
	transition .2s
	&.active
		transform none
		transition .2s
	.content
		padding 40px
		margin-top -29px
		background #2c2c3f
		height 100%
		div
			padding 0
	.expand
		text-align center
		position absolute
		left 0
		right 0
		top -75px
		width 100%
		.expand-button
			height 50px
			width 50px
			border-radius 100%
			ouline none
			border none
			cursor pointer
			box-shadow 0px 3px 5px rgba(25, 25, 25, .50)
			transition .2s
			position relative
			.icon
				position absolute
				left 0
				right 0
				top 0
				bottom 0
				width 100%
				height 100%
				background-color #fff
				background-image url('../../assets/images/icons/chevron-up.svg')
				background-position center
				background-size 50%
				background-repeat no-repeat
				border-radius 100%
				transition .4s
			&.open
				margin-top 25px
				.icon
					transform rotate(180deg)
					transition .4s
</style>
<script>
export default {
	name: 'HomeFooter',
	data() {
		return {
			active: false
		}
	},
	mounted() {
		window.addEventListener("keydown", function(e) {
			switch(e.code) {
				case "ArrowDown":
					this.active = true
					break;
				case "ArrowUp":
					this.active = false
					break;
			}
		}.bind(this));
	}
}
</script>