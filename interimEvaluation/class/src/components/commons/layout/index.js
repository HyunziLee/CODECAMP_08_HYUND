import LayoutCarousel from "./carousel";
import LayoutSide from "./side";
import * as s from './layout.styles'
import { useRouter } from "next/router";

export default function Layout(props){
  const router = useRouter()

  const HIDDEN_CAROUSEL = [
    "/Write", `/Edit/${router.query.id}`
  ];
  const isHiddenCarousel = HIDDEN_CAROUSEL.includes(router.asPath)
  return(
    <>
    <s.Layout_wrapper>
      <LayoutSide></LayoutSide>
        <s.Wrapper>
          {!isHiddenCarousel && <LayoutCarousel />}
          <div>{props.children}</div>
        </s.Wrapper>
    </s.Layout_wrapper>
     
      
    
    </>

  )
}