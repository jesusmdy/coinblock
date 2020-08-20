<template>
  <div>
    <div class="post" v-if="post">
      <div
        v-if="post.image"
        id="banner"
        class="uk-height-small uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding"
        :data-src="api_url + post.image.url"
        uk-img
      >
      </div>

      <div class="uk-section">
        <div class="uk-container uk-container-small">
          <h2>{{ post.title }}</h2>
          <vue-markdown-it
            v-if="post.content"
            :source="post.content"
            id="editor"
          />
          <div class="meta" v-uf="post.categories">
            <router-link
              class="uk-badge"
              v-for="category in post.categories"
              :key="category.id"
              :to="'/blog/category/' + category.slug"
            >
              {{ category.name }}
            </router-link>
          </div>
          <p v-if="post.published_at && post.user">
            Posted by
            <router-link :to="'/blog/by-user/' + post.user.username">
              {{ post.user.username }}              
            </router-link>
            ·
            <router-link :to="'/blog/by-date/' + post.published_at">
              {{ moment(post.published_at).format("MMM Do YY") }}
            </router-link>
          </p>
          <p v-else-if="post.published_at">
            {{ moment(post.published_at).format("MMM Do YY") }}
          </p>
        </div>
      </div>      
    </div>
  </div>
</template>

<script>
var moment = require("moment");
import VueMarkdownIt from "vue-markdown-it";
import gql from "graphql-tag";

export default {
  name: 'Article',
  data() {
    return {
      posts: [],
      post: null,
      title: undefined,
      moment: moment,
      api_url: process.env.VUE_APP_STRAPI_API_URL || "http://localhost:1337",
      routeParam: this.$route.params.id
    };
  },
  metaInfo() {
    return {
      title: this.post ? this.post.title : 'Blog Article'
    }
  },
  components: {
    VueMarkdownIt
  },
  apollo: {
    posts: {
      query: gql`
        query Post($whereSlug: JSON!) {
          posts(where: $whereSlug) {
            id
            title
            content
            image {
              url
            }
            published_at
            categories {
              id
              name
              slug
            }
            slug
            abstract
            user {
              username
            }
          }
        }
      `,
      variables() {
        return {
          "whereSlug": {
            "slug": this.$route.params.slug
          }
        }
      }
    }
  },
  watch: {
    'posts': function (){
      this.post = this.posts[0]
    }
  }
};
</script>
