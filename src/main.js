import Vue from "vue";
import VueApollo from "vue-apollo";
import apolloClient from "./vue-apollo";
import VueRouter from "vue-router";
import VueMeta from 'vue-meta'
import "uikit/dist/css/uikit.min.css"
import "uikit/dist/js/uikit.min.js"
import App from "./App.vue";

Vue.config.productionTip = false;
Vue.use(VueApollo);
Vue.use(VueRouter);
Vue.use(VueMeta)

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
      path: "/blog",
      redirect: "/blog/articles",
      components: require(`./containers/Blog.vue`),
      name: "Blog",
      children: [
        {
          path: "articles",
          components: require(`./containers/Articles.vue`)
        },
        {
          path: "article/:id",
          components: require(`./containers/Article.vue`)
        },
        {
          path: 'category/:category',
          components: require(`./containers/Blog/Category.vue`)
        }
      ]
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
