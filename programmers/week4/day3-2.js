//채점 안됨
function solution(arr) {
  let answer = [];
  let min = arr[0];
  if (arr.length <= 1) {
    return (answer = [-1]);
  } else {
    for (let i = 1; i < arr.length; i++) {
      if (min > arr[i]) {
        min = arr[i];
      } else {
        continue;
      }
    }

    arr.splice(arr.indexOf(min));
  }

  return arr;
}
