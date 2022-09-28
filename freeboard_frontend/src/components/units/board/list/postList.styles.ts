import styled from "@emotion/styled";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export const Wrapper = styled.div`
  margin: auto;
  width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* border: 1px solid black; */
`;

export const SearchWrapper = styled.div`
  width: 90%;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

export const SearchTitle = styled.input`
  width: 65%;
  height: 45px;
  border-radius: 10px;
  border: none;
  background-color: #f2f2f2;
  &::placeholder {
    font-size: 16px;
  }
`;

export const ListWrapper = styled.div`
  width: 90%;

  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  align-items: center;
  font-size: 16px;
  border-top: 1px solid #ebebeb;
  height: 45px;

  & :first-child {
    width: 15%;
  }
  & :nth-child(2) {
    width: 55%;
  }
  & :nth-child(3) {
    width: 15%;
  }
  & :nth-child(4) {
    width: 15%;
  }
`;
export const Column = styled.div`
  span {
    cursor: pointer;
  }
`;
export const Footer = styled.div`
  width: 90%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const SubmitBtn = styled.button`
  display: flex;
  flex-direction: row;
  border: 1px solid #f2f2f2;
  border-radius: 10px;
  height: 52px;
  width: 171px;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  cursor: pointer;
`;
export const SubmitBtnIcon = styled.div`
  margin-right: 10px;
`;
export const SubmitBtnText = styled.div``;

export const SearchPage = styled.div`
  width: 300px;

  text-align: center;
  display: flex;
  flex-direction: row;
`;

export const SearchSpan = styled.span`
  font-size: 16px;

  margin: 10px;
  cursor: pointer;
`;

export const PageMoveBtns = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  align-items: flex-start;
  margin: auto;
`;
export const LeftBtn = styled(ChevronLeftIcon)`
  font-size: 16px;
  width: 30px;
  height: 30px;
  line-height: 30px;
  cursor: pointer;
`;
export const RightBtn = styled(ChevronRightIcon)`
  font-size: 16px;
  width: 30px;
  height: 30px;
  line-height: 30px;
  cursor: pointer;
`;
export const PageMoveBtn = styled.button`
  font-size: 16px;
  width: 30px;
  height: 30px;
  margin: 0px 10px;
  text-align: center;
  border: none;
  background-color: #fff;
  cursor: pointer;
  :focus {
    color: blue;
    font-weight: 700;
  }
`;
