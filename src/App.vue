<template>
	<TheHeader></TheHeader>
	<TheView></TheView>
	<!-- <AppAlert :items="alerts"></AppAlert> -->
	<AppAlert></AppAlert>
</template>

<script setup>
import TheHeader from '@/layouts/TheHeader.vue';
import TheView from '@/layouts/TheView.vue';
import AppAlert from './components/app/AppAlert.vue';
// import useAlert from './composables/alert';

// const { alerts } = useAlert();
</script>

<style lang="scss" scoped></style>
