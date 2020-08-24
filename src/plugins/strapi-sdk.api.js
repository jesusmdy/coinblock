import Vue from 'vue'
import Strapi from 'strapi-sdk-javascript'

const strapi = new Strapi(process.env.VUE_APP_STRAPI_API_URL)

export default {
	install () {
		Vue.prototype.$strapi = strapi
	}
}