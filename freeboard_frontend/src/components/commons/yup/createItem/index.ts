import * as yup from "yup";

export const schema = yup.object({
  name: yup.string().required("상품명은 필수 입력 항목입니다."),
  price: yup
    .number()
    .typeError("숫자만 입력할 수 있습니다.")
    .required("가격은 필수 입력 항목입니다."),
  remarks: yup.string(),
});
