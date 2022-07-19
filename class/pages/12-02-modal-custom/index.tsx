import {Modal} from 'antd'
import {useState} from 'react'



export default function ModalAlertPage(){
  
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [password, setPassword] = useState('')

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onChangePwd=(e)=>{
    setPassword(e.target.value)
  }
  
  return(
    <>
      <button  onClick={showModal}>
        모달창 열기 
      </button>
      <Modal title="모달제목" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        비밀번호: <input type="password" onChange={handleCancel}/>
      </Modal>
    </>
  )
}