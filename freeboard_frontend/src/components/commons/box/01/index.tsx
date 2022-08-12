import styled from "@emotion/styled";

export const WrapperBox = styled.div`
  margin: auto;
  width: 1200px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
`;

export default function Box01() {
  return <WrapperBox></WrapperBox>;
}
