<template>
	<AppLoading v-if="loading"></AppLoading>
	<AppError v-else-if="error" :message="error.message" />

	<div v-else>
		<h2>게시글 수정</h2>
		<hr class="my-4" />
		<AppError v-if="editError" :message="editError.message"></AppError>
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
				<!-- <button class="btn btn-primary">수정</button> -->
				<button class="btn btn-primary" :disabled="editLoading">
					<template v-if="editLoading">
						<span
							class="spinner-grow spinner-grow-sm"
							aria-hidden="true"
						></span>
						<span class="visually-hidden" role="status">Loading...</span>
					</template>

					<template v-else> 수정 </template>
				</button>
			</template>
		</PostForm>
		<!-- <AppAlert :show="showAlert" :message="alertMessage"></AppAlert> -->
	</div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getPostById, updatePost } from '@/api/posts';
import PostForm from '@/components/posts/PostForm.vue';
import useAlert from '@/composables/alert';

const route = useRoute();
const router = useRouter();

const form = ref({
	title: null,
	content: null,
	createdAt: Date.now(),
});
const error = ref(null);
const loading = ref(false);

const fetchPost = async () => {
	try {
		loading.value = true;
		//router 에서 param 받음. 현재 props 예제하면서 잠깐 주석
		const { data } = await getPostById(route.params.id);
		setPost(data);
		// post.value = { ...data };
	} catch (err) {
		error.value = err;
	} finally {
		loading.value = false;
	}
};

const setPost = ({ title, content, createdAt }) => {
	form.value.title = title;
	form.value.content = content;
	form.value.createdAt = createdAt;
};
fetchPost();

const editError = ref(null);
const editLoading = ref(false);

const edit = async () => {
	try {
		editLoading.value = true;
		await updatePost(route.params.id, { ...form.value });
		router.push({
			name: 'PostDetail',
			params: route.params.id,
		});

		vSuccess('수정이 완료 되었습니다.');
	} catch (err) {
		editError.value = err;
		vAlert('네트워크 오류');
	} finally {
		editLoading.value = false;
	}
};
const goDetailPage = () =>
	router.push({ name: 'PostDetail', params: route.params.id });

const { vAlert, vSuccess } = useAlert();
</script>

<style lang="scss" scoped></style>
