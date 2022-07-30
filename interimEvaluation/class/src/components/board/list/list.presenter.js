import { useRouter } from 'next/router'
import * as s from '../../../commons/styles/main.styles'

export default function ListPresenter(props){
  const router = useRouter()

  const onClickListDetail = ()=>{
    router.push(`/Detail/${props.e._id}`)

  }
  return(

    <>
     
      
      <s.Wrapper>
        <s.List_wrapper>
          <s.List_writer onClick={onClickListDetail}>{props.e.writer}</s.List_writer>
          <s.List_date>{props.e.createdAt}</s.List_date>
        </s.List_wrapper>
      </s.Wrapper>
    </>
  )
}