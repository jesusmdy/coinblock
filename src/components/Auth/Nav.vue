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
  .uk-navbar-nav > li > a {
    color: #444;
  }
  .uk-navbar-container {
    background: rgba(255, 255, 255, .50) !important;
    backdrop-filter: blur(20px);
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    width: 100%;
    box-sizing: border-box;
    padding: 0 40px;
    box-shadow: 0px 3px 5px rgba(25, 25, 25, .10);
  }
  .uk-navbar-container > .uk-navbar-left > .uk-navbar-nav > .logo {
    display: flex;
    padding-right: 20px;
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
import gql from "graphql-tag";

export default {
  name: "Nav",
  data() {
    return {
      categories: []
    };
  },
  apollo: {
    categories: gql`
      query Categories {
        categories {
          id
          name
        }
      }
    `
  }
};
</script>
