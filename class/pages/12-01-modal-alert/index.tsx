import {Modal} from 'antd'

export default function ModalAlertPage(){
  
  const onClickSuccessBtn = ()=>{
    Modal.success({content:"게시글 등록에 성공했습니다."})
  }
  const onClickFailBtn = ()=>{
    Modal.error({content:"비밀번호가 틀렸습니다."})
    
  }
  
  return(
    <>
      <button onClick={onClickSuccessBtn}>성공했을 때</button>
      <button onClick={onClickFailBtn}>실패했을 때</button>
    </>
  )
}