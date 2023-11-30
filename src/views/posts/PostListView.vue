<template>
	<div>
		<h2>{{ $route.name }}</h2>
		<hr class="my-4" />

		<PostFilter
			v-model:title="params.title_like"
			v-model:limit="params._limit"
		></PostFilter>
		<!-- <form @submit.prevent="">
			<div class="row g-3">
				<div class="col">
					<input v-model="params.title_like" type="text" class="form-control" />
				</div>
				<div class="col-3">
					<select v-model="params._limit" class="form-select">
						<option value="3">3개씩 보기</option>
						<option value="6">6개씩 보기</option>
						<option value="9">9개씩 보기</option>
					</select>
				</div>
			</div>
		</form> -->
		<hr class="my-4" />

		<AppLoading v-if="loading"></AppLoading>
		<AppError v-else-if="error" :message="error.message" />

		<template v-else>
			<div class="row g-3">
				<AppGrid :items="posts">
					<template v-slot="{ item }">
						<PostItem
							:title="item.title"
							:content="item.content"
							:created-at="item.createdAt"
							@click="goPage(item.id)"
							@modal="openModal(item)"
						></PostItem>
					</template>
				</AppGrid>
			</div>
		</template>

		<AppPagination
			:current-page="params._page"
			:page-count="pageCount"
			@page="page => (params._page = page)"
		></AppPagination>

		<!--컴포넌트 템블릿의 일부ㅡㄹ 해당 컴포넌트의 dom 계츨ㅇ 외부 노드로 이동함으로써 modal 창 깨짐을 방지-->
		<Teleport to="#modal">
			<PostModal
				v-model="show"
				:title="modalTitle"
				:content="modalContent"
				:createdAt="modalCreatedAt"
			>
			</PostModal>
		</Teleport>

		<hr class="my-5" />
		<!--id로 props 전달-->
		<AppCard>
			<PostDetailView :id="3"></PostDetailView>
		</AppCard>
	</div>
</template>

<script setup>
import PostDetailView from './PostDetailView.vue';
import PostItem from '@/components/posts/PostItem.vue';
import PostFilter from '@/components/posts/PostFilter.vue';
import PostModal from '@/components/posts/PostModal.vue';

import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { computed } from 'vue';
import AppLoading from '@/components/app/AppLoading.vue';
import AppError from '@/components/app/AppError.vue';
import { useAxios } from '@/hooks/useAxios';

const router = useRouter();
const params = ref({
	_sort: 'createdAt',
	_order: 'desc',
	_page: 1,
	_limit: 3,
	title_like: '',
});

const {
	response,
	data: posts,
	error,
	loading,
} = useAxios('/posts', { params });
//pagination
const totalCount = computed(
	() => response.value?.headers['x-total-count'] ?? null,
);
const pageCount = computed(() =>
	Math.ceil(totalCount.value / params.value._limit),
);

// const fetchPosts = async () => {
// 	try {
// 		loading.value = true;
// 		const { data, headers } = await getPosts(params.value);
// 		posts.value = data;
// 		totalCount.value = headers['x-total-count'];
// 	} catch (err) {
// 		error.value = err;
// 	} finally {
// 		loading.value = false;
// 	}
// };

// 	//위에 문법이랑 똑같은 문법
// 	// ({ data: posts.value } = await getPosts());

// 	//a async 로 사용할게용
// 	// getPosts()
// 	// 	.then(response => {
// 	// 		console.log(response);
// 	// 	})
// 	// 	.catch(error => {
// 	// 		console.log('error', error);
// 	// 	});
// };

// fetchPosts();
// watchEffect(fetchPosts); // 반응형 데이터가 변경됨으로 페이징 할떄 바로 메서드 다시 호출함

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

const show = ref(false);
const modalTitle = ref('');
const modalContent = ref('');
const modalCreatedAt = ref('');
const openModal = ({ title, content, createdAt }) => {
	show.value = true;
	modalTitle.value = title;
	modalContent.value = content;
	modalCreatedAt.value = createdAt;
};
</script>

<style lang="scss" scoped></style>
