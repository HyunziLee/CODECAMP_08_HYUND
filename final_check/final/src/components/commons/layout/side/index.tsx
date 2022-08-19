import styled from "@emotion/styled";
import { Container } from "@material-ui/core";
// import { AccessAlarm, ThreeDRotation } from "@mui/icons-material";

const Wrapper = styled.div`
  height: 373px;
  width: 155px;
  border: 1px solid #111;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 1685px;
  top: 219px;
`;
const Title = styled.div``;
const Img = styled.div`
  width: 85px;
  height: 85px;
  background-color: #c4c4c4;
  margin: 10px auto;
`;
const Menu = styled.div``;
export default function LayoutSide() {
  return (
    <Wrapper>
      <Title> 최근 본 상품</Title>
      <Img />
      <Img />
      <Img />
    </Wrapper>
  );
}
