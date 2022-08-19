import styled from "@emotion/styled";

export const WarningDiv = styled.div`
  color: red;
`;
export default function Warning(props) {
  return <WarningDiv>{props.errormsg}</WarningDiv>;
}
