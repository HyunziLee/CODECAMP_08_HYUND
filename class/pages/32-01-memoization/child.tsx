import { memo, useState } from "react";
function MemoizationChildPage() {
  console.log("자식이 렌러딩됩니다.");

  return (
    <>
      <div>====================</div>
      <h1>자식컴포넌트</h1>
    </>
  );
}

export default memo(MemoizationChildPage);
