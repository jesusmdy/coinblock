<template>
	<div>
		<ArticlesList :articles="category.posts" />
	</div>
</template>
<script>
export default {
	name: 'ArticlesFiltered',
	props: {
		category: Object
	},
	components: {
		ArticlesList: () => import(`../ArticlesList`)
	}
}
</script>