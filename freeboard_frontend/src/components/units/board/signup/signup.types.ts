import {
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

export interface FormValue {
  email: string;
  password: string;
  name: string;
}

export interface ISignupProps {
  register: UseFormRegister<FormValue>;
  handleSubmit: UseFormHandleSubmit<FormValue>;
  formState: FormState<FormValue>;
  onClickSignUp: (data: FormValue) => void;
}
