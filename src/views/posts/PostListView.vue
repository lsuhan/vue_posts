<template>
	<div>
		<h2>{{ $route.name }}</h2>
		<hr class="my-4" />
		<div class="row g-3">
			<div v-for="post in posts" :key="post.id" class="col-4">
				<PostItem
					:title="post.title"
					:content="post.content"
					:created-at="post.createdAt"
					@click="goPage(post.id)"
				></PostItem>
			</div>
		</div>
	</div>
</template>

<script setup>
import PostItem from '@/components/posts/PostItem.vue';
import { ref } from 'vue';
import { getPosts } from '@/api/posts';
import { useRouter } from 'vue-router';
const posts = ref([]);
const router = useRouter();

const fetchPosts = () => {
	posts.value = getPosts();
};

fetchPosts();

const goPage = id => {
	router.push(`/posts/${id}`);

	//이렇게 객체 형식으로 이동 할수도 있다. name은 router.js 에 있는 이름을 통해 routing 하는거고 params 는 파라미터를 가져갈수있다.
	//localhost:3000/posts/2?searchText=hello#world
	// router.push({
	// 	name: 'PostDetail',
	// 	params: {
	// 		id,
	// 	},
	// 	query: {
	// 		searchText: 'hello',
	// 	},
	// 	hash: '#world',
	// });
};
</script>

<style lang="scss" scoped></style>
