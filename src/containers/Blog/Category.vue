<template>
	<div>
		<h2>Sort by #{{ $route.params.category }}</h2>
    <div v-if="$apollo.queries.categories.loading" class="uk-card">
      <div class="uk-card-body">
        <div uk-spinner></div>        
      </div>
    </div>
    <div class="uk-card" v-if="!categories[0] && !$apollo.queries.categories.loading">
      <div class="uk-card-body">
        Category not found
      </div>
    </div>
    <ArticlesFiltered v-if="categories[0]" :category="categories[0]" />
	</div>
</template>
<script>
import gql from "graphql-tag";
export default {
  name: 'Categories',
  components: {
    ArticlesFiltered: () => import(`../../components/Blog/ArticlesFiltered.vue`)
  },
  data() {
    return {
			categories: {}
    }
  },
  apollo: {
    categories: {
      query: gql`
        query findCategory($whereSlug: JSON!) {
          categories(where: $whereSlug) {
            id
            name
            slug
            posts {
              id
              title
              image {
                url
              }
              published_at
              slug
            }
          }
        }
      `,
      variables() {
        return {
          "whereSlug": {
						"slug": this.$route.params.category
					}
        }
      }
    }
  }
}
</script>
