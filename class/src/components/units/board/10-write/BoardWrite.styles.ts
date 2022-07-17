import styled  from '@emotion/styled';
import { IButtonProps } from './BoardWrites.types';


export const RedInput = styled.input `
  border: 1px solid red;


`

export const Button = styled.button `
  background-color: ${(props:IButtonProps)=> props.qqq ? "yellow" : 'green'} //qqq. 타입이 지정되어있지 않아서 에러뜬거임
  
 

`