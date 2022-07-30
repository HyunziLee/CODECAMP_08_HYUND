import styled from "@emotion/styled";
import {EditOutlined, MessageOutlined, UnorderedListOutlined, UserOutlined} from '@ant-design/icons'

export const Wrapper = styled.div`
  margin-top: 30px;

`
export const Wrapper_scroll = styled.div`
  width: 764px;
  height: 446px;
  overflow: auto;

`

export const List_wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 764px;
  height: 50px;
  border-radius: 10px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.05);
  background: #FFFFFF;
  justify-content: space-between;
  align-items: center;

`
export const List_writer = styled.div`
  margin-left: 20px;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  letter-spacing: -0.01em;
  color: #333;
  cursor: pointer;


`
export const List_date = styled.div`
  margin-right: 20px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #999;
`

export const Write_wrapper = styled.div`
  width: 764px;
  height: 648px;
  border-radius: 10px;
  background: #FFFFFF;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.05);
  /* display: flex;
  flex-direction: column; */
  
 
`

export const Write_menu = styled.div`
  font-weight: 700;
  font-size: 18px;
  letter-spacing: -0.01em;
  margin-top: 30px;
  margin-bottom: 30px;
  margin-left: 40px;
  

`
export const Write_line = styled.div`
  width: 684px;
  height: 1px;
  background: #6400FF;
  margin: auto;
  margin-top: 30px;
  margin-bottom: 30px;
  
`
export const Write_container = styled.div`
  
`
export const Write_container_title = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 40px;
  margin-bottom: 30px;
`
export const Div = styled.div`
  font-weight: 700;
  font-size: 14px;
  color: #333;
  margin-right: 30px;
  line-height: 20px;
  width: 50px;
`
export const Title_input = styled.input`
  width: 604px;
  height: 40px;
  background: #FFFFFF;
  border: 1px solid #E5E5E5;
  border-radius: 5px;
    
`
export const Write_container_contents = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 40px;
  margin-bottom: 30px;
  
`
export const Contents_input = styled.textarea`
  width: 604px;
  height: 240px;
  background: #FFFFFF;
  border: 1px solid #E5E5E5;
  border-radius: 5px;
  
`
export const Write_container_uploadImg = styled.div`
   display: flex;
    flex-direction: row;
    margin-left: 40px;
    margin-bottom: 30px;
  
`
export const UploadImg = styled.div`
  width: 80px;
  height: 80px;
  background: #FAFAFA;
  border: 1px dashed #E5E5E5;
  border-radius: 5px;
  margin-right: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  
`
export const Write_container_userInfo = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 40px;
  margin-bottom: 30px;
  
  
`
export const UserInfo_writer = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 30px;
  
  
`
export const UserInfo_password = styled.div`
  display: flex;
  flex-direction: row;
  
  
`
export const UserInfo_input = styled.input`
  width: 242px;
  height: 40px;
  background: #FFFFFF;
  border: 1px solid #E5E5E5;
  border-radius: 5px;
  
`
export const Button_wrapper = styled.div`
 display: flex;
 flex-direction: row;
 width: ${(props) => (props.check ? '250px' : '170px')};
 margin : auto;
 margin-top: 40px;
 margin-bottom: 40px;
 justify-content: space-between;

`
export const Button_submit = styled.button`
  background: #6400FF;
  border-radius: 30px;
  width: 80px;
  height: 30px;
  color: #fff;
  border: none;
  cursor: pointer;
  
`
export const Button_cancel = styled.button`
  background: #999;
  border-radius: 30px;
  width: 80px;
  height: 30px;
  color: #fff;
  border: none;
  cursor: pointer;
`
export const Detail_wrapper = styled.div`
  width: 764px;
  height: 388px;
  background: #FFFFFF;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  
  
`
export const Detail_menu = styled.div`
  margin-top: 30px;
  margin-left: 40px;
  margin-bottom: 20px;
  
  
`
export const Detail_Line = styled.div`
  width: 684px;
  height: 1px;
  background: #E5E5E5;
  margin: auto;
  margin-bottom: 30px;
  
`
export const Detail_Image = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 684px;
  margin: auto;
  margin-bottom: 30px;
  
`
export const Detail_Image_img = styled.img`
  width: 220px;
  height: 125px;
  border: 1px solid #E5E5E5;
  object-fit: contain;
  
  
`
export const Detail_contents = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 40px;
  margin-bottom: 20px;
  
`
export const Detail_contents_writer = styled.div`
  
  
`
export const Detail_Avatar = styled(UserOutlined)`
  color: #6400FF;
  
`
export const Detail_contents_writer_writer = styled.div`
  font-weight: 700;
  font-size: 14px;
  color: #000;
  margin-left: 10px;
  margin-right: 30px;
  
`

export const Detail_contents_contents = styled.div`
  width: 564px;
  height: 69px;
  font-weight: 400;
  font-size: 15px;
  color: #333;

  
  
`
  

