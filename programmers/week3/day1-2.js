function solution(s) {
  let answer = '';
  let arr = [];
  let str = ""
  let arr2=[]
  
  arr=s.split(" ")
  
 for(let i =0;i<arr.length;i++){
  
   for(let j = 0;j<arr[i].length;j++){
     
     if(j%2===0){
      	str = str+arr[i][j].toUpperCase()
     } else {
       str = str+arr[i][j].toLowerCase()
     }
       
   } 
   
   arr2.push(str)
   str=''
 
 }
  
  return answer = arr2.join(' ')
  
  
 
}

let a = solution("try hello world")

console.log(a)