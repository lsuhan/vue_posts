import { posts } from '.';

export function getPosts(params) {
	return posts.get('/', { params });
}

export function getPostById(id) {
	return posts.get(`${id}`);
}

export function createPost(data) {
	console.log(data);
	return posts.post('', data);
}

// export function updatePost(id, data) {
// 	return posts.put(`/${id}`, data);
// }

//등록일이 수정할때 없어짐... patch 보내주는 데이터가 없으면 원래값은 그대로 냅둠
//put을 사용하면 등록일의 데이터를 안넘겨 줘서 빈값으로 나옴요
export function updatePost(id, data) {
	return posts.patch(`/${id}`, data);
}

export function deletePost(id) {
	return posts.delete(`/${id}`);
}
