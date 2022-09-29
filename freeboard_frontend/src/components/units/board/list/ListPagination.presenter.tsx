import { IListPaginationUIProps } from "./postList.types";
import * as s from "./postList.styles";

export default function ListPaginationUI(props: IListPaginationUIProps) {
  return (
    <s.PageMoveBtns>
      {props.startPage === 1 ? "" : <s.LeftBtn onClick={props.onClickPrev} />}

      {new Array(10).fill(1).map(
        (_, i) =>
          i + props.startPage <= props.lastPageStandard && (
            <s.PageMoveBtn
              key={i + props.startPage}
              onClick={props.onClickRefetch}
              id={String(i + props.startPage)}
            >
              {i + props.startPage}
            </s.PageMoveBtn>
          )
      )}

      {/* {new Array(10).fill(1).map((_, i) => {
          if (i + props.startPage <= props.lastPageStandard) {
            props.setIsLastPage(i + props.startPage);
            return (
              <s.PageMoveBtn
                key={i + props.startPage}
                onClick={props.onClickRefetch}
                id={String(i + props.startPage)}
              >
                {i + props.startPage}
              </s.PageMoveBtn>
            );
          }
        })} */}

      {props.isLastPage === props.lastPageStandard ? (
        ""
      ) : (
        <s.RightBtn onClick={props.onClickNext} />
      )}
    </s.PageMoveBtns>
  );
}
