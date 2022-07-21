import * as s from "./postList.style";

export default function ListPaginationUI(props) {
  return (
    <>
      <s.Footer__pageMoveBtn>
        {props.startPage === 1 ? (
          ""
        ) : (
          <s.Footer__pageMoveBtn_Left onClick={props.onClickPrev} />
        )}

        {/* {new Array(10).fill(1).map(
          (_, i) =>
            i + props.startPage <= props.lastPageStandard && (
              <s.Footer__pageMoveBtn_individual
                key={i + props.startPage}
                onClick={props.onClickRefetch}
                id={String(i + props.startPage)}
              >
                {i + props.startPage}
              </s.Footer__pageMoveBtn_individual>
            )
        )} */}

        {new Array(10).fill(1).map((_, i) => {
          if (i + props.startPage <= props.lastPageStandard) {
            props.setIsLastPate(i + props.startPage);
            return (
              <s.Footer__pageMoveBtn_individual
                key={i + props.startPage}
                onClick={props.onClickRefetch}
                id={String(i + props.startPage)}
              >
                {i + props.startPage}
              </s.Footer__pageMoveBtn_individual>
            );
          }
        })}
        {props.isLastPage === props.lastPageStandard ? (
          ""
        ) : (
          <s.Footer__pageMoveBtn_Right onClick={props.onClickNext} />
        )}
      </s.Footer__pageMoveBtn>
    </>
  );
}
