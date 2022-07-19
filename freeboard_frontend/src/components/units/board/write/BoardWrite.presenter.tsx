import {
  Wrapper,
  Wrapper_title,
  Writer,
  Writer_account,
  Writer__name,
  Writer__input,
  Writer__content,
  Writer__content__title,
  Writer__content__input,
  Writer__content__input2,
  Post__wrapper,
  Post__input1,
  Post__input2,
  Post__btn,
  Photo,
  Photo__wrapper,
  Photo__list,
  Select,
  Select__radio,
  Submit__btn,
} from "../../../../../styles/01-01";
import RatioContainer from "../../../commons/Ratio/ratio.container";

export default function BoardWriteUI(props) {
  return (
    <Wrapper>
      <Wrapper_title>
        {props.btnState ? "게시물 등록" : "게시물 수정"}
      </Wrapper_title>
      <Writer>
        <Writer_account>
          <Writer__name>작성자</Writer__name>
          {props.btnState ? (
            <Writer__input
              placeholder="이름을 적어주세요."
              onChange={props.InputFunction.writer}
            ></Writer__input>
          ) : (
            <Writer__input
              defaultValue={props.data?.fetchBoard.writer}
              disabled
            ></Writer__input>
          )}
          <div style={{ color: "red" }}>{props.writerMsg}</div>
        </Writer_account>
        <Writer_account>
          <Writer__name>비밀번호</Writer__name>
          <Writer__input
            placeholder="비밀번호를 입력해주세요."
            onChange={props.InputFunction.password}
          ></Writer__input>
          <div style={{ color: "red" }}>{props.pwdMsg}</div>
        </Writer_account>
      </Writer>
      <Writer__content>
        <Writer__content__title>제목</Writer__content__title>
        <Writer__content__input
          placeholder="제목을 작성해주세요"
          onChange={props.InputFunction.title}
        ></Writer__content__input>
        <div style={{ color: "red" }}>{props.titleMsg}</div>
      </Writer__content>
      <Writer__content>
        <Writer__content__title>내용</Writer__content__title>
        <Writer__content__input2
          placeholder="내용을 작성해주세요"
          onChange={props.InputFunction.contents}
        ></Writer__content__input2>
        <div style={{ color: "red" }}>{props.contentsMsg}</div>
      </Writer__content>
      <Writer__content>
        <Writer__content__title> 주소</Writer__content__title>
        <Post__wrapper>
          <Post__input1 placeholder="07250"></Post__input1>
          <Post__btn>우편번호 검색</Post__btn>
        </Post__wrapper>
        <Post__input2></Post__input2>
        <Post__input2></Post__input2>
      </Writer__content>
      <Select>
        <Writer__content__title>메인 설정</Writer__content__title>
        {props.isRatio === true ? <RatioContainer></RatioContainer> : ""}
      </Select>
      <Submit__btn
        onClick={props.btnState ? props.SignupChk : props.onClickUpdateBtn}
      >
        {props.btnState ? "등록하기" : "수정하기"}
      </Submit__btn>
    </Wrapper>
  );
}
