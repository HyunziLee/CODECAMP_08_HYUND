import styled from "@emotion/styled";

export const Button = styled.button<{
  width: string;
  bgColor: string;
  fontColor: string;
}>`
  width: ${(props) => props.width};
  height: 70px;
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.fontColor};
  font-size: 1rem;
  font-weight: 700;
  border: none;
  margin-bottom: 10px;
  cursor: pointer;
  @media (max-width: 767px) {
    font-size: 0.7rem;
    width: 40%;
  }
`;

interface IButton01Props {
  type: "button" | "submit" | "reset" | undefined;
  title: string;
  isValid?: boolean;
  onClick: any;
  width: string;
  bgColor: string;
  fontColor: string;
}
export default function Button01(props: IButton01Props) {
  const { onClick, type, title, width, bgColor, fontColor } = props;

  return (
    <Button
      onClick={onClick}
      type={type}
      width={width}
      bgColor={bgColor}
      fontColor={fontColor}
    >
      {title}
    </Button>
  );
}
