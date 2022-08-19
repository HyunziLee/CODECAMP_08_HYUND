import * as s from "../../../../../styles/main.styles";
export default function MainUI(props) {
  return (
    <>
      {console.log(props.item)}

      <s.ItemWrapper onClick={props.onClickDetail(props.item._id)}>
        <s.ItemImg
          src={`https://storage.googleapis.com/${props.item.images[0]}`}
        />
        <s.ItemInfoWrapper>
          <s.Item>{props.item.name}</s.Item>
          <s.ItemDetail>
            <div>{`${props.item.price}원`}</div>
            <div>3시간전</div>
          </s.ItemDetail>
        </s.ItemInfoWrapper>
      </s.ItemWrapper>
    </>
  );
}
