import axios from "axios";

export default function Quiz() {
  const onClickCallback = () => {
    const xhr = new XMLHttpRequest();
    xhr.open("get", "http://numbersapi.com/random?min=1&max=200");
    xhr.send();
    xhr.addEventListener("load", (res) => {
      // console.log(res.target.response);
      const number = res.target.response.split(" ")[0];
      const post = new XMLHttpRequest();
      console.log(number);
      post.open("get", `https://koreanjson.com/posts/${number}`);
      post.send();
      post.addEventListener("load", (res) => {
        console.log(res.target);
        const userId = JSON.parse(res.target.response).UserId;
        console.log(userId);
        const Id = new XMLHttpRequest();
        Id.open("get", `http://koreanjson.com/posts?userId=${userId}`);
        Id.send();
        Id.addEventListener("load", (res) => {
          console.log(res.target.response);
        });
      });
    });
  };
  const onClickPromise = () => {
    axios
      .get("http://numbersapi.com/random?min=1&max=200")
      .then((res) => {
        console.log(res.request.response.split(" ")[0]);
        const number = res.request.response.split(" ")[0];
        return axios.get(`https://koreanjson.com/posts/${number}`);
      })
      .then((res) => {
        const Id = JSON.parse(res.request.response).UserId;
        console.log(Id);
        return axios.get(`https://koreanjson.com/posts?userId=${Id}`);
      })
      .then((res) => {
        res.data.map((el) => console.log(el));
      });
  };

  const onClickAsyncAwait = async () => {
    const result = await axios.get(
      "http://numbersapi.com/random?min=1&max=200"
    );

    const number = result.data.split(" ")[0];
    // console.log(number);
    const result2 = await axios.get(`https://koreanjson.com/posts/${number}`);
    // console.log(result2.data);
    // console.log(result2.data.UserId);
    const Id = result2.data.UserId;
    console.log(Id);

    const result3 = await axios.get(
      `https://koreanjson.com/posts?userId=${Id})`
    );
    result3.data.map((el) => console.log(el));
  };
  return (
    <>
      결과<button onClick={onClickCallback}>callBack</button>
      결과<button onClick={onClickPromise}>promise</button>
      결과<button onClick={onClickAsyncAwait}>async/await</button>
    </>
  );
}
