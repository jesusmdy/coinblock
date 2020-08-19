<template>
  <div>
    <ArticlesList :articles="posts"></ArticlesList>
  </div>
</template>

<script>
import ArticlesList from "../components/ArticlesList.vue";
import gql from "graphql-tag";

export default {
  components: {
    ArticlesList
  },
  data() {
    return {
      posts: []
    };
  },
  apollo: {
    posts: gql`
      query Articles {
        posts {
          id
          title
          content
          image {
            url
          }
          categories {
            name
          }
        }
      }
    `
  }
};
</script>
