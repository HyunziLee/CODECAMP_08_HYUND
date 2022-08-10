import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { useForm } from "react-hook-form";
import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IMutation,
  IMutationCreateBoardArgs,
} from "../../../src/commons/types/generated/types";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function Quiz() {
  const router = useRouter();
  const [createBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);
  const { register, handleSubmit, setValue, trigger } = useForm({
    mode: "onChange",
  });
  const onChangeContents = (value: string) => {
    console.log(value);
    setValue("contents", value === "<p><br></p>" ? "" : value);
    trigger("contents");
  };

  const onClickBtn = async (data) => {
    if (!(data.writer && data.password && data.title && data.contents)) return;
    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer: data.writer,
            password: data.password,
            title: data.title,
            contents: data.contents,
          },
        },
      });
      console.log(result);
      router.push(
        `/quiz/27-02-react-quill-detail/${result.data?.createBoard._id}`
      );
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onClickBtn)}>
      작성자
      <input type="text" {...register("writer")} />
      비밀번호
      <input type="password" {...register("password")} />
      제목
      <input type="text" {...register("title")} />
      내용 <ReactQuill onChange={onChangeContents} />
      <button>등록</button>
    </form>
  );
}
