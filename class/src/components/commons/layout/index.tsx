import LayoutBanner from "./banner";
import LayoutFooter from "./footer";
import LayoutHeader from "./header";
import LayoutNavigation from "./navigation";
import { ReactNode } from "react";

interface ILayoutProps {
  children: ReactNode;
}

export default function Layout(props: ILayoutProps) {
  return (
    <>
      <LayoutBanner></LayoutBanner>
      <LayoutNavigation></LayoutNavigation>
      <div style={{ display: "flex" }}>
        <div
          style={{ width: "30%", height: "700px", background: "orange" }}
        ></div>
        <div style={{ width: "70%" }}>{props.children}</div>
      </div>

      <LayoutFooter></LayoutFooter>
    </>
  );
}
