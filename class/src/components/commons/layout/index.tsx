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
          style={{ width: "100px", height: "700px", background: "orange" }}
        ></div>
        <div>{props.children}</div>
      </div>

      <LayoutFooter></LayoutFooter>
    </>
  );
}
