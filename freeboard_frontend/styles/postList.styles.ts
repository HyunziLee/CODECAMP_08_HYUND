import styled from "@emotion/styled";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { style } from "@mui/system";

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

export const SearchWrapper__titleSearch = styled.input`
  width: 65%;
  height: 45px;
  border-radius: 10px;
  border: none;
  background-color: #f2f2f2;
  &::placeholder {
    font-size: 16px;
  }
`;
export const SearchWrapper__dateSearch = styled.input`
  width: 20%;
  height: 45px;
  border: 1px solid #bdbdbd;
  &::placeholder {
    color: #bdbdbd;
    text-align: center;
  }
`;
export const SearchWrapper__btn = styled.button`
  width: 10%;
  height: 45px;
  border-radius: 10px;
  color: #fff;
  background-color: #000;
  font-size: 16px;
`;
export const ListWrapper = styled.div`
  width: 90%;

  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;
export const ListWrapper__row = styled.div`
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
export const ListWrapper__column = styled.div`
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
export const Footer__pageBlank = styled.div``;
export const Footer__pageMoveBtn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  align-items: flex-start;
  margin: auto;
`;
export const Footer__pageMoveBtn_Left = styled(LeftOutlined)`
  font-size: 16px;
  width: 30px;
  height: 30px;
  line-height: 30px;
  cursor: pointer;
`;
export const Footer__pageMoveBtn_Right = styled(RightOutlined)`
  font-size: 16px;
  width: 30px;
  height: 30px;
  line-height: 30px;
  cursor: pointer;
`;
export const Footer__pageMoveBtn_individual = styled.button`
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

export const Footer__submitBtn = styled.button`
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
export const Footer__submitBtn_icon = styled.div`
  margin-right: 10px;
`;
export const Footer__submitBtn_text = styled.div``;

export const Search_page = styled.div`
  width: 300px;

  text-align: center;
  display: flex;
  flex-direction: row;
`;

export const Search_span = styled.span`
  font-size: 16px;

  margin: 10px;
  cursor: pointer;
`;
