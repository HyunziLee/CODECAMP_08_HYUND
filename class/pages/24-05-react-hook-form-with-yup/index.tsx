import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  writer: yup.string().required("작성자를 입력해주세요"),
  password: yup.string().required("비밀번호를 입력해주세요"),
  title: yup.string().required("제목을 입력해주세요"),
  contents: yup.string().required("내용을 입력해주세요."),

  // email: yup
  //   .string()
  //   .email("이메일형식에 밪지않음")
  //   .required("이메일은 필수 요소이다."),

  //  password: yup.string().min(4, "비밀번호는 최소 4자리 이상").max(15,"비밀번호는 15자리로 입력해주세요").required("비밀번호를 입력해주세요"),

  // phone: yup.string().matches(/^\d{3}-\d{3,4}-\d{4}$/, "휴대폰 형식에 알맞지 않다.")
});

export default function ReactHookPage() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const onClickButton = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onClickButton)}>
      작성자: <input type="text" {...register("writer")} />
      <div>{formState.errors.writer?.message}</div>
      비밀번호: <input type="password" {...register("password")} />
      <div>{formState.errors.password?.message}</div>
      제목: <input type="text" {...register("title")} />
      <div>{formState.errors.title?.message}</div>
      내용: <input type="text" {...register("contents")} />
      <div>{formState.errors.contents?.message}</div>
      <button style={{ color: formState.isValid ? "yellow" : "default" }}>
        등록하기
      </button>
      {/* 이메일: <input type="text" {...register("email")} />
      <div>{formState.errors.email?.message}</div> */}
    </form>
  );
}
// yup은 검증하는 거임
