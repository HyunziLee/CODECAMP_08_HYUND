import * as s from './postList.style'

export default function PostListUI(props){
  
  const getDate = (value)=>{
    const date = new Date(value)
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth()+1).padStart(2,"0");
    //padStart는 문자열 함수임
    const dd = String(date.getDate()).padStart(2,'0');
    return `${yyyy}-${mm}-${dd}`

  }
  
  

  return (

    
    <div>
      <s.Wrapper>
        <s.SearchWrapper>
          <s.SearchWrapper__titleSearch placeholder='제목을 검색해주세요.'></s.SearchWrapper__titleSearch>
          <s.SearchWrapper__dateSearch placeholder='YYYY.MM.DD - YYYY.MM.DD'></s.SearchWrapper__dateSearch>
          <s.SearchWrapper__btn>검색하기</s.SearchWrapper__btn>
        </s.SearchWrapper>
        <s.ListWrapper>
          <s.ListWrapper__row>
            <s.ListWrapper__column>번호</s.ListWrapper__column>
            <s.ListWrapper__column>제목</s.ListWrapper__column>
            <s.ListWrapper__column>작성자</s.ListWrapper__column>
            <s.ListWrapper__column>날짜</s.ListWrapper__column>
          </s.ListWrapper__row>

          {props.data?.fetchBoards.map((el,i)=>{
            console.log(el);
            
            <s.ListWrapper__row key={el._id}>
              
              <s.ListWrapper__column></s.ListWrapper__column>
              <s.ListWrapper__column>{el.title}</s.ListWrapper__column>
              <s.ListWrapper__column>{el.writer}</s.ListWrapper__column>
              <s.ListWrapper__column>{getDate(el.createdAt)}</s.ListWrapper__column>
            </s.ListWrapper__row>
           
            
          })}
        </s.ListWrapper>
        <s.Footer>
          <s.Footer__pageBlank></s.Footer__pageBlank>
          <s.Footer__pageMoveBtn>
            <s.Footer__pageMoveBtn_individual>0</s.Footer__pageMoveBtn_individual>
            <s.Footer__pageMoveBtn_individual>1</s.Footer__pageMoveBtn_individual>
            <s.Footer__pageMoveBtn_individual>2</s.Footer__pageMoveBtn_individual>
            <s.Footer__pageMoveBtn_individual>0</s.Footer__pageMoveBtn_individual>
          </s.Footer__pageMoveBtn>
          <s.Footer__submitBtn> 
            <s.Footer__submitBtn_icon>dd</s.Footer__submitBtn_icon>
            <s.Footer__submitBtn_text>게시물등록하기</s.Footer__submitBtn_text>
          </s.Footer__submitBtn>
        </s.Footer>
      </s.Wrapper>
      
    </div>
  )
}