<template>
	<div>
		<div class="uk-card uk-card-default uk-card-body">
			<h3 class="uk-card-title">
				Categories
			</h3>
      <div v-if="$apollo.queries.categories.loading" class="loader">
        <div uk-spinner></div>        
      </div>
			<ul class="uk-list">
				<li v-for="category in categories" :key="category.id">
          <router-link :to="'/blog/category/'+category.slug">
            #{{ category.name }}
          </router-link>
				</li>
			</ul>
		</div>
	</div>
</template>
<style scoped>
.uk-list li a {
  display: block;
  width: 100%;
  padding: 10px 0;
}
.loader {
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
<script>
import moment from 'moment';
import gql from "graphql-tag";
export default {
	name: 'Categories',
	data() {
		return {
			categories: [],
      moment: moment
		}
	},
	apollo: {
		categories: gql`
		  query categories {
		    categories {
		      id
		      name
		      slug
		      created_at
		    }
		  }
		`
	}
}
</script>