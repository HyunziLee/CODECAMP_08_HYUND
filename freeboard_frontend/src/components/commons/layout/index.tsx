import { useRouter } from "next/router";
import { ReactNode } from "react";
import LayoutBanner from "./banner";
import LayoutFooter from "./footer";
import LayoutHeader from "./header";
import LayoutNavigation from "./navigation";

// 특정페이지에서 안보이게 하는 방법
const HIDDEN_HEADERS = ["폴더명"];

interface ILayoutProps {
  children: ReactNode;
}

export default function Layout(props: ILayoutProps) {
  const router = useRouter();
  console.log(router);

  const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath); //asPath는 현재 주소임

  return (
    <>
      {!isHiddenHeader && <LayoutHeader></LayoutHeader>}
      <LayoutBanner></LayoutBanner>
      <LayoutNavigation></LayoutNavigation>
      <div style={{ display: "flex" }}>
        <div
          style={{ width: "100px", height: "700px", background: "orange" }}
        ></div>
        <div>{props.children}</div>
      </div>

      <LayoutFooter></LayoutFooter>
    </>
  );
}