import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import LayoutFooter from "./footer";
import LayoutHeader from "./header";
// import LayoutSide from "./side";

// 특정페이지에서 안보이게 하는 방법
const HIDDEN_HEADER_FOOTER_SIDE = ["/"];

// const HIDDEN_CAROUSEL = [
//   "/Write", `/Edit/${router.query.id}`
// ];

interface ILayoutProps {
  children: ReactNode;
}

export default function Layout(props: ILayoutProps) {
  const router = useRouter();
  // console.log(router);

  const isHiddenHeaderFooterSide = HIDDEN_HEADER_FOOTER_SIDE.includes(
    router.asPath
  ); // asPath는 현재 주소임

  const Wrapper = styled.main`
    width: 100vw;
  `;

  return (
    <Wrapper>
      {!isHiddenHeaderFooterSide && <LayoutHeader />}
      {/* {!isHiddenHeaderFooterSide && <LayoutSide />} */}
      <div>{props.children}</div>
      {!isHiddenHeaderFooterSide && <LayoutFooter />}
    </Wrapper>
  );
}
