<template>
  <div>
    <div class="articles">
      <h1>
        Articles
      </h1>
      <router-link v-for="article in articles" :key="article.id" :to="{ path: '/blog/article/' + article.id }" class="uk-comment">
        <div class="uk-comment-header">
          <div class="uk-grid-medium uk-flex-middle" uk-grid>
            <div class="uk-width-auto">
              <img
                class="uk-comment-avatar"
                :src="article.image.url"
                v-if="state === 'production'"
                height="100"
              />
              <img
                class="uk-comment-avatar"
                :src="api_url + article.image.url"
                v-else
                height="100"
              />
            </div>
            <div class="uk-width-expand">
              <h4 class="uk-comment-title uk-margin-remove">
                <div class="uk-link-reset">
                  {{ article.title }}
                </div>
              </h4>
              <ul class="uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top">
                <li>
                  <div>
                    {{ moment(article.published_at).format("MMM Do YY") }}
                  </div>
                </li>
                <li class="category-tag" v-for="category in article.categories" :key="category.id">
                  <router-link :to="'/blog/category/'+category.name">
                    {{ category.name }}
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>
<style scoped>
.uk-comment-avatar {
  width: 150px;
  max-height: 200px;
  height: auto;
}
.uk-comment {
  text-decoration: none;
  margin-bottom: 10px;
}
.uk-comment-header {
  border-bottom: 1px solid #f5f5f5 !important;
  padding: 20px;
  width: 95%;
}
.uk-comment-header:hover {
  background: #eee;
}
.category-tag:hover {
  color: #000;
}
</style>
<script>
import moment from "moment";
export default {
  data: function() {
    return {
      api_url: process.env.VUE_APP_STRAPI_API_URL || "http://localhost:1337",
      state: process.env.NODE_ENV,
      moment: moment
    };
  },
  props: {
    articles: Array
  },
  computed: {
    leftArticlesCount() {
      return Math.ceil(this.articles.length / 5);
    },
    leftArticles() {
      return this.articles.slice(0, this.leftArticlesCount);
    },
    rightArticles() {
      return this.articles.slice(this.leftArticlesCount, this.articles.length);
    }
  }
};
</script>
