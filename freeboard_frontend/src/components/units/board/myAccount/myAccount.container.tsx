import { useRecoilState } from "recoil";
import { withAuth } from "../../../commons/hoc/withAuth";
import { userInfoState } from "../../../commons/store";

import MyAccountUI from "./myAccount.presenter";

function MyAccountContainer() {
  const [userInfo] = useRecoilState(userInfoState);

  return (
    <>
      {console.log(userInfo.name)}

      <MyAccountUI data={userInfo} />
    </>
  );
}

export default withAuth(MyAccountContainer);
