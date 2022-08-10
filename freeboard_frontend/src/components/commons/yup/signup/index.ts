import * as yup from "yup";

export const schema = yup.object({
  name: yup.string().required("이름을 입력하세요"),
  email: yup
    .string()
    .email("이메일 형식이 아닙니다.")
    .required("이메일을 입력하세요"),
  password: yup
    .string()
    .min(1, "최소 1자리 이상 입력하세요")
    // .max(8, "8자리 이하로 입력하세요")
    .required("비밀번호를 입력하세요")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "영문, 숫자, 특수문자는 필수 입력 값입니다."
    ),
});
