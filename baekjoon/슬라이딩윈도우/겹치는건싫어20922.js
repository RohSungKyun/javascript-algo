// 같은 원소가 k개 이하로 들어있는 최장 연속 부분 수열의 길이를 구하려고 한다.
// 연속 부분 수열 조건도 만족해야 한다.

const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const [N, K] = input[0].split(" ").map(Number); // 개수와 기준 k
const array = input[1].split(" ").map(Number);
const countMap = new Map();

