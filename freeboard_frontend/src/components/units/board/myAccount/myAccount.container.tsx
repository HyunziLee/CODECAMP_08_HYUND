import { useMutation, useQuery } from "@apollo/client";
import { IQuery } from "../../../../commons/types/generated/types";
import { withAuth } from "../../../commons/hoc/withAuth";
import { FETCH_USER_LOGGED_IN } from "../queries";
import MyAccountUI from "./myAccount.presenter";

function MyAccountContainer() {
  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);
  console.log(data);

  return (
    <>
      <MyAccountUI data={data?.fetchUserLoggedIn.name} />
    </>
  );
}

export default withAuth(MyAccountContainer);
