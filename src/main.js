import Vue from "vue";
import VueApollo from "vue-apollo";
import apolloClient from "./vue-apollo";
import VueRouter from "vue-router";
import 'uikit/dist/css/uikit.min.css'
import 'uikit/dist/js/uikit.min.js'
import 'uikit/dist/js/uikit-icons.min.js'
import App from "./App.vue";

Vue.config.productionTip = false;
Vue.use(VueApollo);
Vue.use(VueRouter);

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
});

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      components: require("./containers/Articles.vue")
    },
    {
      path: "/posts",
      components: require("./containers/Posts.vue")
    },
    {
      path: "/article/:id",
      components: require("./containers/Article.vue")
    },
    {
      path: "/category/:id",
      components: require("./containers/Category.vue")
    }
  ]
});

new Vue({
  apolloProvider,
  router,
  render: h => h(App)
}).$mount("#app");
