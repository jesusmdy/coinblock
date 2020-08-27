<template>
	<div class="info-badge container-fluid">
		<div class="row no-gutters">
			<nav class="col-12 uk-navbar-container" uk-navbar>
				<div class="uk-navbar-left">
					<ul class="uk-navbar-nav">
						<li class="sidebar-trigger">
							<a href="#" @click.prevent="$emit('sidebarTrigger')">
								Menu
							</a>
						</li>
						<li>
							<router-link to="/">
								Go back
							</router-link>
						</li>
					</ul>
				</div>
				<div class="uk-navbar-right">
					<ul class="uk-navbar-nav">
						<li>
							<a @click="$store.commit('logout')">Sign Out</a>
						</li>
					</ul>
				</div>
			</nav>
			<div class="section col-sm-12 col-md-4 col-lg-4 col-xl-4 sidebar">
				<div
          v-if="profile.avatar && profile.avatar.id"
          class="avatar"
          :style="{
            'background-image': `url(${api_url}${profile.avatar.url})`
          }"
        />
        <div v-else class="avatar" />
			</div>
			<div class="section col-sm-12 col-md-8 col-lg-8 col-xl-8 content">
				<div class="content-title">
					<h3>Account resume</h3>
					<h2>
						{{ profile.display_name }}
					</h2>					
				</div>
				<div class="container-fluid">
					<div class="loading" v-if="loading">
						<span uk-spinner/>
					</div>
					<div class="row no-gutters">
						<div class="col-sm-12 col-md-6 col-lg-6 col-xl-6 balance">
							<div class="balance">
								<p class="title">
									Current balance
									·
									<b><small>₿ {{ wallet.balance }}</small></b>
								</p>
								<div
									v-for="price in currency_price"
									class="balance-item"
									:key="price.code"
								>
									<b v-html="price.symbol" />
									{{ calculate(wallet.balance, price.rate_float) }}
								</div>
							</div>							
						</div>
						<div v-if="bitcoin_price" class="col-sm-12 col-md-6 col-lg-6 col-xl-6 price">
							<p class="title">
								Bitcoin price
								·
								<b><small>{{ moment(bitcoin_price.time.updatedISO).format("MMM Do YY") }}</small></b>
								<a href="#" @click.prevent="getBitcoinData" class="uk-badge uk-float-right">Refresh</a>
							</p>
							<div class="bpis">
								<div
									class="bpi"
									v-for="price in currency_price"
									:key="price.code"
									:title="price.description"
								>
									{{ price.code }}
									<span class="uk-badge">
										<b v-html="price.symbol" />
										{{ currencyFormat(price.rate_float) }}
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<style scoped lang="stylus">
.sidebar-trigger
	display none
@media all and (max-width: 760px)
	.sidebar-trigger
		display block
	.info-badge
		.row
			.section
				&.sidebar
					padding 40px
					padding-bottom 10px
				&.content
					.content-title
						padding 10px
						text-align center
						h3
							font-size 12pt
					.container-fluid
						.row
							.balance
								text-align center
								.title
									text-align left
								.balance-item
									display inline-block
							.price
								text-align center
								.title
									text-align left
								.bpi
									display inline-block
									margin 0 5px !important
									margin-bottom 10px !important
.info-badge
	padding 0
	.row
		padding 0
		margin 0
		.uk-navbar-container
			box-shadow 0 10px 30px rgba(0,0,0,0.05)
			position sticky
			left 0
			right 0
			top 0
			z-index 50
		.section
			padding 0
			margin 0
			&.sidebar
				display flex
				flex-direction column
				justify-content center
				align-items center
				.avatar
					width 170px
					height 170px
					background-color #eee
					background-size cover
					background-position center
					border-radius 100%
			&.content
				padding 10px 0
				.content-title
					h2, h3
						padding 0
						margin 0
					h2
						margin-bottom 10px
				.container-fluid
					padding 0
					box-shadow 0 0 5px #eee
					box-sizing border-box
					position relative
					border-radius 10px
					.loading
						position absolute
						left 0
						right 0
						bottom 0
						top 0
						width 100%
						height 100%
						background-color #fff
						z-index 100
						display flex
						flex-direction column
						justify-content center
						align-items center
					.row
						.balance, .price
							padding 0
							margin 0
							&.balance
								p.title
									font-size 14pt
									margin 0
									padding 0
									padding 10px 20px
									margin 10px
									background-color #eee
									border-radius 30px
								.balance-item
									margin 10px
									border-radius 30px
									padding 10px 20px
									cursor pointer
									&:hover
										background-color #eee
							&.price
								p.title
									font-size 14pt
									margin 0
									padding 0
									padding 10px 20px
									margin 10px
									background-color #eee
									border-radius 30px
								.bpis
									.bpi
										margin 10px
										border-radius 30px
										padding 10px 20px
										cursor pointer
										&:hover
											background-color #eee
</style>
<script>
import axios from 'axios'
import moment from 'moment'
export default {
	name: 'InfoBadge',
	data() {
		return {
			api_url: process.env.VUE_APP_STRAPI_API_URL || "http://localhost:1337",
			wallet: {
				balance: 3.59188189
			},
			bitcoin_price: null,
			currency_price: null,
			moment,
			loading: false
		}
	},
	methods: {
		currencyFormat(num) {
			return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
		},
		calculate(btcAmmount, rate) {
			return this.currencyFormat(btcAmmount * parseInt(rate));
		},
		getBitcoinData() {
			this.loading = true
			axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
			.then(res => {
				this.bitcoin_price = res.data
				this.currency_price = [this.bitcoin_price.bpi['USD'], this.bitcoin_price.bpi['EUR'], this.bitcoin_price.bpi['GBP']]
				this.loading = false
			})			
		}
	},
	mounted() {
		this.getBitcoinData()
	},
	computed: {
		user() {
			return this.$store.getters.getUser
		},
		profile() {
			return this.$store.getters.getProfile
		}
	}
}
</script>