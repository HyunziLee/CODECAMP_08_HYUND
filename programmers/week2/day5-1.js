/*
문제 설명
문자열 s에 나타나는 문자를 큰것부터 작은 순으로 정렬해 새로운 문자열을 리턴하는 함수, solution을 완성해주세요.
s는 영문 대소문자로만 구성되어 있으며, 대문자는 소문자보다 작은 것으로 간주합니다.

제한 사항
str은 길이 1 이상인 문자열입니다.
입출력 예
s	return
"Zbcdefg"	"gfedcbZ"

*/



function solution(s) {
  
  var answer = '';
  let arr = [];

  for(let i =0;i<s.length;i++){
    arr.push(s[i])
  }
 
 let b= arr.sort((a,b)=>{

   if(a>b) return -1
   else if (a<b) return 1
   else if (a===b) return 0
 })
 answer = arr.join('')
  	
   return answer;
}

/*
다른풀이
const answer = s.split('').sort((a,b)=>{
  return a>b ? -1 : 1
}).join('')




*/