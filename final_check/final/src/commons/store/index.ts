import { atom, selector } from "recoil";
import { getAccessToken } from "../libraries/getAccessToken";
import { getUserInfo } from "../libraries/getUserInfo";
// import { getUserInfo } from "../libraries/getUserInfo";

export const isEditState = atom({
  key: "isEditState",
  default: true,
});

export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});

export const userInfoState = atom({
  key: "userInfoState",
  default: {
    email: "",
    name: "",
    userPoint: 0,
  },
});

export const visitedPageState = atom({
  key: "visitedPageState",
  default: "/",
});

export const KakaoMapAddress = atom({
  key: "KakaoMapAddress",
  default: [],
});

export const KakaoMapLa = atom({
  key: "KakaoMapLa",
  default: 0,
});
export const KakaoMapMa = atom({
  key: "KakaoMapMa",
  default: 0,
});

// export const loginInfo = atom({
//   key: "loginInfo",
//   default: {
//     email: "",
//     password: "",
//   },
// });

export const TagArr = atom({
  key: "TagArr",
  default: [],
});

export const UploadImgState = atom({
  key: "UploadImg",
  default: "",
});

export const detailImgState = atom({
  key: "detailImgState",
  default: "",
});

export const restoreAccessTokenLoadable = selector({
  key: "restoreAccessTokenLoadable",
  get: async () => {
    const newAccessToken = await getAccessToken();
    return newAccessToken;
  },
});

export const getUserInfoLoadable = selector({
  key: "getUserInfoLoadable",
  get: async (pram) => {
    const newUserInfo = await getUserInfo(pram);
    return newUserInfo;
  },
});
