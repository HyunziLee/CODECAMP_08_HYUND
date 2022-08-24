import { Container } from "@material-ui/core";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import LayoutBanner from "./banner";
import LayoutHeader from "./header";
import LayoutSide from "./side";

interface ILayoutProps {
  children: ReactNode;
}

export default function Layout(props: ILayoutProps) {
  const router = useRouter();

  const HIDDEN_CAROUSEL = ["/Join", `/Login`];
  const isHiddenCarousel = HIDDEN_CAROUSEL.includes(router.asPath);
  return (
    <Container maxWidth="xl">
      <LayoutBanner />
      <LayoutHeader />
      {!isHiddenCarousel && <LayoutSide />}

      <div>{props.children}</div>
    </Container>
  );
}
