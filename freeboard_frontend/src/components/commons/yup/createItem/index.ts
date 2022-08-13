import * as yup from "yup";

export const schema = yup.object({
  name: yup.string().required("상품명은 필수 입력 항목입니다."),
  price: yup
    .number()
    .min(1, "1원이상 입력하세요")
    .required("가격은 필수 입력 항목입니다."),
  remarks: yup.string(),
});
