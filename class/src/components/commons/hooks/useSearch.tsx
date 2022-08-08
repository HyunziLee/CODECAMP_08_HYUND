import { useState } from "react";

export default function useSearch() {
  const [keyword, setKeyword] = useState("");
  const onChangeKeyword = (value) => {
    setKeyword(value);
  };
  return {
    keyword,
    onChangeKeyword,
  };
}
