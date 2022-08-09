import { useState } from "react";

// 1. 문자 타입
export const getString = (arg: string): string => {
  return arg;
};
const result1 = getString("철수");
//
//
// 2. 숫자 타입
const getNumber = (arg: number): number => {
  return arg;
};
const result2 = getNumber(123);
//
//
// 3. any타입(걍 자바스크립트랑 같음)
const getAny = (arg: any): any => {
  return arg;
};
const result3 = getAny(123);
const result4 = getAny("철수");
const result5 = getAny(true);
//
//
// 4. unknown 타입 => 모든타입을 받을 순 있지만 사용할 때, 정의해줘야함
const getUnknown = (arg: unknown): any => {
  if (typeof arg === "number") {
    return arg + 2;
  } else {
    return "숫자 넣어주삼";
  }
};
const result6 = getUnknown(123);
//
//
// 5. generic 타입 => 들어온 arg로 지정되고, return 타입까지 arg로 지정됨
function getGeneric<MyType>(arg: MyType): MyType {
  return arg;
}

const result7 = getGeneric(123);
const result8 = getGeneric("철수");
const result9 = getGeneric(true);

//
//
// 6. any vs generic 비교
function getAny2(arg1: any, arg2: any, arg3: any): [any, any, any] {
  return [arg3, arg2, arg1];
}
const result10 = getAny2(123, "철수", true);

// prettier-ignore
function getGeneric2<MyType1, MyType2, MyType3>(arg1: MyType1,arg2: MyType2,arg3: MyType3): [MyType3, MyType2, MyType1] {
  return [arg3, arg2, arg1];
}

const result11 = getGeneric2(123, "철수", true);

//
//
// 7. generic- 실무적 네이밍
function getGeneric3<T1, T2, T3>(arg1: T1, arg2: T2, arg3: T3): [T1, T2, T3] {
  return [arg3, arg2, arg1];
}

const result12 = getGeneric3(123, "철수", true);
//
//
// 7. generic- 실무적 네이밍2
function getGeneric4<T, U, V>(arg1: T, arg2: U, arg3: V): [T, U, V] {
  return [arg3, arg2, arg1];
}

const result13 = getGeneric3<number, string, boolean>(123, "철수", true);

//
//
// 8. generic - useState
function useMyState<T>(arg: T): [T, () => void] {
  const state = arg;
  const setState = () => {
    // 1. 스테이트 변경
    // 2. 컴포넌트 리렌더링하는 기능
  };
  return [state, setState];
}
const [count, setCount] = useMyState(0);
