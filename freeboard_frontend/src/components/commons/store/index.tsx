import { atom } from "recoil";

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
