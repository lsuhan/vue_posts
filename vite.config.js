import { fileURLToPath, URL } from 'node:url';
import Component from 'unplugin-vue-components/vite';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue(), Component({ dtos: true })], //모듈 컴포넌ㅌ ㅡ등록
	// mode: 'production',
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
		},
	},
});
