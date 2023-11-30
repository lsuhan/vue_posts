<template>
	<AppLoading v-if="loading"></AppLoading>
	<AppError v-else-if="error" :message="error.message" />

	<AppError v-else-if="removeError" :message="removeError.message"></AppError>
	<div v-else>
		<h2>{{ post.title }}</h2>
		<p>{{ post.content }}</p>
		<p class="text-muted">
			{{ $dayjs(post.createdAt).format('YYYY.MM.DD HH:mm:ss') }}
		</p>
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
				<button
					class="btn btn-outline-danger"
					@click="remove"
					:disabled="removeLoading"
				>
					<template v-if="removeLoading">
						<span
							class="spinner-grow spinner-grow-sm"
							aria-hidden="true"
						></span>
						<span class="visually-hidden" role="status">Loading...</span>
					</template>
					<template v-else> 삭제 </template>
				</button>
			</div>
		</div>
	</div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { deletePost } from '@/api/posts';
import { ref } from 'vue';
import AppLoading from '@/components/app/AppLoading.vue';
import AppError from '@/components/app/AppError.vue';
import { useAxios } from '@/hooks/useAxios';

// props 받기 postListView 에서 id 로 던진 props 이고 routers.js 에 props:true 걸어줘야 함요
const props = defineProps({
	// id: String,
	id: Number,
});

const router = useRouter();
//router 에서 param 받음. 현재 props 예제하면서 잠깐 주석
// const route = useRoute();
// const id = route.params.id;

// const post = ref({});
// const error = ref(null);
// const loading = ref(false);

const { error, loading, data: post } = useAxios(`/posts/${props.id}`);

// const fetchPost = async () => {
// 	try {
// 		loading.value = true;
// 		//router 에서 param 받음. 현재 props 예제하면서 잠깐 주석
// 		const { data } = await getPostById(props.id);
// 		setPost(data);
// 	} catch (err) {
// 		error.value = err;
// 	} finally {
// 		loading.value = false;
// 	}

// 	// post.value = { ...data };
// };

// const setPost = ({ title, content, createdAt }) => {
// 	post.value.title = title;
// 	post.value.content = content;
// 	post.value.createdAt = createdAt;
// };
// fetchPost();

const {
	error: removeError,
	loading: removeLoading,
	execute,
} = useAxios(
	`/posts/${props.id}`,
	{ method: 'delete' },
	{
		immediate: false,
		onSuccess: () => {
			router.push({
				name: 'PostList',
			});
		},
		onError: error => {
			removeError.value = error;
		},
	},
);

const remove = async () => {
	if (confirm('삭제하시겠습니까?')) {
		execute();
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
