import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
	//컴포넌트의 상태 역할
	state: () => ({
		counter: 1,
	}),
	//컴포넌트의 computed 역할
	getters: {
		doubleCount: state => state.counter * 2,
		doubleCountPlusOne() {
			return this.doubleCount + 1;
		},
	},
	//컴포넌트의 메서드 역할
	actions: {
		increment() {
			this.counter++;
		},
	},
});
