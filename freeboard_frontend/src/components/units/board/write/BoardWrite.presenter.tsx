import * as s from "./BoardWrite.styles";
import RatioContainer from "../../../commons/Ratio/ratio.container";
import ModalContainer from "../../../commons/Modal/modal.container";
import { IBoardWriteUIProps } from "./IBoardWrite.types";

export default function BoardWriteUI(props: IBoardWriteUIProps) {
  return (
    <s.Wrapper>
      <s.Main>
        <s.WrapperTitle>
          {props.btnState ? "게시물 등록" : "게시물 수정"}
        </s.WrapperTitle>
        <s.Writer>
          <s.WriterAccount>
            <s.WriterName>작성자</s.WriterName>
            {props.btnState ? (
              <s.WriterInput
                placeholder="이름을 적어주세요."
                onChange={props.InputFunction.writer}
              ></s.WriterInput>
            ) : (
              <s.WriterInput
                value={String(props.data?.fetchBoard.writer)}
                disabled
              ></s.WriterInput>
            )}
            <div style={{ color: "red" }}>{props.writerMsg}</div>
          </s.WriterAccount>
          <s.WriterAccount>
            <s.WriterName>비밀번호</s.WriterName>
            <s.WriterInput
              placeholder="비밀번호를 입력해주세요."
              onChange={props.InputFunction.password}
            ></s.WriterInput>
            <div style={{ color: "red" }}>{props.pwdMsg}</div>
          </s.WriterAccount>
        </s.Writer>
        <s.WriterContents>
          <s.WriterContentsTitle>제목</s.WriterContentsTitle>
          <s.WriterContentsInput
            placeholder="제목을 작성해주세요"
            onChange={props.InputFunction.title}
          ></s.WriterContentsInput>
          <div style={{ color: "red" }}>{props.titleMsg}</div>
        </s.WriterContents>
        <s.WriterContents>
          <s.WriterContentsTitle>내용</s.WriterContentsTitle>
          <s.WriterContentsInput2
            placeholder="내용을 작성해주세요"
            onChange={props.InputFunction.contents}
          ></s.WriterContentsInput2>
          <div style={{ color: "red" }}>{props.contentsMsg}</div>
        </s.WriterContents>
        <s.WriterContents>
          <s.WriterContentsTitle> 주소</s.WriterContentsTitle>
          <s.WrapperPost>
            <s.PostInput1 placeholder="07250"></s.PostInput1>
            <s.PostBtn onClick={props.onClickFindAddressModal}>
              우편번호 검색
            </s.PostBtn>
            {
              // isModal이 true 이면 모달창 보여줘 (isModal 초기 = fasle / onClickFindAddressModal누르면 !isModal임 )
              props.isModal === true ? (
                <ModalContainer isModal={props.isModal} isNull={props.isNull} />
              ) : (
                ""
              )
            }

            {/* <DaumPostcodeEmbed onComplete={props.FindAddress} /> */}
          </s.WrapperPost>
          <s.PostInput2></s.PostInput2>
          <s.PostInput2></s.PostInput2>
        </s.WriterContents>
        <s.Select>
          <s.WriterContentsTitle>메인 설정</s.WriterContentsTitle>
          {props.isRatio === true ? (
            <RatioContainer
              InputFunction={props.InputFunction}
              onChangeFileUrls={props.onChangeFileUrls}
              fileUrls={props.fileUrls}
            ></RatioContainer>
          ) : (
            ""
          )}
        </s.Select>
        <s.SubmitBtn
          onClick={props.btnState ? props.SignupChk : props.onClickUpdateBtn}
        >
          {props.btnState ? "등록하기" : "수정하기"}
        </s.SubmitBtn>
      </s.Main>
    </s.Wrapper>
  );
}
