<template>
	<div class="carousel">
		<slider ref="slider" :options="options">
			<slideritem
				v-for="(item,index) in someList"
				:key="index"
				:style="{
					...item.style,
					'background-image': `url(${item.sub_bg.image})`,
					'background-size': item.sub_bg.size,
					'background-position': item.sub_bg.config,
					'background-repeat': 'no-repeat'
				}"
			>
				<div class="row no-gutters">
					<div
						:style="{
							'background-image': `url(${item.image})`
						}"
						class="col-sm-12 col-md-5 col-lg-5 image"
					/>
					<div class="col-sm-12 col-md-7 col-lg-7 content">
						<div class="overflow">
							<div class="title">{{ item.title }}</div>
							<div class="description">{{ item.description }}</div>
						</div>
					</div>
				</div>
			</slideritem>
		</slider>
	</div>
</template>
<style scoped lang="stylus">
.carousel
	height 100% !important
.slider-item
	background-repeat no-repeat
	.row
		height 100%
		width 100%
		.image
			background-size 70%
			background-position center
			background-repeat no-repeat
		.content
			.overflow
				display flex
				flex-direction column
				justify-content center
				align-items flex-start
				padding 0 40px
				height 100%
				.title
					font-size 17pt
				.description
					font-size 14pt
					white-space normal !important
					text-align left
</style>
<style scoped>
.carousel {
	height: 500px;
}
.slider-item {
  transform:scale(0.8);
  transition-timing-function: ease;
  transition-duration: 300ms;
}
.slider-item.slider-active {
  transform:scale(1.0);
  z-index: 999;
}
.slider-item.slider-active-copy {
  transform:scale(1.0);
  z-index: 999;
}
</style>
<script>
// import slider components
import { slider, slideritem } from 'vue-concise-slider'
export default {
   name: 'Test',
   data () {
      return {
        someList:[
          {
            title: 'Security & Reliability',
            description: `
            	Built with top-end technologies to keep your actives & data away from intruders
            `,
            image: '/assets/features/security.png',
            sub_bg: {
							image: '/assets/g907.png',
							config: 'bottom left',
							size: '70%'
            },
            style: {
              'background': '#673AB7'
            }
          },
          {
            title: 'Easy to use',
            description: `
            	You don't have to learn about some dilemmas to get started
							With our step-to-step guidance you never will get a headache
						`,
            image: '/assets/features/easy.png',
            sub_bg: {
							image: '/assets/g1055.png',
							config: 'bottom right',
							size: '70%'
            },
            style: {
              'background': '#FF5722'
            }
          },
          {
            title: 'Your money is backed',
            description: `
            	You count with some back-end logics to keep you far, far away from hoaxes, scams and losses
							We keep in mind that your money is so important
						`,
            image: '/assets/features/backup.png',
            sub_bg: {
							image: '/assets/path1854.png',
							config: 'bottom left',
							size: '70%'
            },
            style: {
              'background': '#1bbc9b'
            }
          },
          {
            title: 'Get in touch',
            description: `
            	If you feeling doubt or need some help with something our blog is your place
							We have guides and rulesets which will help you a lot
						`,
            image: '/assets/features/customer.png',
            sub_bg: {
							image: '/assets/g1017.png',
							config: 'top right',
							size: '100%'
            },
            style: {
              'background': '#880E4F'
            }
          }
        ],
				options: {
					itemAnimation: true,
					centeredSlides: true,
					loopedSlides: 2,
					slidesToScroll: 1,
					autoplay: 3000,
					direction: 'horizontal'
				}
      }
    },
    components: {
      slider,
      slideritem
    }
}
</script>