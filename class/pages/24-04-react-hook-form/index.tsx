import { useForm } from "react-hook-form";

export default function ReactHookPage() {
  const { register, handleSubmit } = useForm();
  const onClickButton = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onClickButton)}>
      작성자: <input type="text" {...register("writer")} />
      제목: <input type="text" {...register("title")} />
      내용: <input type="text" {...register("contents")} />
      주소입력:{" "}
      <input type="text" {...register("boardAddress.addressDetail")} />
      {/*  🔺객체 안에 저장할 때 */}
      <button>등록하기</button>
    </form>
  );
}

// 리액트 훅 폼 사용하면, 변경 될 때 마다 랜더링 안됨 (왜냐하면 비제어컴포넌트이기 때문에)
