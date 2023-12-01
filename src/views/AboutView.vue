<template>
	<div>
		<h1>About View</h1>
		<button class="btn btn-primary" @click="$router.push('/')">
			Home으로 이동
		</button>
	</div>
	<h2>Store</h2>
	<p>counter: {{ counter }}</p>
	<!--반응성 없음-->
	<p>counter: {{ store.counter }}</p>
	<p>doubleCounter: {{ store.doubleCount }}</p>
	<p>doubleCounter: {{ store.doubleCountPlusOne }}</p>
	<button @click="store.increment()">Click!</button>
</template>

<script setup>
import { useCounterStore } from '@/stores/counter';
import { storeToRefs } from 'pinia';

const store = useCounterStore();
// const { counter } = store; //반응형 깨짐
const { counter } = storeToRefs(store); // 반응형 꺠짐을 방지
</script>

<style lang="scss" scoped></style>
