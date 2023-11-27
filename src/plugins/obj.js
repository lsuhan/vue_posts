const objPlugins = {
	//2개의 매개변수가있음
	install(app, options) {
		console.log('함수형 플러그인 app = ', app);
		console.log('함수형 플러그인 options = ', options);
		// app.component(): 전역 컴포넌트 적용
		//app.config.globalProperties 전역 애플리케이션 인스턴스에 속성 추가
		//app.directive: 커스텀 디렉티브
		//app.provide 리소스를 자식 컴포넌트에서 사용
	},
};

export default objPlugins;
