import styled from "@emotion/styled";
import { Container } from "@mui/system";

export const Wrapper = styled(Container)``;

export const Main = styled.main`
  width: 100%;
  margin: 100px auto;
`;

export const QuestionWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const QuestionTitle = styled.div`
  font-size: 1.2rem;
  font-weight: 800;
  margin: 20px 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: 767px) {
    font-size: 0.9rem;
  }
`;

export const QuestionInput = styled.textarea`
  width: 80%;
  height: 100px;
  font-size: 16px;
  @media (max-width: 767px) {
    height: 50px;
  }
`;

export const QuestionButton = styled.button`
  width: 15%;
  height: 100px;
  font-size: 1.2rem;
  font-weight: 700;
  border: none;
  background-color: #111;
  color: #fff;
  cursor: pointer;
  @media (max-width: 767px) {
    height: 50px;
    font-size: 0.9rem;
  }
`;
