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

export interface CreatePostsRequest {
  title: string;
  content: string;
}

const createPosts = async (params: CreatePostsRequest) => {
  await api.post('/posts', { params});
};

export const postApi = {
  getPosts,
  createPosts
};