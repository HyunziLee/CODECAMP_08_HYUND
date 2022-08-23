import styled from "@emotion/styled";
import { Container } from "@material-ui/core";
import { useRecoilState } from "recoil";
import { recentImg } from "../../../../commons/store";
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
const Img = styled.img`
  width: 85px;
  height: 85px;
  background-color: #c4c4c4;
  margin: 10px auto;
`;
const Menu = styled.div``;
export default function LayoutSide() {
  const [recent, setRecent] = useRecoilState(recentImg);
  return (
    <Wrapper>
      <Title> 최근 본 상품</Title>
      <Img src={`https://storage.googleapis.com/${recent[2]}`} />
      <Img src={`https://storage.googleapis.com/${recent[1]}`} />
      <Img src={`https://storage.googleapis.com/${recent[0]}`} />
    </Wrapper>
  );
}
