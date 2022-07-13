/*

문제 설명
단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

재한사항
s는 길이가 1 이상, 100이하인 스트링입니다.



*/



function solution(s) {
  var answer = '';
  let calc = 0;
if(s.length%2 === 1){
  calc = Math.floor(s.length/2);
  answer = s[calc]
  
} else {
  calc = s.length/2;
  answer = s[calc-1]+s[calc]
}



  return answer;
}
/*
  다른 풀이

  const center = Math.floor(s.length/2);
  const answer = s.length % 2 !==0
  ? s[center]
  : s.slice(center-1, center+1)

  return answer




*/