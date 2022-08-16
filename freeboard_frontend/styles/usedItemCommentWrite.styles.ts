import styled from "@emotion/styled";

export const Wrapper = styled.main`
  width: 1200px;

  margin: 100px auto;
`;

export const QuestionWrapper = styled.section`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const QuestionTitle = styled.div`
  font-size: 20px;
  font-weight: 800;
  margin: 20px 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const QuestionInput = styled.textarea`
  width: 80%;
  height: 100px;
  font-size: 16px;
`;

export const QuestionButton = styled.button`
  width: 15%;
  height: 100px;
  font-size: 16px;
  font-weight: 800;
  border: none;
  background-color: #bbd0ff;
  cursor: pointer;
`;
