export default function QuizPresenter(props){
  return(
    <>
     
      판매자: <input type="text" onChange={props.onChangeFunction.seller} />
      상품명: <input type="text" onChange={props.onChangeFunction.name}/>
      설명: <input type="text" onChange={props.onChangeFunction.detail} />
      가격: <input type="text" onChange={props.onChangeFunction.price}/>

      <button onClick={props.btnState ? props.onClickBtn : props.onClickUpdate}>{
        props.btnState ? "등록하기" : "수정하기"

      }</button>
    
    </>
  )
}