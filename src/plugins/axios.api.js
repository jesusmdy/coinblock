import axios from "axios";
import Vue from 'vue'

const instance = createInstance(process.env.VUE_APP_STRAPI_API_URL)

function createInstance(baseURL){
return axios.create({
		baseURL,
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${localStorage.token}`
		}
	})
}

export default {
	install () {
		Vue.prototype.$api = instance
	}
};