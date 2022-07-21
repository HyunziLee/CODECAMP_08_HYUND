import { MouseEvent, useState } from "react";

export default function Pagination(props) {
  const [startPage, setStartPage] = useState(1);

  const onClickPage = (e: MouseEvent<HTMLSpanElement>) => {
    if (!(e.target instanceof HTMLSpanElement)) return;
    props.refetch({ page: Number(e.target.id) });
  };

  const onClickPrevPage = () => {
    if (startPage === 1) return;
    setStartPage((prev) => prev - 10);
    props.refetch({ page: Number(startPage - 10) });
  };

  const onClickNextPage = () => {
    if (startPage + 10 <= props.lastPage) {
      setStartPage((prev) => prev + 10);
      props.refetch({ page: Number(startPage + 10) });
    }

    return (
      <div>
        <span onClick={onClickPrevPage}>이전페이지</span>

        {new Array(10).fill(1).map((_, i) =>
          i + startPage <= props.lastPage ? (
            <span key={i + 1} id={String(i + startPage)} onClick={onClickPage}>
              {i + startPage}
            </span>
          ) : (
            <span></span>
          )
        )}
        <span onClick={onClickNextPage}>다음페이지</span>
      </div>
    );
  };
}
