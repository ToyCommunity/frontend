export interface SignUpRequest {
  email: string;
  password: string;
  nickname?: string;
}

export interface SignUpResponse {
  email: string;
  nickname: string;
}

// eslint-disable-next-line no-unused-vars
const signUp = async ({ email, password, nickname }: SignUpRequest) => {
  const res = await new Promise<SignUpResponse>((resolve) => {
    const signUpResponse: SignUpResponse = {
      email,
      nickname,
    };
    
    setTimeout(() => {
      resolve(signUpResponse);
    }, 300);
  });

  return res;
};

export interface SignInRequest {
  email: string;
  password: string;
}

export interface SignInResponse {
  accessToken: string;
  accessTokenExpiredTime: number;
  refreshToken: string;
  refreshTokenExpiredTime: number;
}

// eslint-disable-next-line no-unused-vars
const signIn = async ({ email, password }: SignInRequest) => {
  const signInResponse: SignInResponse = {
    accessToken: 'eyJhbGciOiJIUzUxMiJ9.eyJpZCI6MSwiaWF0IjoxNjgxNjUxMDc1LCJleHAiOjE2ODE2NTQ2NzV9.AnbPfMwqA_RnLtNonR21Ip0gHLGjqop2OZ3tIBoJYnJW_Bn55GkbeVBm8DLVocKNvSsy5MNzlWC2j0pMoU0q4g',
    accessTokenExpiredTime: 1000 * 60 * 60,
    refreshToken: 'eyJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE2ODE2NTEwNzUsImV4cCI6MTY4MTczNzQ3NX0.delW-Pi-lrzmEjJcIT0HVFpJ_C1_7CvompZACl_3XCzWsJ-4NdLuzMFDXxTSGE0JSQuoOaNS4_BmrJdH4Cmp7Q',
    refreshTokenExpiredTime: 1000 * 60 * 60 * 24,
  };

  const res = await new Promise<SignInResponse>((resolve) => {
    setTimeout(() => resolve(signInResponse), 300);
  });

  return res;
};

export const authApi = {
  signUp,
  signIn,
};