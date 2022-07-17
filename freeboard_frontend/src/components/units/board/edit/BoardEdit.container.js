import BoardWrite from '../write/BoardWrite.container'

export default function PostEdit(props){

  return(
    <BoardWrite btnState = {props.btnState}/>
  )
}

//onClickUpdateBtn