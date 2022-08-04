import { atom } from "recoil";

export const isEditQuiz = atom({
  key: "isEditQuiz",
  default: true,
});

export const accessTokenQuiz = atom({
  key: "accessTokenQuiz",
  default: "",
});
