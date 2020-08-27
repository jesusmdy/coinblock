<template>
	<div>
		<InfoBadge @sidebarTrigger="$emit('sidebarTrigger')" />
	</div>
</template>
<script>
import InfoBadge from '@/components/User/InfoBadge.vue'
export default {
	name: 'Overview',
	components: {
		InfoBadge
	}
}
</script>