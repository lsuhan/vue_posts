<template>
	<div>
		<h2>게시글 등록</h2>
		<hr class="my-4" />
		<AppError v-if="error" :message="error.message"></AppError>
		<PostForm
			@submit.prevent="save"
			v-model:title="form.title"
			v-model:content="form.content"
		>
			<template #actions>
				<button type="button" class="btn btn-outline-dark" @click="goListPage">
					목록
				</button>
				<!-- <button class="btn btn-primary">저장</button> -->

				<button class="btn btn-primary" :disabled="loading">
					<template v-if="loading">
						<span
							class="spinner-grow spinner-grow-sm"
							aria-hidden="true"
						></span>
						<span class="visually-hidden" role="status">Loading...</span>
					</template>

					<template v-else> 저장 </template>
				</button>
			</template>
		</PostForm>
		<!-- <AppAlert :show="showAlert" :message="alertMessage"></AppAlert> -->
	</div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import PostForm from '@/components/posts/PostForm.vue';
import { useAlert } from '@/composables/alert';
import AppError from '@/components/app/AppError.vue';
import { useAxios } from '@/hooks/useAxios';

const router = useRouter();
const form = ref({
	title: null,
	content: null,
});

const { error, loading, execute } = useAxios(
	'/posts',
	{
		method: 'post',
	},
	{
		immediate: false,
		onSuccess: () => {
			vSuccess('등록이 완료 되었습니다.');
			router.push('/posts');
		},
		onError: err => {
			error.value = err;
			vAlert(error);
		},
	},
);

const save = async () => {
	execute({ ...form.value, createdAt: Date.now() });
};

// const save = async () => {
// 	try {
// 		loading.value = true;
// 		await createPost({
// 			...form.value,
// 			createdAt: Date.now(),
// 		});
// 		vSuccess('등록이 완료 되었습니다.');
// 		router.push('/posts');
// 	} catch (err) {
// 		error.value = err;
// 		vAlert(error);
// 	} finally {
// 		loading.value = false;
// 	}
// };

const goListPage = () => {
	router.push({ name: 'PostList' });
};

const { vAlert, vSuccess } = useAlert();
</script>

<style lang="scss" scoped></style>
