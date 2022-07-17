import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 1500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;

`

export const SearchWrapper = styled.div`
  width: 90%;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  

`

export const SearchWrapper__titleSearch = styled.input`
  width: 65%;
  height: 45px;
  border-radius: 10px;
  border: none;
  background-color: #F2F2F2;
  &::placeholder{
    font-size: 16px;
  }

`
export const SearchWrapper__dateSearch = styled.input`
  width: 20%;
  height: 45px;
  border: 1px solid #BDBDBD;
  &::placeholder {
    color: #BDBDBD;
    text-align: center;
  }
`
export const SearchWrapper__btn = styled.button`
  width: 10%;
  height: 45px;
  border-radius: 10px;
  color: #fff;
  background-color: #000;
  font-size: 16px;

`
export const ListWrapper = styled.div`
  width: 90%;
  
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  

`
export const ListWrapper__row = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  align-items: center;
  font-size: 16px;
  border-top: 1px solid black;
  height: 45px;
  
  & :first-child {
    width: 15%;
    
  };
  & :nth-child(2) {
    width: 55%;
  };
  & :nth-child(3) {
    width: 15%;
  };
  & :nth-child(4) {
    width: 15%;
  };

`
export const ListWrapper__column = styled.div`
  
`
export const Footer = styled.div`
  width: 90%;
 
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 30px;

`
export const Footer__pageBlank = styled.div`
  


`
export const Footer__pageMoveBtn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;


`
export const Footer__pageMoveBtn_individual = styled.div`

`

export const Footer__submitBtn = styled.button`
  display: flex;
  flex-direction: row;
  border: 1px solid #F2F2F2;
  border-radius: 10px;
  height: 52px;
  width: 171px;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  cursor: pointer;
  

`
export const Footer__submitBtn_icon = styled.div`
  margin-right: 10px;
  

`
export const Footer__submitBtn_text = styled.div`

`