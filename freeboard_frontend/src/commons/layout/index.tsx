import { Container } from "@mui/material";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import LayoutFooter from "./footer";
import LayoutHeader from "./header";

// 특정페이지에서 안보이게 하는 방법
const HIDDEN_HEADERS = ["/"];

interface ILayoutProps {
  children: ReactNode;
}

export default function Layout(props: ILayoutProps) {
  const router = useRouter();
  console.log(router);

  const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath); // asPath는 현재 주소임

  return (
    <>
      <Container maxWidth="xl">
        {!isHiddenHeader && <LayoutHeader />}

        <div>{props.children}</div>

        <LayoutFooter></LayoutFooter>
      </Container>
    </>
  );
}
