import Vue from "vue";
import VueApollo from "vue-apollo";
import apolloClient from "@/vue-apollo";
import VueRouter from "vue-router";
import VueMeta from 'vue-meta'
import Api from '@/plugins/axios.api.js'
import StrapiApi from '@/plugins/strapi-sdk.api.js'
import store from '@/store'
import Uikit from '@/plugins/uikit.js'
import Auth from '@/plugins/auth.js'
import router from '@/router'

// File import
import "@/theme/default.scss"
import "@/styles/base.styl"
import "uikit/dist/js/uikit.min.js"
import "uikit/dist/js/uikit-icons.min.js"

// Component improt
import App from "./App.vue";
import Nav from "@/components/Nav.vue";

Vue.config.productionTip = false;
Vue.use(VueApollo);
Vue.use(VueRouter);
Vue.use(VueMeta)
Vue.use(Api)
Vue.use(StrapiApi)
Vue.use(Uikit)
Vue.use(Auth)

Vue.component('AppNav', Nav)

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
})

new Vue({
  apolloProvider,
  router,
  store,
  render: h => h(App)
}).$mount("#app");
