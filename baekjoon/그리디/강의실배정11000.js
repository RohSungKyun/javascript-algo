// 필요한 강의실의 개수
// 겹치는 시간에 최대로 필요한 강의실의 개수가 정답
// 우선순위 큐 대신 투 포인터 활용

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const n = Number(input[0]);
const lectures = input.slice(1).map((line) => line.split(" ").map(Number));

const starts = lectures.map(([start, end]) => start).sort((a, b) => a - b);
const ends = lectures.map(([start, end]) => end).sort((a, b) => a - b);

let room = 0;
let endPtr = 0;

for (let i = 0; i < n; i++) {
  if (starts[i] < ends[endPtr]) {
    // 현재 수업 시작 시간이 가장 빨리 끝나는 수업보다 빠르면 새 강의실 필요
    room++;
  } else endPtr++;
}

console.log(room);
