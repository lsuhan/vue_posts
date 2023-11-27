<template>
	<form>
		<div class="mb-3">
			<label for="exampleFormControlInput1" class="form-label">제목</label>
			<!--autofocus 는 적용안됨 왜냐면 동적이라 그래 autifocus는 한번만 실행됨-->
			<input
				v-focus
				v-color="'blue'"
				:value="title"
				@input="$emit('update:title', $event.target.value)"
				type="text"
				class="form-control"
				id="title"
			/>
		</div>
		<div class="mb-3">
			<label for="exampleFormControlTextarea1" class="form-label">내용</label>
			<textarea
				:value="content"
				class="form-control"
				@input="$emit('update:content', $event.target.value)"
				id="contents"
				rows="3"
			></textarea>
		</div>
		<div class="d-flex gap-2 mt-4">
			<slot name="actions"></slot>
		</div>
	</form>
</template>

<script setup>
// const vFocus = {
// 	mounted: el => {
// 		el.focus();
// 	},
// };
defineProps({
	title: String,
	content: String,
});
defineEmits(['update:title', 'update:content']);
</script>

<style lang="scss" scoped></style>
