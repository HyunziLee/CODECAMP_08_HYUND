import { useRouter } from "next/router";
import { useState } from "react";
import * as s from "../../../../styles/layout.styles";
import { keyframes } from "@emotion/react";
import { Container } from "@mui/material";
import { useRecoilState } from "recoil";
import { basketLength, userInfoState } from "../../store";
import { useMutation } from "@apollo/client";
import { LOGOUT_USER } from "../../../components/units/board/queries";
import { IMutation } from "../../types/generated/types";

export default function LayoutHeader() {
  const [userInfo] = useRecoilState(userInfoState);
  const [basketTemp] = useRecoilState(basketLength);
  const [isHover, setIsHover] = useState(false);
  const router = useRouter();

  const [logoutUser] = useMutation<Pick<IMutation, "logoutUser">>(LOGOUT_USER);

  const onHover = () => {
    setIsHover(true);
  };

  const onLeave = () => {
    setIsHover(false);
  };

  const onClickMenu = (p: string) => {
    router.push(`/${p}`);
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
  const onClickLogout = () => {
    logoutUser();
  };

  return (
    <>
      <Container maxWidth="xl">
        <s.WrapperHeader>
          <s.WrapperHeaderMenu>
            <s.HeaderMenuLogo
              onClick={() => {
                onClickMenu("main");
              }}
            >
              Home
            </s.HeaderMenuLogo>
            <s.HeaderMenus>
              <s.HeaderMenu onMouseOver={onHover}>Market</s.HeaderMenu>
              <s.HeaderMenu onMouseOver={onHover}>Community</s.HeaderMenu>
              <s.HeaderMenu onMouseOver={onHover}>
                {userInfo ? `${userInfo.name}님` : "Account"}
              </s.HeaderMenu>
            </s.HeaderMenus>
          </s.WrapperHeaderMenu>
          {isHover ? (
            <s.HeaderDetail Opacity={Opacity}>
              <s.HeaderDetailLogo />
              <s.HeaderDetailMenus onMouseLeave={onLeave}>
                <s.HeaderDetailMenu>
                  <s.Div
                    onClick={() => {
                      onClickMenu("market");
                    }}
                  >
                    중고상품
                  </s.Div>
                  <s.Div>menu2</s.Div>
                  <s.Div>menu3</s.Div>
                  <s.Div>menu4</s.Div>
                </s.HeaderDetailMenu>
                <s.HeaderDetailMenu>
                  <s.Div
                    onClick={() => {
                      onClickMenu("postlist");
                    }}
                  >
                    게시글 조회
                  </s.Div>
                  <s.Div
                    onClick={() => {
                      onClickMenu("postform");
                    }}
                  >
                    게시물 등록하기
                  </s.Div>
                </s.HeaderDetailMenu>
                {!userInfo ? (
                  <s.HeaderDetailMenu>
                    <s.Div
                      onClick={() => {
                        onClickMenu("login");
                      }}
                    >
                      로그인
                    </s.Div>
                    <s.Div
                      onClick={() => {
                        onClickMenu("signup");
                      }}
                    >
                      회원가입
                    </s.Div>
                  </s.HeaderDetailMenu>
                ) : (
                  <s.HeaderDetailMenu>
                    <s.Div
                      onClick={() => {
                        onClickMenu("myaccount");
                      }}
                    >
                      마이페이지
                    </s.Div>
                    <s.Div onClick={onClickLogout}>로그아웃</s.Div>
                    <s.Div>{`장바구니 ${basketTemp}`}</s.Div>
                    <s.Div>최근본 상품</s.Div>
                  </s.HeaderDetailMenu>
                )}
              </s.HeaderDetailMenus>
            </s.HeaderDetail>
          ) : (
            ""
          )}
        </s.WrapperHeader>
        <s.DivideLine />
      </Container>
    </>
  );
}
