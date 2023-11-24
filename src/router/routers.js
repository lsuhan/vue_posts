import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import {
	createRouter,
	createWebHashHistory,
	createWebHistory,
} from 'vue-router';
import PostCreateView from '@/views/posts/PostCreateView.vue';
import PostDetailView from '@/views/posts/PostDetailView.vue';
import PostEditView from '@/views/posts/PostEditView.vue';
import PostListView from '@/views/posts/PostListView.vue';
import NotFoundView from '@/views/error/NotFoundView.vue';
import NestedView from '@/views/nested/NestedView.vue';
import NestedOneView from '@/views/nested/NestedOneView.vue';
import NestedTwoView from '@/views/nested/NestedTwoView.vue';
import NestedHomeView from '@/views/nested/NestedHomeView.vue';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: HomeView,
	},
	{
		path: '/about',
		name: 'About',
		component: AboutView,
	},
	{
		path: '/posts',
		name: 'PostList',
		component: PostListView,
	},
	{
		path: '/posts/create',
		name: 'PostCreate',
		component: PostCreateView,
	},
	{
		path: '/posts/:id',
		name: 'PostDetail',
		component: PostDetailView,
		// props: true,
		//함수형으로 props 던지기
		props: route => {
			return {
				id: parseInt(route.params.id),
			};
		},
	},
	{
		path: '/posts/:id/edit',
		name: 'PostEdit',
		component: PostEditView,
	},
	{
		path: '/:pathMatch(.*)*',
		name: 'NotFound',
		component: NotFoundView,
	},

	//중첨라우팅.
	{
		path: '/nested',
		name: 'NestedView',
		component: NestedView,
		children: [
			//중첩 라우팅
			{
				// /nested 로 왔을때 default 페이지
				path: '', //슬러쉬 넣지마. 절대 경로 되자나.
				name: 'NestedHomeView',
				component: NestedHomeView,
			},
			{
				path: 'one', //슬러쉬 넣지마. 절대 경로 되자나.
				name: 'NestedOne',
				component: NestedOneView,
			},
			{
				path: 'two',
				name: 'NestedTwo',
				component: NestedTwoView,
			},
		],
	},
];

const router = createRouter({
	history: createWebHistory(), //https://router.vuejs-korea.org/ko/guide/essentials/history-mode.html#html5-mode 자세한 내용 참고
	// history: createWebHashHistory(),
	routes,
});

export default router;
