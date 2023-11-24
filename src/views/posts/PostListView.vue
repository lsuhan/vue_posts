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
		<hr />
		<!--id로 props 전달-->
		<AppCard>
			<PostDetailView :id="3"></PostDetailView>
		</AppCard>
	</div>
</template>

<script setup>
import PostDetailView from './PostDetailView.vue';
import PostItem from '@/components/posts/PostItem.vue';
import AppCard from '@/components/AppCard.vue';
import { ref } from 'vue';
import { getPosts } from '@/api/posts';
import { useRouter } from 'vue-router';
const posts = ref([]);
const router = useRouter();

const fetchPosts = async () => {
	try {
		const { data } = await getPosts();
		posts.value = data;
	} catch (error) {
		console.log(error);
	}

	//위에 문법이랑 똑같은 문법
	// ({ data: posts.value } = await getPosts());

	//a async 로 사용할게용
	// getPosts()
	// 	.then(response => {
	// 		console.log(response);
	// 	})
	// 	.catch(error => {
	// 		console.log('error', error);
	// 	});
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
