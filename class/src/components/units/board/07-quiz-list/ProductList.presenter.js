import {Row, Column} from './ProductList.styles'

export default function ProductListUI(props){
  return (
    <>
        
        {props.data?.fetchProducts.map(e => (
            <Row key={e._id}>
                <Column><input type="checkbox" /></Column>
                
                <Column>{e.seller}</Column>
                <Column>{e.name}</Column>
                <Column>{e.detail}</Column>
                <Column>{e.price}</Column>
                <button id={e.number} onClick={props.onClickDelete}>삭제</button>
            </Row>
        ))}
    </>
)
}