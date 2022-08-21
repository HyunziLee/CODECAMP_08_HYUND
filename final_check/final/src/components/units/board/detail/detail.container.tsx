import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { FETCH_USED_ITEM } from "../../../../commons/gql";
import {
  KakaoMapAddress,
  KakaoMapLa,
  KakaoMapMa,
  userInfoState,
} from "../../../../commons/store";
import { withAuth } from "../../../commons/hoc";
import DetailUI from "./detail.presenter";

export default function DetailContainer() {
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const [la, setLa] = useRecoilState(KakaoMapLa);
  const [ma, setMa] = useRecoilState(KakaoMapMa);

  const router = useRouter();
  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: {
      useditemId: router.query.id,
    },
  });
  console.log(data);
  if (!data?.fetchUseditem.useditemAddress) {
    setLa(0);
    setMa(0);
  } else {
    setLa(data?.fetchUseditem.useditemAddress.lat);
    setMa(data?.fetchUseditem.useditemAddress.lng);
  }

  return <DetailUI data={data} />;
}

// export default withAuth(DetailContainer);
