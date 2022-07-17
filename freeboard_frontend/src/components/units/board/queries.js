import {gql} from '@apollo/client';
import { Writer } from '../../../../styles/01-01';

export const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!){
    fetchBoard(boardId: $boardId){
      _id
      writer
      title
      contents
      youtubeUrl
      likeCount
      dislikeCount
      createdAt


    }
  }
`
export const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!){
    createBoard(createBoardInput:$createBoardInput){
      _id
      writer
      title
      contents
      
    }
  }
`
export const UPDATE_BOARD = gql`
  mutation updateBoard($updateBoardInput: UpdateBoardInput!,$password:String, $boardId:ID!){
    updateBoard(updateBoardInput: $updateBoardInput, password:$password, boardId:$boardId){
      _id
      Writer
      title
      contents
      updateAt
    }
  }



`
