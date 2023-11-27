<template>
	<div>
		<h2>{{ post.title }}</h2>
		<p>{{ post.content }}</p>
		<p class="text-muted">{{ post.createdAt }}</p>
		<hr class="my-4" />
		<div class="row g-2">
			<div class="col-auto">
				<button class="btn btn-outline-dark">이전글</button>
			</div>

			<div class="col-auto">
				<button class="btn btn-outline-dark">다음글</button>
			</div>
			<div class="col-auto me-auto"></div>
			<div class="col-auto">
				<button class="btn btn-outline-info" @click="goListPage">목록</button>
			</div>

			<div class="col-auto">
				<button class="btn btn-outline-primary" @click="goEditPage">
					수정 화면
				</button>
			</div>

			<div class="col-auto">
				<button class="btn btn-outline-danger" @click="remove">삭제</button>
			</div>
		</div>
	</div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { getPostById } from '@/api/posts';
import { deletePost } from '@/api/posts';
import { ref } from 'vue';

// props 받기 postListView 에서 id 로 던진 props 이고 routers.js 에 props:true 걸어줘야 함요
const props = defineProps({
	// id: String,
	id: Number,
});

const router = useRouter();
//router 에서 param 받음. 현재 props 예제하면서 잠깐 주석
// const route = useRoute();
// const id = route.params.id;

const post = ref({});
const fetchPost = async () => {
	try {
		//router 에서 param 받음. 현재 props 예제하면서 잠깐 주석
		const { data } = await getPostById(props.id);
		setPost(data);
	} catch (error) {
		console.log(error);
	}

	// post.value = { ...data };
};

const setPost = ({ title, content, createdAt }) => {
	post.value.title = title;
	post.value.content = content;
	post.value.createdAt = createdAt;
};
fetchPost();

const remove = async () => {
	try {
		if (confirm('삭제하시겠습니까?')) {
			await deletePost(props.id);
			router.push({
				name: 'PostList',
			});
		}
	} catch (error) {
		console.log(error);
	}
};

// const goListPage = () => {
// 	router.push('/posts');
// };

// const goEditPage = () => {
// 	router.push(`/posts/${route.params.id}`);
// };

const goListPage = () => router.push({ name: 'PostList' });
const goEditPage = () =>
	router.push({ name: 'PostEdit', params: { id: props.id } });
</script>

<style lang="scss" scoped></style>
