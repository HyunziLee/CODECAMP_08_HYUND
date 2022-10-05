import { atom, selector } from "recoil";
import { getAccessToken } from "../libraries/getAccessToken";

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
    userPoint: {
      amount: "",
    },
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

export const TagArr = atom<string[]>({
  key: "TagArr",
  default: [],
});
export const KakaoMapAddress = atom({
  key: "KakaoMapAddress",
  default: {
    road_address: {
      address_name: "",
      building_name: "",
      main_building_no: "",
      region_1depth_name: "",
      region_2depth_name: "",
      region_3depth_name: "",
      road_name: "",
      sub_building_no: "",
      underground_yn: "",
      zone_no: "",
    },
    address: {
      address_name: "",
      main_address_no: "",
      mountain_yn: "",
      region_1depth_name: "",
      region_2depth_name: "",
      region_3depth_name: "",
      sub_address_no: "",
      zip_code: "",
    },
  },
});
export const markerValue = atom({
  key: "markerValue",
  default: {
    La: 0,
    Ma: 0,
  },
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

export const modalState = atom({
  key: "modalState",
  default: false,
});

export const addressValue = atom({
  key: "addressValue",
  default: {
    fullAddress: "",
    detailAddress: "",
    zoneCode: "",
  },
});

export const loginStateStd = atom({
  key: "loginStateStd",
  default: false,
});

export const basketValues = atom({
  key: "basketValues",
  default: [],
});
