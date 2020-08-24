import axios from "axios";
import Vue from 'vue'

const instance = createInstance(process.env.VUE_APP_STRAPI_API_URL)

function createInstance(baseURL){
let headers = {
	'Content-Type': 'application/json'
}
if (localStorage['jwt']) {
	headers['Authorization'] = `Bearer ${localStorage['jwt']}`
} else {
	window.localStorage.removeItem('jwt')
}
return axios.create({
		baseURL,
		headers
	})
}

export default {
	install () {
		Vue.prototype.$api = instance
	}
};