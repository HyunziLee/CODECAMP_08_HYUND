import styled from '@emotion/styled'
import {EditOutlined, MessageOutlined, UnorderedListOutlined} from '@ant-design/icons'

export const Layout_wrapper = styled.div`
  display: flex;
  flex-direction: row;
  
`
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  
  
`

export const Side_wrapper = styled.div`
  width: 200px;
  height: 708px;
  background-color: #FFF;
  box-shadow:  0px 5px 10px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  
`

export const Side_menu_wrapper = styled.div`
 
  
`

export const Menu_text = styled.div`
  
  margin: 30px 20px;
  display: flex;
  flex-direction: row;
  /* background-color: yellow; */
  
`

export const Line = styled.div`
  width: 160px;
  height: 1px;
  background-color: #E5E5E5;
  margin: auto;
  
`

export const Talkr_text = styled.div`
  font-weight: 800;
  font-size: 16px;
  
`
export const Total_board_text = styled.div`
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  
`

export const New_write_text = styled.div`
  font-weight: 700;
  font-size: 14px;
  color: #999;
  cursor: pointer;
  
`

export const Talkr = styled(MessageOutlined)`
  color: #6400FF;
  margin-right: 10px;
`
export const Total_board = styled(UnorderedListOutlined)`
  color: #6400FF;
  margin-right: 10px;
`
export const New_write = styled(EditOutlined)`
  color: #999;
  margin-right: 10px;
`

export const Carousel_wrapper = styled.div`
 
  width: 764px;
  
  
`

export const Carousel_div = styled.div`
    
    width: 764px;
    height: 240px;
    background: linear-gradient(to right, #6400FF, #E3D1FF);
    line-height: 240px;
    text-align: center;
    color: #fff;
    font-size: 50px;
    font-weight: 800;
    border-radius: 10px;
   
  `;

