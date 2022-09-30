import {
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

export interface FormValue {
  email: string;
  password: string;
}

export interface ILoginUIProps {
  register: UseFormRegister<FormValue>;
  handleSubmit: UseFormHandleSubmit<FormValue>;
  formState: FormState<FormValue>;
  onClickLogin: (data: FormValue) => Promise<void>;
}
