// 비밀번호는 특정 개수 이상의 문자를 포함해야 한다.


const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const [S, M] = input[0].split(" ").map(Number); // 문자열의 길이, 부분 문자열의 길이
const DNAString = input[1];
const validation = input[2].split(" ").map(Number); // { A C G T } : [2, 0, 1, 1]
const DNA = ['A', 'C', 'G', 'T'];
let answer = 0;

const currentStatus = {A:0, C:0, G:0, T:0};

for (let i=0; i<M; i++) {
    currentStatus[DNAString[i]]++;
}

function isValid() { // DNA 비밀번호 유효성 검사
    for (let i=0; i<4; i++) {
        if (currentStatus[DNA[i]] < validation[i]) return false;
    }
    return true;
}

if(isValid()) answer++;

for (let start = 0; start<S-M; start++) {
    let end = start+M;
    let removeChar = DNAString[start];
    let addChar = DNAString[end];

    currentStatus[removeChar]--;
    currentStatus[addChar]++;

    if(isValid()) answer++;
}

console.log(answer);

