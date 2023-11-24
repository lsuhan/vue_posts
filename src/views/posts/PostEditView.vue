<template>
	<div>
		<h2>게시글 수정</h2>
		<hr class="my-4" />
		<form @submit.prevent="edit" action="">
			<div class="mb-3">
				<label for="exampleFormControlInput1" class="form-label">제목</label>
				<input
					v-model="form.title"
					type="text"
					class="form-control"
					id="title"
				/>
			</div>
			<div class="mb-3">
				<label for="exampleFormControlTextarea1" class="form-label">내용</label>
				<textarea
					v-model="form.content"
					class="form-control"
					id="contents"
					rows="3"
				></textarea>
			</div>
			<div class="pt-4">
				<button
					type="button"
					class="btn btn-outline-danger me-2"
					@click="goDetailPage"
				>
					취소
				</button>
				<button class="btn btn-primary">수정</button>
			</div>
		</form>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getPostById, updatePost } from '@/api/posts';

const route = useRoute();
const router = useRouter();

const form = ref({
	title: null,
	content: null,
	createdAt: Date.now(),
});

const fetchPost = async () => {
	try {
		//router 에서 param 받음. 현재 props 예제하면서 잠깐 주석
		const { data } = await getPostById(route.params.id);
		setPost(data);
		// post.value = { ...data };
	} catch (error) {
		console.log(error);
	}
};

const setPost = ({ title, content, createdAt }) => {
	form.value.title = title;
	form.value.content = content;
	form.value.createdAt = createdAt;
};
fetchPost();

const edit = async () => {
	try {
		await updatePost(route.params.id, { ...form.value });
		router.push({
			name: 'PostDetail',
			params: route.params.id,
		});
	} catch (error) {}
};
const goDetailPage = () =>
	router.push({ name: 'PostDetail', params: route.params.id });
</script>

<style lang="scss" scoped></style>
