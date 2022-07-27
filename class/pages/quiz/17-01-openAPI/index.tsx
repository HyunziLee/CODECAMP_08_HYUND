import axios from "axios";
import { useEffect, useState } from "react";

export default function Quiz() {
  const [dog, setDog] = useState("");

  useEffect(() => {
    const dogFunc = async () => {
      const result = await axios.get("https://dog.ceo/api/breeds/image/random");
      setDog(result.data.message);

      console.log(result.data);
    };

    dogFunc();
  }, []);

  return (
    <>
      <img src={dog} alt="" />
    </>
  );
}
