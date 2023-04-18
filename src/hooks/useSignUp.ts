import { SignUpRequest, authApi } from "@/api";
import { useMutation } from "@tanstack/react-query";

export function useSignUp() {
  const data = useMutation((req: SignUpRequest) => authApi.signUp(req));
  
  return data;
}
