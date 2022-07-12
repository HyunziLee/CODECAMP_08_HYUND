import {
  Wrapper,
  UserWrapper,
  ProfileWrapper,
  ProfileImg,
  ProfileName,
  ProfileDate,
  Name,
  Date,
  ProfileIcon,
  ProfileIcon__Icon,
  Title,
  ImageArea,
  Contents,
  Youtube,
  LikeDislikeIcon,
  LikeDislikeIcon_icon,
  



} from "../../../styles/postDetail";


import { ReactDOM } from "react";
import {useQuery, useMutation, gql} from '@apollo/client';
import {useRouter} from 'next/router';
import { useState } from "react";


import {faLocationDot, faLink, faThumbsUp, faThumbsDown} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FETCH_BOARD = gql`
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



export default function PostDetail(){

  const router = useRouter();

  

  const{data} = useQuery(FETCH_BOARD, {
    variables:{
      // router.query.변수명=> 하위 폴더 [변수명]
      boardId: router.query.name
    }
  })
  console.log(router.query.name)
  console.log(data)

  const [dateCopy, setDateCopy] = useState('');
  

  // const DateCopy = ()=>{
  //   if (data){
  //     let result = data.fetchBoard.createdAt
  //     let copy = result.substr(0,10);
  //     setDateCopy(copy);

  //   } else {
  //     "로딩중"
  //   }
    

  // }


  // const LikeBtn = ()=>{


  // }

  return(
    <div>
      <Wrapper>
        <UserWrapper>
          <ProfileWrapper>
            <ProfileImg></ProfileImg>
            <ProfileName>
              <Name>{data? data.fetchBoard.writer : "로딩중"}</Name>
              <Date>{data? data.fetchBoard.createdAt : "로딩중"}</Date>
            </ProfileName>
          </ProfileWrapper>
          <ProfileIcon>
            <ProfileIcon__Icon>
              <FontAwesomeIcon icon={faLink}/>
            </ProfileIcon__Icon>
            <ProfileIcon__Icon>
              <FontAwesomeIcon icon={faLocationDot}/>
            </ProfileIcon__Icon>
          </ProfileIcon>
        </UserWrapper>
        <Title>{data?.fetchBoard.title}</Title>
        <ImageArea>{data?.fetchBoard.images}</ImageArea>
        <Contents>{data?.fetchBoard.contents}</Contents>
        <Youtube>{data?.fetchBoard.youtubeUrl}</Youtube>
        <LikeDislikeIcon>
          <LikeDislikeIcon_icon>
            <FontAwesomeIcon icon={faThumbsUp}/>
            <div>{data?.fetchBoard.likeCount}</div>
          </LikeDislikeIcon_icon>

          <LikeDislikeIcon_icon>
            <FontAwesomeIcon icon={faThumbsDown}/>
            <div>{data?.fetchBoard.dislikeCount}</div>
          </LikeDislikeIcon_icon>
        </LikeDislikeIcon>


      </Wrapper>
    </div>
  )
}