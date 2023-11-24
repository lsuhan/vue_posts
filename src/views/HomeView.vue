<template>
	<div>
		<h1>HomeVIew</h1>
		<!--라우트 객체를 가져올수 있음 1번방법-->
		<!-- <p>${{ $route }}</p> -->

		<!-- 클릭했을때 라우팅 하는 방법 1 -> template 에서 하는방법임-->
		<!-- <button class="btn btn-priamry" @click="$router.push('/about')">
			About 으로이동
		</button> -->

		<button class="btn btn-primary" @click="goAboutPage">About 으로이동</button>
	</div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';

// 라우트 객체를 가져올수 있음 2번방법
const route = useRoute();
console.log(route);

const router = useRouter();
const goAboutPage = () => {
	router.push('/about');
};
</script>

<style lang="scss" scoped></style>
