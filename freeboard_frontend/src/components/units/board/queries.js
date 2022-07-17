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
  mutation updateBoard( $boardId:ID!, $password:String, $updateBoardInput: UpdateBoardInput!){
    updateBoard(boardId:$boardId, password:$password, updateBoardInput: $updateBoardInput ){
      _id
      writer
      title
      contents
      updatedAt
    }
  }

`
