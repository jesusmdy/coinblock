<template>
  <div>
    <div
      v-if="post.image"
      id="banner"
      class="uk-height-small uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding"
      :data-src="api_url + post.image.url"
      uk-img
    >
      <h1>{{ post.title }}</h1>
    </div>

    <div class="uk-section">
      <div class="uk-container uk-container-small">
        <vue-markdown-it
          v-if="post.content"
          :source="post.content"
          id="editor"
        />
        <p v-if="post.published_at">
          {{ moment(post.published_at).format("MMM Do YY") }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
var moment = require("moment");
import VueMarkdownIt from "vue-markdown-it";
import gql from "graphql-tag";

export default {
  data() {
    return {
      post: {},
      moment: moment,
      api_url: process.env.VUE_APP_STRAPI_API_URL || "http://localhost:1337",
      routeParam: this.$route.params.id
    };
  },
  components: {
    VueMarkdownIt
  },
  apollo: {
    post: {
      query: gql`
        query Posts($id: ID!) {
          post(id: $id) {
            id
            title
            content
            image {
              url
            }
            published_at
          }
        }
      `,
      variables() {
        return {
          id: this.routeParam
        };
      }
    }
  }
};
</script>
