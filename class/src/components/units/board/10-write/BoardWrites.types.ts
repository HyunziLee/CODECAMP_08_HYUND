
import { IntrospectionQuery } from 'graphql';
import { ChangeEvent } from 'react';
import { IQuery } from '../../../../commons/types/generated/types';


export interface IBoardWriteProps {
  isEdit: boolean,
  // data?: any 
  //백엔드에 있는 자료형을 전부 모르기 때문 => any씀(임시) => 무슨 generator 쓰면 됨
  // ?표는 데이터를 줘도되고, 안줘도 됨 의미임.

  data: Pick<IQuery,"fetchBoard">
}
export interface IMyVariables {
  number: number,
  writer?: string,
  title?: string,
  contents?: string
}

export interface IBoardWriteUI {
  onClickCreate: () => void, // 함수에 리턴이 없으면 void, 있으면 리턴하는 타입 기입
  onClickUpdate: () => void,
  onChangeFunction: {
    writer:(e :ChangeEvent<HTMLInputElement>)=>void, 
    title:(e :ChangeEvent<HTMLInputElement>)=>void,
    contents: (e :ChangeEvent<HTMLInputElement>)=>void
  },
  mycolor: boolean,
  isEdit: boolean,
  data: any
  
}

export interface IButtonProps {
  qqq: boolean
}

//state props 지정할 때 const [dd, setDD] = useState<타입명>