<template>
  <div id="app">
    <router-view @logout="$router.push({ path: '/auth/sign-out' })" :key="$route.fullPath"></router-view>
  </div>
</template>

<script>

export default {
  name: "App",
  metaInfo: {
    title: 'Coinblock',
    titleTemplate: '%s · Coinblock'
  },
  mounted() {
    this.$store.commit('toggleLoadingUserData', true)
    this.$api.get('/users/me')
    .then(response => {
      const user = response.data
      this.$api.get(`/profiles/${user.id}`)
      .then(res => {
        this.$store.commit('setUser', user)
        this.$store.commit('setProfile', res.data)
        this.$store.commit('toggleLoadingUserData', false)
      })
    })
  }
}
</script>

<style lang="css">
a {
  text-decoration: none;
}

h1 {
  font-family: Staatliches;
  font-size: 120px;
}

#category {
  font-family: Staatliches;
  font-weight: 500;
}

#title {
  letter-spacing: 0.4px;
  font-size: 22px;
  font-size: 1.375rem;
  line-height: 1.13636;
}

#banner {
  margin: 20px;
  height: 800px;
}

#editor {
  font-size: 16px;
  font-size: 1rem;
  line-height: 1.75;
}

.uk-navbar-container {
  background: #fff !important;
  font-family: Staatliches;
}

img:hover {
  opacity: 1;
  transition: opacity 0.25s cubic-bezier(0.39, 0.575, 0.565, 1);
}
</style>
