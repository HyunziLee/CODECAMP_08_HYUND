import styled from "@emotion/styled";
import { Container } from "@material-ui/core";
import { useRecoilState } from "recoil";
import { userInfoState } from "../../../../commons/store";

const Wrapper = styled.div`
  height: 100px;
  width: 1920px;
  border-bottom: 1px solid #c4c4c4;
`;
const MainWrapper = styled.div`
  width: 1200px;
  height: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: auto;
`;

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: row;

  width: 300px;
  justify-content: space-between;
`;

const Menu = styled.div``;
const EmptyDiv = styled.div`
  width: 50%;
`;
export default function LayoutBanner() {
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  return (
    <>
      <Wrapper>
        <MainWrapper>
          <EmptyDiv></EmptyDiv>

          <MenuWrapper>
            {!userInfo ? <Menu>로그인</Menu> : <Menu>{userInfo.name}</Menu>}

            <Menu>회원가입</Menu>
            <Menu>장바구니</Menu>
          </MenuWrapper>
        </MainWrapper>
      </Wrapper>
    </>
  );
}
