<template>
	<div>
		<ul class="nav nav-pills">
			<!-- replace 는 history 에 안쌓음-->
			<li class="nav-item">
				<RouterLink
					class="nav-link"
					active-class="active"
					:to="{ name: 'NestedOne', replace: true }"
					>Nested ONE</RouterLink
				>
			</li>
			<li class="nav-item">
				<RouterLink class="nav-link" active-class="active" to="/nested/two"
					>Nested Two</RouterLink
				>
			</li>
		</ul>
		<div class="my04"></div>
		<RouterView></RouterView>
	</div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
