import { gql } from '@apollo/client';

//$는 변수를 뜻함
export const CREATE_BOARD = gql`
  mutation createBoard($writer: String, $title: String, $contents: String){
    createBoard(writer: $writer, title: $title, contents: $contents){
        _id
        number
        message
    }
  }
`

export const UPDATE_BOARD = gql`
  mutation updateBoard($number:Int, $writer:String, $title:String, $contents:String){
    updateBoard(number:$number, writer:$writer, title:$title, contents:$contents){
        _id
        number
        message
    }
  }




`