import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const requiredMessage = "필수 입력 항목입니다.";

const schema = yup.object({
  email: yup
    .string()
    .required(requiredMessage)
    .email("이메일 형식이 올바르지 않습니다.")
    .min(8, "이메일은 최소 8자 이상이어야 합니다.")
    .max(50, "이메일은 최대 50자 이하이어야 합니다."),
    password: yup
    .string()
    .required(requiredMessage)
    .min(8, "비밀번호는 8자 이상이여야 합니다.")
    .matches(/^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$/, '비밀번호는 문자+숫자를 모두 포함해야 합니다.')
    .max(20, "비밀번호는 20자 이하이여야 합니다."),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref('password')],
      "비밀번호가 일치하지 않습니다."
    ),
  nickname: yup
    .string()
    .when({
      is: (value: string) => value !== "",
      then: (schema) => schema
        .min(2, "닉네임은 최소 2자 이상이어야 합니다.")
        .max(10, "닉네임은 최대 10자 이하이어야 합니다."),
    })
});

export type SignUpForm = yup.InferType<typeof schema>;

function useSignUpForm() {
  const form = useForm<SignUpForm>({
    resolver: yupResolver(schema),
    mode: "onChange"
  });
  
  return form;
}

export default useSignUpForm;