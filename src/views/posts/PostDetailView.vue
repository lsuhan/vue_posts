<template>
	<div>
		<h2>{{ form.title }}</h2>
		<p>{{ form.content }}</p>
		<p class="text-muted">{{ form.createdAt }}</p>
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
				<button class="btn btn-outline-danger">삭제</button>
			</div>
		</div>
	</div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { getPostById } from '@/api/posts';
import { ref } from 'vue';

// props 받기 postListView 에서 id 로 던진 props 이고 routers.js 에 props:true 걸어줘야 함요
const props = defineProps({
	// id: String,
	id: Number,
});

console.log(props.id);

const router = useRouter();
//router 에서 param 받음. 현재 props 예제하면서 잠깐 주석
// const route = useRoute();
// const id = route.params.id;

const form = ref({});
const fetchPost = () => {
	//router 에서 param 받음. 현재 props 예제하면서 잠깐 주석
	const data = getPostById(props.id);
	form.value = { ...data };
};
fetchPost();
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
