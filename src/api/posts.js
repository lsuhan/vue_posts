const posts = [
	{ id: 1, title: '제목1', content: '내용1', createdAt: '2020-01-01' },
	{ id: 2, title: '제목2', content: '내용2', createdAt: '2021-01-01' },
	{ id: 3, title: '제목3', content: '내용3', createdAt: '2022-01-01' },
	{ id: 4, title: '제목4', content: '내용4', createdAt: '2023-01-01' },
	{ id: 5, title: '제목5', content: '내용5', createdAt: '2024-01-01' },
	{ id: 6, title: '제목6', content: '내용6', createdAt: '2025-01-01' },
	{ id: 7, title: '제목7', content: '내용7', createdAt: '2026-01-01' },
	{ id: 8, title: '제목8', content: '내용8', createdAt: '2027-01-01' },
	{ id: 9, title: '제목9', content: '내용9', createdAt: '2028-01-01' },
	{ id: 10, title: '제목10', content: '내용10', createdAt: '2029-01-01' },
	{ id: 11, title: '제목11', content: '내용11', createdAt: '2030-01-01' },
];

export function getPosts() {
	return posts;
}

export function getPostById(id) {
	return posts.find(item => item.id === id);
}
