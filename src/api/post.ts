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

const getPosts = async () => {
  const { data } = await api.get<GetPostsResponse>('/posts/list');

  return data;
};

export const postApi = {
  getPosts,
};