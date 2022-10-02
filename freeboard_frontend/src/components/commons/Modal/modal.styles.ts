import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Address = styled.div`
  margin-bottom: 20px;
`;

export const Text = styled.div<{ weight: string }>`
  font-weight: ${(props) => props.weight};
`;

export const Input = styled.input`
  width: 100%;
`;
