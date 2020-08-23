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
  @media all and (max-width: 760px) {
    .uk-navbar-container {
      position: relative !important;
    }
  }
  .uk-navbar-nav > li > a {
    color: #fff;
  }
  .uk-navbar-container {
    background: none !important;
    padding: 0 40px;
    z-index: 100;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    width: 100%;
    box-sizing: border-box;
  }
  .uk-navbar-container > .uk-navbar-left > .uk-navbar-nav li a {
    color: #444;
  }
  .uk-navbar-container > .uk-navbar-right > .uk-navbar-nav li a {
    color: #fff;
  }
  .uk-navbar-container > .uk-navbar-left > .uk-navbar-nav > .logo {
    display: flex;
    padding-right: 20px;
  }
  .uk-navbar-container > .uk-navbar-left > .uk-navbar-nav > .logo > img {
    width: 45px;
    display: block;
  }
</style>
<script>
export default {
  name: "Nav"
}
</script>
