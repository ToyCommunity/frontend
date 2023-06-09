import api from './api';

export interface Page {
  page: number;
  perCounts: number;
  totalPosts: number;
  totalPages: number;
}

export interface Post {
  postId: number;
  userId: number;
  title: string;
  nickname: string;
  category: number;
  postContent: string;
  likeCounts: number;
  viewCounts: number;
  postMyReaction: boolean;
  createdAt: string;
}

export interface GetPostsResponse extends Page {
  postResults: Post[];
}

export interface GetPostsRequest {
  page: number;
}

const getPosts = async ({ page } : GetPostsRequest) => {
  const { data } = await api.get<GetPostsResponse>('/posts/list', {params: {page}});

  return data;
};

export interface CreatePostRequest {
  title: string;
  content: string;
}

const createPost = async (params: CreatePostRequest) => {
  await api.post('/posts', { ...params });
};

export interface UpdatePostRequest {
  postId: number;
  title: string;
  content: string;
}

const updatePost = async (params: UpdatePostRequest) => {
  await api.patch('/posts', { ...params });
};

export interface GetDetailRequest {
  postId: number;
  signal?: AbortSignal;
}

export interface Replie {
  replyLikes: number,
  replyStatus: string,
  replyWriterId: number,
  replyWriterEmai: string,
  replyWriterNickName: string,
  createdAt: string,
}

export interface GetDetailResponse {
  postId: number,
	title: string,
	userId: number,
	nickname: string,
	userProfileImg: string,
	category: string,
	likeCounts: number,
	viewCounts: number,
	postMyReaction: boolean,
	createdAt: string,
	replies: Replie[],
  content: string
}

const getDetailPost = async ({ postId, signal }: GetDetailRequest) => {
  const { data } = await api.get<GetDetailResponse>(`/posts/detail/${postId}`, { signal });

  return data;
};

export const postApi = {
  createPost,
  updatePost,
  getPosts,
  getDetailPost,
};