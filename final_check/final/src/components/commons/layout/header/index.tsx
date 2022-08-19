import styled from "@emotion/styled";
import { Container } from "@material-ui/core";
// import { AccessAlarm, ThreeDRotation } from "@mui/icons-material";

const Wrapper = styled.div`
  height: 157px;
  width: 1920px;
  border-bottom: 1px solid #c4c4c4;
`;

const MainWrapper = styled.div`
  height: 100%;
  width: 1200px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: auto;
`;
const Logo = styled.img`
  background-image: url("/img/logo.png");
`;
const Menu = styled.div``;
export default function LayoutHeader() {
  return (
    <>
      <Wrapper>
        <MainWrapper>
          <Logo src="/img/logo_reverse.png" />

          <Menu>판매하기</Menu>
        </MainWrapper>
      </Wrapper>
    </>
  );
}
