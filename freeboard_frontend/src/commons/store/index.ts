import { atom, selector } from "recoil";
import { getAccessToken } from "../libraries/getAccessToken";
import { getUserInfo } from "../libraries/getUserInfo";

export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});

export const userInfoState = atom({
  key: "userInfoState",
  default: {
    email: "",
    name: "",
    _id: "",
    picture: "",
    createdAt: "",
    updatedAt: "",
    deletedAt: "",
  },
});

export const loginInfo = atom({
  key: "loginInfo",
  default: {
    email: "",
    password: "",
  },
});

export const visitedPageState = atom({
  key: "visitedPageState",
  default: "/",
});

export const TagArr = atom({
  key: "TagArr",
  default: [],
});
export const KakaoMapAddress = atom({
  key: "KakaoMapAddress",
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

export const basketLength = atom({
  key: "basketLength",
  default: 0,
});

export const isEditState = atom({
  key: "isEditState",
  default: false,
});

export const commentForModal = atom({
  key: "commentModal",
  default: "비밀번호가 일치하지 않습니다.",
});
