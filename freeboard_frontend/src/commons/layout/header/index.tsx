import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useState } from "react";
import * as s from "../../../../styles/layout.styles";

export default function LayoutHeader() {
  const menuList = ["menu1", "menu2", "menu3", "menu4"];
  const [isHover, setIsHover] = useState(false);
  const router = useRouter();

  const onHover = () => {
    setIsHover(!isHover);
    console.log(isHover);
  };

  const onClickGoHome = () => {
    router.push("/PostList/p");
  };
  return (
    <>
      <s.Wrapper_header>
        <s.Header_menu>
          <s.Header_menu_logo>Home</s.Header_menu_logo>
          <s.Header_menu_menu>
            <s.Header_menu_text onMouseOver={onHover}>menu1</s.Header_menu_text>
            <s.Header_menu_text onMouseOver={onHover}>menu2</s.Header_menu_text>
            <s.Header_menu_text onMouseOver={onHover}>menu3</s.Header_menu_text>
            <s.Header_menu_text onMouseOver={onHover}>
              Account
            </s.Header_menu_text>
          </s.Header_menu_menu>
        </s.Header_menu>
      </s.Wrapper_header>
      {isHover ? (
        <s.Header_menu_hover onMouseLeave={onHover}>
          <div>글 작성하기</div>
          <div>게시글 조회</div>
        </s.Header_menu_hover>
      ) : (
        ""
      )}
      <s.Header_line></s.Header_line>
    </>
  );
}
