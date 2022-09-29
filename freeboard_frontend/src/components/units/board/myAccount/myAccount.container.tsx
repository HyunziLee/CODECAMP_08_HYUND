import { withAuth } from "../../../commons/hoc/withAuth";

import MyAccountUI from "./myAccount.presenter";

function MyAccountContainer() {
  return <MyAccountUI />;
}

export default withAuth(MyAccountContainer);
