import * as s from "../../../../../styles/01-01";
import RatioContainer from "../../../commons/Ratio/ratio.container";
import DaumPostcodeEmbed from "react-daum-postcode";
import ModalContainer from "../../../commons/Modal/modal.container";

export default function BoardWriteUI(props) {
  return (
    <s.Wrapper>
      <s.Wrapper_title>
        {props.btnState ? "게시물 등록" : "게시물 수정"}
      </s.Wrapper_title>
      <s.Writer>
        <s.Writer_account>
          <s.Writer__name>작성자</s.Writer__name>
          {props.btnState ? (
            <s.Writer__input
              placeholder="이름을 적어주세요."
              onChange={props.InputFunction.writer}
            ></s.Writer__input>
          ) : (
            <s.Writer__input
              defaultValue={props.data?.fetchBoard.writer}
              disabled
            ></s.Writer__input>
          )}
          <div style={{ color: "red" }}>{props.writerMsg}</div>
        </s.Writer_account>
        <s.Writer_account>
          <s.Writer__name>비밀번호</s.Writer__name>
          <s.Writer__input
            placeholder="비밀번호를 입력해주세요."
            onChange={props.InputFunction.password}
          ></s.Writer__input>
          <div style={{ color: "red" }}>{props.pwdMsg}</div>
        </s.Writer_account>
      </s.Writer>
      <s.Writer__content>
        <s.Writer__content__title>제목</s.Writer__content__title>
        <s.Writer__content__input
          placeholder="제목을 작성해주세요"
          onChange={props.InputFunction.title}
        ></s.Writer__content__input>
        <div style={{ color: "red" }}>{props.titleMsg}</div>
      </s.Writer__content>
      <s.Writer__content>
        <s.Writer__content__title>내용</s.Writer__content__title>
        <s.Writer__content__input2
          placeholder="내용을 작성해주세요"
          onChange={props.InputFunction.contents}
        ></s.Writer__content__input2>
        <div style={{ color: "red" }}>{props.contentsMsg}</div>
      </s.Writer__content>
      <s.Writer__content>
        <s.Writer__content__title> 주소</s.Writer__content__title>
        <s.Post__wrapper>
          <s.Post__input1 placeholder="07250"></s.Post__input1>
          <s.Post__btn onClick={props.onClickFindAddressModal}>
            우편번호 검색
          </s.Post__btn>
          {
            //isModal이 true 이면 모달창 보여줘 (isModal 초기 = fasle / onClickFindAddressModal누르면 !isModal임 )
            props.isModal === true ? (
              <ModalContainer isModal={props.isModal} isNull={props.isNull} />
            ) : (
              ""
            )
          }

          {/* <DaumPostcodeEmbed onComplete={props.FindAddress} /> */}
        </s.Post__wrapper>
        <s.Post__input2></s.Post__input2>
        <s.Post__input2></s.Post__input2>
      </s.Writer__content>
      <s.Select>
        <s.Writer__content__title>메인 설정</s.Writer__content__title>
        {props.isRatio === true ? (
          <RatioContainer InputFunction={props.InputFunction}></RatioContainer>
        ) : (
          ""
        )}
      </s.Select>
      <s.Submit__btn
        onClick={props.btnState ? props.SignupChk : props.onClickUpdateBtn}
      >
        {props.btnState ? "등록하기" : "수정하기"}
      </s.Submit__btn>
    </s.Wrapper>
  );
}
