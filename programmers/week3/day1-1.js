function solution(s){
  var answer = true;

  // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
  
let low = s.toLowerCase().split('')
let findE=0
let findY=0

if(!(low.includes('p')||low.includes("y"))){
return true
} else {
low.forEach((e)=>{
  if(e==='p') findE ++
  else if(e==='y') findY ++
})
}
if(findE === findY) return true
else return false

  return answer;
}