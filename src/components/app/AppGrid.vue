<template>
	<div v-for="post in items" :key="post.id" class="col-4">
		<slot :item="post"></slot>
	</div>
</template>

<script setup>
defineProps({
	items: {
		type: Array,
		required: true,
	},
});
defineEmits(['goPage']);
</script>

<style lang="scss" scoped></style>
