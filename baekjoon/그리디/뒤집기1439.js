// 연속된 문자열을 촤소 횟수로 뒤집어서 통일시키는 문제.
// 문자가 전환되는 지점을 카운트

const s = require("fs").readFileSync("/dev/stdin").toString().trim();

let count = 0;

for (let index = 0; index < s.length - 1; index++) {
  if (s[index] !== s[index + 1]) count++;
}

console.log(Math.floor((count + 1) / 2));
