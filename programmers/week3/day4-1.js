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
