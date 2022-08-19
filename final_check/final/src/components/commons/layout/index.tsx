import { Container } from "@material-ui/core";
import { ReactNode } from "react";
import LayoutBanner from "./banner";
import LayoutHeader from "./header";
import LayoutSide from "./side";

interface ILayoutProps {
  children: ReactNode;
}

export default function Layout(props: ILayoutProps) {
  return (
    <Container maxWidth="xl">
      <LayoutBanner />
      <LayoutHeader />
      <LayoutSide />
      <div>{props.children}</div>
    </Container>
  );
}
