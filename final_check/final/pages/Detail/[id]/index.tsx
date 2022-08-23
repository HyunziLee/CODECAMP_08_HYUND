import { withAuth } from "../../../src/components/commons/hoc/withAuth";
import DetailContainer from "../../../src/components/units/board/detail/detail.container";

function Detail() {
  return <DetailContainer />;
}
export default withAuth(Detail);
