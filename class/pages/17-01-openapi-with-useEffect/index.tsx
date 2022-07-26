import axios from "axios";
import { useEffect, useState } from "react";

export default function openapiWithUseEffectPage() {
  const [dogUrl, setDogUrl] = useState("");

  useEffect(() => {
    const fetchDog = async () => {
      const result = await axios.get("https://dog.ceo/api/breeds/image/random");
      setDogUrl(result.data.message);
    };
    fetchDog();
  }, []);

  return (
    <>
      <h1>오픈 api연습</h1>
      <img src={dogUrl} alt="" />
    </>
  );
}
