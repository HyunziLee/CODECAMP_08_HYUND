import { useRouter } from "next/router";
import { useEffect } from "react";

export const withAuthQuiz = (Component) => (props) => {
  const router = useRouter();

  console.log("Component");
  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      alert("로그인 후 이용 가능합니다.");
      console.log("props");

      router.push("/quiz/23-01-login-main");
    }
  }, []);

  return <Component {...props} />;
};
