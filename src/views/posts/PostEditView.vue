<template>
	<div>
		<h2>게시글 수정</h2>
		<hr class="my-4" />
		<PostForm
			@submit.prevent="edit"
			v-model:title="form.title"
			v-model:content="form.content"
		>
			<template #actions>
				<button
					type="button"
					class="btn btn-outline-danger"
					@click="goDetailPage"
				>
					취소
				</button>
				<button class="btn btn-primary">수정</button>
			</template>
		</PostForm>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getPostById, updatePost } from '@/api/posts';
import PostForm from '@/components/posts/PostForm.vue';

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
