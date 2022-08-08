import styled from "@emotion/styled";
import * as s from "../../../../../styles/login.styles";

export const LoginButton = styled.button`
  width: 600px;
  height: 70px;
  background-color: skyblue;
  text-align: center;
  font-size: 20px;
  font-weight: 800;
  line-height: 70px;
  margin-bottom: 10px;
  border: none;
  cursor: pointer;
`;
export default function Button01(props) {
  return <LoginButton>{props.title}</LoginButton>;
}
