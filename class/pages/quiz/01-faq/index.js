import { Wrapper,Finder, Nav, Account, Account__name, Account__img, Account__img__name, Account__img__circle, Menu, Menu__list, Menu__contents, Menu__contents__list, List__num, List__contents, Footer, Footer__list, Footer__list__icon, Footer__list__name } from "../../../styles/quiz01"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Quiz(){
  return(
    <Wrapper>
      <Nav></Nav>
      <Finder>🔎</Finder>
      <Account>
        <Account__name>마이</Account__name>
        <Account__img>
          <Account__img__circle></Account__img__circle>
          <Account__img__name>임정아 </Account__img__name>
        </Account__img>
      </Account>
      <Menu>
        <Menu__list>공지사항</Menu__list>
        <Menu__list>이벤트</Menu__list>
        <Menu__list>FAQ</Menu__list>
        <Menu__list>QnA</Menu__list>
      </Menu>
      <Menu__contents>
        <Menu__contents__list>
          <List__num>Q. 01</List__num>
          <List__contents>리뷰 작성은 어떻게 하나요?</List__contents>
        </Menu__contents__list>
        <Menu__contents__list>
          <List__num>Q. 02</List__num>
          <List__contents>리뷰 수정/삭제는 어떻게 하나요?</List__contents>
        </Menu__contents__list>
        <Menu__contents__list>
          <List__num>Q. 03</List__num>
          <List__contents>아이디/비밀번호를 잊어버렸어요.</List__contents>
        </Menu__contents__list>
        <Menu__contents__list>
          <List__num>Q. 04</List__num>
          <List__contents>회원탈퇴를 하고싶어요.</List__contents>
        </Menu__contents__list>
        <Menu__contents__list>
          <List__num>Q. 05</List__num>
          <List__contents>출발지 설정은 어떻게 하나요?</List__contents>
        </Menu__contents__list>
        <Menu__contents__list>
          <List__num>Q. 06</List__num>
          <List__contents>비밀번호를 변경하고 싶어요.</List__contents>
        </Menu__contents__list>
      </Menu__contents>
      <Footer>
        <Footer__list>
          <Footer__list__icon></Footer__list__icon>
          <Footer__list__name>홈</Footer__list__name>
        </Footer__list>
        <Footer__list>
          <Footer__list__icon></Footer__list__icon>
          <Footer__list__name>잇츠로드</Footer__list__name>
        </Footer__list>
        <Footer__list>
          <Footer__list__icon></Footer__list__icon>
          <Footer__list__name>마이찜</Footer__list__name>
        </Footer__list>
        <Footer__list>
          <Footer__list__icon></Footer__list__icon>
          <Footer__list__name>마이</Footer__list__name>
        </Footer__list>
        

      </Footer>
      


      
      
    </Wrapper>
  )
};
