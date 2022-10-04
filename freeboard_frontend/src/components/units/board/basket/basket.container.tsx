import BasketUI from "./basket.presenter";

export default function Basket() {
  const onClickDetail = (boardId: string) => {
    location.replace(`/CreateItemSuccess/${boardId}`);
  };
  return <BasketUI onClickDetail={onClickDetail} />;
}
