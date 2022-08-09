export default function BrowserStoragePage() {
  const onClickSaveCookie = () => {
    // Cooke 브라우저 꺼도 유지됨 + 백엔드랑 데이터 공유할 때 사용(백엔드 response에 쿠키 정보를 담아서 보내줌)
    document.cookie = "aaa=철수";
    document.cookie = "zzz=맹구";
  };
  const onClickSaveLocal = () => {
    // localStorage 브라우저 꺼도 유지됨
    localStorage.setItem("bbb", "영희");
  };
  const onClickSaveSession = () => {
    // sessionStorage는 브라우저 끄면 삭제됨
    sessionStorage.setItem("ccc", "훈이");
  };
  const onClickLoadCookie = () => {
    const myCookie = document.cookie
      .split("; ")
      .filter((el) => el.startsWith("aaa"));

    console.log(myCookie);
  };
  const onClickLoadLocal = () => {
    const bbb = localStorage.getItem("bbb");
    console.log(bbb);
  };
  const onClickLoadSession = () => {
    const ccc = sessionStorage.getItem("ccc");
    console.log(ccc);
  };

  return (
    <>
      <button onClick={onClickSaveCookie}>쿠키 저장</button>
      <button onClick={onClickSaveLocal}>로컬 저장</button>
      <button onClick={onClickSaveSession}>세션 저장</button>

      <button onClick={onClickLoadCookie}>쿠키 조회</button>
      <button onClick={onClickLoadLocal}>로컬 조회</button>
      <button onClick={onClickLoadSession}>세션 조회</button>
    </>
  );
}
