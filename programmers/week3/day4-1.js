function solution(num) {
  let result = [];

  for (let i = 0; i < num.length; i++) {
    for (let j = i + 1; j < num.length; j++) {
      result.push(num[j] + num[i]);
    }
  }
  let a = new Set(result);
  result = [...a];
  let result2 = result.sort((a, b) => {
    return a - b;
  });
  return result2;
}

let a = solution([2, 1, 3, 4, 1]);

/*
Set

=> 배열처럼 쓸 수 있는 객체데이터로, 값 중복 허용안됨(=고유한 데이터만 저장).

Set에 배열 값 추가 하려면 push()가 아니라, add()임
Set에서 데이터 조회 하려면 includes()가 아니라, has()임
Set에서  데이터 삭제하려면 delete(제거할 데이터 값)
배열엔 없지만 Set에만 있는 거: 초기화 => clear() 
Set에서 데이터 반복 forEach(), 배열이랑 사용법 같음 근데 출처가 다름
Set에서 데이터 길이는 .size 

배열로 변환하기
1. Array.from(객체명)
2. 스프레드 let a = [...객체명]


*/
