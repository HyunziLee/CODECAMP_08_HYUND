import { SSRProvider } from "react-bootstrap";
import * as s from "../../../../../styles/signup.styles";
export default function SignUpUI() {
  return (
    <>
      <s.Wrapper>
        <s.Basic_info>
          <s.Info_division>
            <s.Info_title>이메일</s.Info_title>
            <s.Info_input />
          </s.Info_division>
          <s.Info_division>
            <s.Info_title>비밀번호</s.Info_title>
            <s.Info_input />
          </s.Info_division>
          <s.Info_division>
            <s.Info_title>비밀번호 확인</s.Info_title>
            <s.Info_input />
          </s.Info_division>
          <s.Info_division>
            <s.Info_title>이름</s.Info_title>
            <s.Info_input />
          </s.Info_division>
          <s.Info_division>
            <s.Info_title>휴대폰</s.Info_title>
            <s.Info_phone>
              <s.Wrapper_phone>
                <s.Info_phone_number />
                <s.Info_phone_number />
                <s.Info_phone_number />
                <s.Sign_common_button>인증번호 받기</s.Sign_common_button>
              </s.Wrapper_phone>
              <s.Info_phone_certification>
                <s.Certification_input />
                <s.Sign_common_button>확인</s.Sign_common_button>
              </s.Info_phone_certification>
            </s.Info_phone>
          </s.Info_division>
          <s.Info_division>
            <s.Info_title>주소</s.Info_title>
            <s.Info_address>
              <s.Info_address_find>
                <s.Info_address_find_title />
                <s.Sign_common_button>주소검색</s.Sign_common_button>
              </s.Info_address_find>
              <s.Info_address_input />
              <s.Info_address_input />
            </s.Info_address>
          </s.Info_division>
        </s.Basic_info>
        <s.Sign_common_button>회원가입</s.Sign_common_button>
        <s.Extra_info></s.Extra_info>
        <s.ServiceCheck></s.ServiceCheck>
      </s.Wrapper>
    </>
  );
}
