<template>
	<!-- <Transition name="slide">
		<div v-if="show" class="app-alert alert" :class="styleClass" role="alert">
			{{ message }}
		</div>
	</Transition> -->

	<div class="app-alert">
		<TransitionGroup name="slide">
			<div
				v-for="({ message, type }, index) in items"
				:key="index"
				class="alert"
				:class="typeStyle(type)"
				role="alert"
			>
				{{ message }}
			</div>
		</TransitionGroup>
	</div>
</template>

<script setup>
defineProps({
	items: Array,
});

// const props = defineProps({
// 	show: {
// 		type: Boolean,
// 		defalut: false,
// 	},
// 	message: {
// 		type: String,
// 		required: true,
// 	},
// 	type: {
// 		type: String,
// 		defalut: 'error',
// 		validator: value => ['success', 'error'].includes(value),
// 	},
// });

const typeStyle = type => {
	return type === 'error' ? 'alert-danger' : 'alert-success';
};
</script>

<style lang="scss" scoped>
.app-alert {
	position: fixed;
	top: 10px;
	right: 10px;
}

//vue 의 Transition 객체 안에있는 클래스.
//https://ko.vuejs.org/guide/built-ins/transition.html 참고
//https://ko.vuejs.org/guide/built-ins/transition-group.html 참고
//강의 넘어갈게 궁금하면 다시 찾아보자
.slide-enter-from,
.slide-leave-to {
	opacity: 0;
	transform: translateY(-30px);
}

.slide-enter-active,
.slide-leave-active {
	transition: all 0.5s ease;
}

.slide-enter-to {
	opacity: 1;
}

.slide-enter-to,
.slide-leave-form {
	opacity: 1;
	transform: translateY(0px);
}
</style>
