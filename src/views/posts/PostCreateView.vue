<template>
	<div>
		<h2>게시글 등록</h2>
		<hr class="my-4" />
		<PostForm
			@submit.prevent="save"
			v-model:title="form.title"
			v-model:content="form.content"
		>
			<template #actions>
				<button type="button" class="btn btn-outline-dark" @click="goListPage">
					목록
				</button>
				<button class="btn btn-primary">저장</button>
			</template>
		</PostForm>
		<!-- <AppAlert :show="showAlert" :message="alertMessage"></AppAlert> -->
	</div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { createPost } from '@/api/posts';
import { ref } from 'vue';
import PostForm from '@/components/posts/PostForm.vue';
import useAlert from '@/composables/alert';

const router = useRouter();
const form = ref({
	title: null,
	content: null,
});

const save = () => {
	try {
		createPost({
			...form.value,
			createdAt: Date.now(),
		});
		vSuccess('등록이 완료 되었습니다.');
		router.push('/posts');
	} catch (error) {
		vAlert(error);
	}
};

const goListPage = () => {
	router.push({ name: 'PostList' });
};

const { vAlert, vSuccess } = useAlert();
</script>

<style lang="scss" scoped></style>
