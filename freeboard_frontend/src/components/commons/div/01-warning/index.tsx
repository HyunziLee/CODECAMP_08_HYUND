import styled from "@emotion/styled";

export const WarningDiv = styled.div`
  color: red;
  margin-bottom: 20px;
`;
interface IWarningProps {
  errormsg?: string;
}
export default function Warning(props: IWarningProps) {
  return <WarningDiv>{props.errormsg}</WarningDiv>;
}
