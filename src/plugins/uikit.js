import Vue from "vue"
import uikit from 'uikit'
export default {
	install () {
		Vue.prototype.$uikit = uikit
	}
}