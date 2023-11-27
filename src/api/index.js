import axios from 'axios';

function create(baseURL, options) {
	const instance = axios.create(Object.assign({ baseURL }, options));

	return instance;
}

export const posts = create(`${import.meta.env.VITE_APP_API_URL}posts/`);

//환경변수 잡는법 https://ko.vitejs.dev/guide/env-and-mode.html
//vite config 에서 mode 설정 해야됨 develop 및 product 설정.
// import.meta.env.Mode;
// import.meta.env.;
// import.meta.env.Mode;
// import.meta.env.Mode;
