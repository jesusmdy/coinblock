<template>
	<div>
		<h2>Sort by #{{ $route.params.category }}</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci atque omnis obcaecati nulla, deleniti nobis blanditiis et officiis dolorum iste veniam quos! Expedita dicta, iure quia eligendi, temporibus esse porro.
    </p>
	</div>
</template>
<script>
import gql from "graphql-tag";
export default {
  name: 'Categories',
  data() {
    return {
      posts: []
    }
  },
  apollo: {
    posts: {
      query: gql`
        query Categories {
          categories {
            id
            name
            slug
          }
        }
      `,
      variables() {
        return {
          id: 2,
          slug: this.$route.params.category
        };
      }
    }
  }
}
</script>