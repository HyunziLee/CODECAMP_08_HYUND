// `http://numbersapi.com/random?min=1&max=200`
// `http://koreanjson.com/posts/${num}`
// `http://koreanjson.com/posts?userId=${userId}`

import axios from "axios";

export default function CallbackPromiseAsyncAwaitPage() {
    const onClickCallback = () => {
        const aa = new XMLHttpRequest();
        aa.open("get", `http://numbersapi.com/random?min=1&max=200`);
        aa.send();
        aa.addEventListener("load", (res: any) => {
            // console.log(res);
            const num = res.target.response.split(" ")[0]; // 랜덤 숫자 받아오는 거
            console.log(num);
            const bb = new XMLHttpRequest();
            bb.open("get", `http://koreanjson.com/posts/${num}`);
            bb.send();
            bb.addEventListener("load", (res: any) => {
                const userId = JSON.parse(res.target.response).UserId;
                const cc = new XMLHttpRequest();
                cc.open("get", `http://koreanjson.com/posts?userId=${userId}`);
                cc.send();
                cc.addEventListener("load", (res: any) => {
                    console.log(res);
                });
            });
        });
    };
    const myAxios = {
        get: (url) => {
            return new Promise((resolve, reject) => {
                // 오래걸리는 작업 실행 (예, API요청하기)
                const qq = new XMLHttpRequest();
                qq.open("get", url);
                qq.send();
                qq.addEventListener("load", (res: any) => {
                    resolve(res.target.response);
                });
            }).then((res) => {});
        },
    };
    myAxios.get(`http://koreanjson.com/posts/1`).then((res) => {});

    const onClickPromise = () => {
        axios
            .get("첫번째 주소")
            .then((res) => {
                return axios.get("두번째 주소");
            })
            .then((res) => {
                return axios.get("세번째 주소");
            })
            .then((res) => {});
    };
    const onClickAsyncAwait = async () => {
        const result = await axios.get("첫번째주소");
        // const result = await axios.get("두번째주소");
        // const result = await axios.get("세번째주소");
    };
    return (
        <>
            <button onClick={onClickCallback}>CallBack 요청하기</button>
            <button onClick={onClickPromise}>promise 요청하기</button>
            <button onClick={onClickAsyncAwait}>AsyncAwait 요청하기</button>
        </>
    );
}
