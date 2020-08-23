<template>
  <div>
    <nav class="uk-navbar-container" uk-navbar>
      <div class="uk-navbar-left">
        <ul class="uk-navbar-nav">
          <li class="logo">
            <img src="@/assets/images/logo/logo.svg" alt="">
            <router-link to="/">Coinblock</router-link>
          </li>
          <li>
            <router-link to="/blog">Blog</router-link>
          </li>
        </ul>
      </div>

      <div class="uk-navbar-right">
        <ul class="uk-navbar-nav">
          <li>
            <router-link to="/auth/sign-up">
              Sign Up
            </router-link>
          </li>
          <li>
            <router-link to="/auth/sign-in">
              Sign In
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>
<style scoped>
  .uk-navbar-container {
    border-bottom: 1px solid #eee;
    padding: 0 40px;
  }
  .uk-navbar-container > .uk-navbar-left > .uk-navbar-nav > .logo {
    display: flex;
    padding-right: 20px;
    border-right: 1px solid #eee;
  }
  .uk-navbar-container > .uk-navbar-left > .uk-navbar-nav > .logo:hover {
    border-right-color: #ddd;
  }
  .uk-navbar-container > .uk-navbar-left > .uk-navbar-nav > .logo > img {
    width: 45px;
    display: block;
  }
  .uk-navbar-container > .uk-navbar-left > .uk-navbar-nav > .logo > a {
    color:  #444;
  }
</style>
<script>
export default {
  name: "Nav"
}
</script>
