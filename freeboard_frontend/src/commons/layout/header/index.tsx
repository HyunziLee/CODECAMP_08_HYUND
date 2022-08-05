import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useState } from "react";
import * as s from "../../../../styles/layout.styles";
import { css, keyframes } from "@emotion/react";

export default function LayoutHeader() {
  const menuList = ["menu1", "menu2", "menu3", "menu4"];
  const [isHover, setIsHover] = useState(false);
  const router = useRouter();

  const onHover = () => {
    setIsHover(true);
  };
  console.log(isHover);

  const onLeave = () => {
    setIsHover(false);
  };

  const onClickGoHome = () => {
    router.push("/PostList/p");
  };

  const onClickGoList = () => {
    router.push("/PostList/p");
  };
  const onClickGoWrite = () => {
    router.push("/PostForm");
  };

  const Opacity = keyframes`
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  `;

  return (
    <>
      <s.Wrapper_header>
        <s.Header_menu>
          <s.Header_menu_logo>Home</s.Header_menu_logo>
          <s.Header_menu_menu>
            <s.Header_menu_text onMouseOver={onHover}>menu1</s.Header_menu_text>
            <s.Header_menu_text onMouseOver={onHover}>menu2</s.Header_menu_text>
            <s.Header_menu_text onMouseOver={onHover}>
              Community
            </s.Header_menu_text>
            <s.Header_menu_text onMouseOver={onHover}>
              Account
            </s.Header_menu_text>
          </s.Header_menu_menu>
        </s.Header_menu>
        {isHover ? (
          <s.Header_detail Opacity={Opacity}>
            <s.Header_detail_logo></s.Header_detail_logo>
            <s.Header_detail_menu onMouseLeave={onLeave}>
              <s.Header_detail_text>
                <s.Div>menu4 </s.Div>
                <s.Div>menu3</s.Div>
                <s.Div>menu3</s.Div>
                <s.Div>menu4</s.Div>
              </s.Header_detail_text>
              <s.Header_detail_text>
                <s.Div>menu1</s.Div>
                <s.Div>menu2</s.Div>
                <s.Div>menu3</s.Div>
                <s.Div>menu4</s.Div>
              </s.Header_detail_text>
              <s.Header_detail_text>
                <s.Div onClick={onClickGoList}>게시글 조회</s.Div>
                <s.Div onClick={onClickGoWrite}>게시물 등록하기</s.Div>
                <s.Div>menu3</s.Div>
                <s.Div>menu4</s.Div>
              </s.Header_detail_text>
              <s.Header_detail_text>
                <s.Div>로그인</s.Div>
                <s.Div>마이페이지</s.Div>
                <s.Div>주문조회</s.Div>
                <s.Div>최근본상품</s.Div>
              </s.Header_detail_text>
            </s.Header_detail_menu>
          </s.Header_detail>
        ) : (
          ""
        )}
      </s.Wrapper_header>
      <s.Header_line></s.Header_line>
    </>
  );
}
