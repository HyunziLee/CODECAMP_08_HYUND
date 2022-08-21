import styled from "@emotion/styled";
import { Container } from "@material-ui/core";
import { AttachMoney, Money } from "@mui/icons-material";
import { useMoveToPage } from "../../hooks/useMoveToPage";
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
  cursor: pointer;
`;
const Menu = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export default function LayoutHeader() {
  const { onClickMovetoPage } = useMoveToPage();

  return (
    <>
      <Wrapper>
        <MainWrapper>
          <Logo src="/img/logo_reverse.png" onClick={onClickMovetoPage(`/`)} />

          <Menu onClick={onClickMovetoPage(`/Create`)}>
            <AttachMoney />
            판매하기
          </Menu>
        </MainWrapper>
      </Wrapper>
    </>
  );
}
