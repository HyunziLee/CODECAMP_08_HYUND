import * as s from "./postList.styles";
import { useRouter } from "next/router";

import { getDate } from "../../../commons/Function/getDate";
import ListPaginationUI from "./ListPagination.presenter";
import { IPostListProps } from "./postList.types";
import { v4 as uuidv4 } from "uuid";

export default function PostListUI(props: IPostListProps) {
  const router = useRouter();

  const MoveToListDetailBtn = (x: string) => {
    router.push(`/PostDetail/${x}`);
  };

  return (
    <s.Wrapper>
      <s.Main>
        <s.SearchWrapper>
          <s.SearchTitle
            placeholder="검색할 내용을 작성하세요."
            onChange={props.onChangeSearch}
          ></s.SearchTitle>
        </s.SearchWrapper>
        <s.ListWrapper>
          <s.Row>
            <s.Column weight="700">번호</s.Column>
            <s.Column weight="700">제목</s.Column>
            <s.Column weight="700">작성자</s.Column>
            <s.Column weight="700">작성일</s.Column>
          </s.Row>

          {props.data?.fetchBoards.map((e, i) => (
            <s.Row key={e._id}>
              <s.Column weight="400">{i + 1}</s.Column>
              <s.Column
                weight="400"
                onClick={() => {
                  MoveToListDetailBtn(e._id);
                }}
              >
                <span>
                  {e.title
                    .replaceAll(props.keyword, `#$%${props.keyword}#$%`)
                    .split("#$%")
                    .map((e) => (
                      <span
                        key={uuidv4()}
                        style={{
                          color: props.keyword === e ? "green" : "black",
                        }}
                      >
                        {e}
                      </span>
                    ))}
                </span>
              </s.Column>
              <s.Column weight="400">{e.writer}</s.Column>
              <s.Column weight="400">{getDate(e.createdAt)}</s.Column>
            </s.Row>
          ))}
        </s.ListWrapper>
        {/* {console.log(props.data)} */}

        {props.keyword ? (
          <s.SearchPage>
            {new Array(10).fill(1).map((_, index) => (
              // if (props.keyword.length < 10) {
              //   console.log(props.keyword.length);
              //   return;
              // }

              <s.SearchSpan
                key={index + 1}
                id={String(index + 1)}
                onClick={props.onMovetoPageForSearch}
              >
                {index + 1}
              </s.SearchSpan>
            ))}
          </s.SearchPage>
        ) : (
          ""
        )}

        <s.Footer>
          {!props.keyword && (
            <ListPaginationUI
              onClickRefetch={props.onClickRefetch}
              onClickPrev={props.onClickPrev}
              onClickNext={props.onClickNext}
              setIsLastPage={props.setIsLastPage}
              setIsClicked={props.setIsClicked}
              data={props.data}
              startPage={props.startPage}
              lastPageStandard={props.lastPageStandard}
              isLastPage={props.isLastPage}
              isClicked={props.isClicked}
            />
          )}
        </s.Footer>
      </s.Main>
    </s.Wrapper>
  );
}
