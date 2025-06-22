// 서로 다른 n개의 자연수의 합이 s 일 때, 자연수 n의 최댓값

const s = require("fs").readFileSync("/dev/stdin").toString().trim();

let sum = 0;
let count = 0;

for (let i = 1; i <= s; i++) {
  if (sum + i > s) break;
  sum += i;
  count++;
}

console.log(count);
