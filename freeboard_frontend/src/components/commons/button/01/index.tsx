import styled from "@emotion/styled";

export const Button = styled.button<{ width: string }>`
  width: ${(props) => props.width};
  height: 70px;
  background-color: ${(props) => props.color};
  color: #333;
  font-size: 1rem;
  border: none;
  margin-bottom: 10px;
  cursor: pointer;
  @media (max-width: 767px) {
    font-size: 0.8rem;
  }
`;

interface IButton01Props {
  type: "button" | "submit" | "reset" | undefined;
  title: string;
  color: string;
  width: string;
  isValid: boolean;
  onClick: any;
}
export default function Button01(props: IButton01Props) {
  const { onClick, type, title, color, width } = props;

  return (
    <Button onClick={onClick} type={type} color={color} width={width}>
      {title}
    </Button>
  );
}
