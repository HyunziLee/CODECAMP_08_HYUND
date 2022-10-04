import { useRouter } from "next/router";
import { useState } from "react";
import * as s from "../layout.styles";
import { keyframes } from "@emotion/react";
import { useRecoilState } from "recoil";
import { basketLength, userInfoState } from "../../store";
import { useMutation } from "@apollo/client";
import { LOGOUT_USER } from "../../../components/units/board/queries";
import { IMutation } from "../../types/generated/types";
import { Modal } from "antd";

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
      opacity: 0.9;
    }
  `;
  const onClickLogout = async () => {
    try {
      await logoutUser();
      Modal.success({
        content: "로그아웃 되었습니다.",
        onOk: () => location.replace("/main"),
      });
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return (
    <s.WrapperHeader>
      <s.WrapperHeaderMenu>
        <s.HeaderMenuLogo
          onClick={() => {
            onClickMenu("main");
          }}
        >
          Pick Pick
        </s.HeaderMenuLogo>
        <s.HeaderMenus>
          <s.HeaderMenu onMouseOver={onHover}>중고마켓</s.HeaderMenu>
          <s.HeaderMenu onMouseOver={onHover}>커뮤니티</s.HeaderMenu>
          <s.HeaderMenu onMouseOver={onHover}>
            {userInfo?.name ? `${userInfo.name}님` : "내 계정"}
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
                중고상품 조회
              </s.Div>
              <s.Div
                onClick={() => {
                  onClickMenu("CreateItem");
                }}
              >
                내 상품 등록
              </s.Div>
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
                게시물 등록
              </s.Div>
            </s.HeaderDetailMenu>
            {!userInfo?.name ? (
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
                <s.Div
                  onClick={() => {
                    onClickMenu("basket");
                  }}
                >{`장바구니 ${basketTemp}`}</s.Div>
                <s.Div>
                  {userInfo.userPoint.amount ? userInfo.userPoint.amount : 0}P
                </s.Div>
              </s.HeaderDetailMenu>
            )}
          </s.HeaderDetailMenus>
        </s.HeaderDetail>
      ) : (
        ""
      )}
    </s.WrapperHeader>
    // <s.DivideLine />
  );
}
