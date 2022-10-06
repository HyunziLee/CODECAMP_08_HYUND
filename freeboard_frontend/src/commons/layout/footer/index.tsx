import * as s from "../layout.styles";

export default function LayoutFooter() {
  return <s.WrapperFooter>
    <s.FooterMain>
      <s.TitleWrapper direction="column">
        <s.FooterTitle size="1.2rem">Contact us</s.FooterTitle>
        <s.FooterTitle size="0.8rem">TEL: 0000-0000</s.FooterTitle>
        <s.FooterTitle size="0.8rem">email: example@pickpick.com</s.FooterTitle>
      </s.TitleWrapper>
      <s.TitleWrapper direction="row">
        <s.FooterTitle size="0.8rem">이용 안내</s.FooterTitle>
        <s.FooterTitle size="0.8rem">고객지원</s.FooterTitle>
      </s.TitleWrapper>
     
    </s.FooterMain>
  </s.WrapperFooter>
}
