import Vue from "vue";
import VueApollo from "vue-apollo";
import apolloClient from "./vue-apollo";
import VueRouter from "vue-router";
import VueMeta from 'vue-meta'

// File import
import "@/theme/default.scss"
import "@/styles/base.styl"
import "uikit/dist/css/uikit.min.css"
import "uikit/dist/js/uikit.min.js"
import "uikit/dist/js/uikit-icons.min.js"

// Component improt
import App from "./App.vue";
import Nav from "@/components/Nav.vue";

Vue.config.productionTip = false;
Vue.use(VueApollo);
Vue.use(VueRouter);
Vue.use(VueMeta)

Vue.component('AppNav', Nav)

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
});

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      components: require("./containers/Home/Index.vue"),
      redirect: '/welcome',
      children: [
        {
          path: 'welcome',
          components: require("./containers/Home/Welcome.vue")
        },
        {
          path: 'intro',
          components: require("./containers/Home/Intro.vue")
        }
      ]
    },
    {
      path: '/auth',
      redirect: '/auth/sign-in',
      components: require("./containers/Auth/Index.vue"),
      name: 'Auth',
      children: [
        {
          path: 'sign-in',
          components: require("./containers/Auth/SignIn.vue")
        },
        {
          path: 'sign-up',
          components: require("./containers/Auth/SignUp.vue")
        }
      ]
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
          path: "article/:slug",
          components: require(`./containers/Article.vue`)
        },
        {
          path: 'category/:category',
          components: require(`./containers/Blog/Category.vue`)
        }
      ]
    },
    {
      path: "*",
      components: require("./containers/assertion/404.vue")
    }
  ]
});

new Vue({
  apolloProvider,
  router,
  render: h => h(App)
}).$mount("#app");
