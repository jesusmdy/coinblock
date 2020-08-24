import VueRouter from  'vue-router'

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      components: require("@/containers/Home/Index.vue"),
      redirect: '/welcome',
      children: [
        {
          path: 'welcome',
          components: require("@/containers/Home/Welcome.vue")
        },
        {
          path: 'intro',
          components: require("@/containers/Home/Intro.vue")
        }
      ]
    },
    {
      path: '/user',
      redirect: '/user/me',
      name: 'User',
      components: require("@/containers/User/Index.vue"),
      meta: {
        requiresAuth: true
      },
      children: [
        {
          path: 'me',
          name: 'UserMe',
          components: require("@/containers/User/Me.vue")
        }
      ]
    },
    {
      path: '/auth',
      redirect: '/auth/sign-in',
      components: require("@/containers/Auth/Index.vue"),
      name: 'Auth',
      meta: {
				guest: true
      },
      children: [
        {
          path: 'sign-in',
          components: require("@/containers/Auth/SignIn.vue")
        },
        {
          path: 'sign-up',
          components: require("@/containers/Auth/SignUp.vue")
        }
      ]
    },
    {
      path: "/blog",
      redirect: "/blog/articles",
      components: require(`@/containers/Blog.vue`),
      name: "Blog",
      meta: {
				requiresAuth: true
      },
      children: [
        {
          path: "articles",
          components: require(`@/containers/Articles.vue`)
        },
        {
          path: "article/:slug",
          components: require(`@/containers/Article.vue`)
        },
        {
          path: 'category/:category',
          components: require(`@/containers/Blog/Category.vue`)
        }
      ]
    },
    {
      path: "*",
      components: require("@/containers/assertion/404.vue")
    }
  ]
})

router.beforeEach((to, from, next) => {
	if (to.matched.some(record => record.meta.requiresAuth)) {
		if (localStorage.getItem('jwt')) {
			next()
		} else {
			next({
				path: '/auth/sign-in',
				params: {
					redirect: to.fullPath
				}
			})
		}
	} else if(to.matched.some(record => record.meta.guest)) {
		if (localStorage.getItem('jwt')) {
			next({ path: '/' })
		} else {
			next()
		}
	} else {
		next()
	}
})

export default router