import styled from "@emotion/styled";
import { breakPoints } from "../../src/commons/styles/media";

const Wrapper = styled.div`
  width: 1000px;
  height: 1000px;
  background-color: yellow;

  @media ${breakPoints.tablet} {
    width: 500px;
    height: 500px;
    background-color: aqua;
  }

  @media ${breakPoints.mobile} {
    width: 100px;
    height: 100px;
    background-color: sandybrown;
    display: none;
  }
`;

const MWrapper = styled.div`
  display: none;

  @media ${breakPoints.mobile} {
    display: block;
    width: 30%;
    height: 18.75rem; // em도 있음
    background-color: orange;
  }
`;
export default function ResponsiveDesignPage() {
  return (
    <>
      <MWrapper>모바일에서만 필요한 컴포넌트</MWrapper>
      <Wrapper>상자</Wrapper>
    </>
  );
}
