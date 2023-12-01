import { useAlertStore } from '@/stores/alert';
import { storeToRefs } from 'pinia';

//상태관리 모듈로 빼야됨...
// const alerts = ref([]);
// function useAlert() {
// 	//공통으로 App.vue 에 alerts 라는 상태관리 데이터를 적용한 후에 PostEditView 에서 호출 했음.
// 	//하지만... 상태관리는 컴포넌트 별로 만들어 지기 떄문에 editView 에서의 alert메세지(vSuccess)가 뿌려짐...
// 	//그래서 로직 처리 후home 으로 이동시에 alert메세지가 안보여짐
// 	//이때 필요한게 상태관리 모듈이 필요함. App.vue 와 PostEditView.vue 를 연결해주는 모듈.
// 	// const alerts = ref([]);
// 	// const vAlert = (message, type = 'error') => {
// 	// 	alerts.value.push({ message, type });
// 	// 	setTimeout(() => {
// 	// 		alerts.value.shift();
// 	// 	}, 2000);
// 	// };
// 	// const vSuccess = message => vAlert(message, 'success');

// 	return {
// 		alerts,
// 		vAlert,
// 		vSuccess,
// 	};
// }

export const useAlert = () => {
	const { alerts } = storeToRefs(useAlertStore());
	const { vAlert, vSuccess } = useAlertStore();

	return {
		alerts,
		vAlert,
		vSuccess,
	};
};
