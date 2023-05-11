import api from "./api";

export interface SignUpRequest {
  email: string;
  password: string;
  nickname: string;
}

export interface SignUpResponse {
  email: string;
  nickname: string;
}

const signUp = async (params: SignUpRequest) => {
  const { data } = await api.post<SignUpResponse>('/users', {
    ...params
  });

  return data;
};

export interface SignInRequest {
  email: string;
  password: string;
}

export interface SignInResponse {
  id: number;
  nickname: string;
  accessToken: string;
  refreshToken: string;
}

const signIn = async (params: SignInRequest) => {
  const { data } = await api.post<SignInResponse>('/login', {
    ...params
  });

  return data;
};

const signOut = async () => await api.post("/logout");

export const authApi = {
  signUp,
  signIn,
  signOut,
};