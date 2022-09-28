import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const WrapperContents = styled.div`
  margin-bottom: 20px;
`;
export const ContentsInput = styled.textarea`
  border: 1px solid #d9d9d9;
  border-radius: 2px;
  :focus {
    outline: #40a9ff;
    background-color: transparent;
    transition: all 0.3s linear;
    box-shadow: 0 0 0 2px rgb(24 144 255 /20%);
  }
  :hover {
    border-color: #40a9ff;
  }
`;
export const WrapperRating = styled.div`
  margin-bottom: 20px;
`;
export const WrapperPassword = styled.div`
  margin-bottom: 20px;
`;
export const PasswordInput = styled.input`
  height: 32px;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
  :focus {
    outline: #40a9ff;
    background-color: transparent;
    transition: all 0.3s linear;
    box-shadow: 0 0 0 2px rgb(24 144 255 /20%);
  }
  :hover {
    border-color: #40a9ff;
  }
`;
export const SubmitBtn = styled.button`
  margin: auto;
  width: 50px;
  height: 32px;
  background-color: #fff;
  border: 1px solid #40a9ff;
  box-shadow: 0 2px 0 rgb(0 0 0 /2%);
  cursor: pointer;
`;

export const ErrorMsg = styled.div`
  color: red;
`;
export const CompleteMsg = styled.div`
  text-align: center;
`;
