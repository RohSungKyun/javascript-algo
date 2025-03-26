// 양방향 순환 큐 
// 첫 번째 원소를 뽑아내는 연산
// 왼쪽으로 한 칸 이동시키는 연산
// 오른쪽으로 한 칸 이동시키는 연산
const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const [N, M] = input[0].split(' ').map(Number); // 큐의 크기와 뽑아야 할 개수
const num_list = input[1].split(' ').map(Number); // 뽑아야 할 숫자 리스트

let answer = 0;
let queue = Array.from({ length: N }, (_, i) => i + 1);

function leftRotate() {
    queue.push(queue.shift());
}

function rightRotate() {
    queue.unshift(queue.pop());
}

for (let target of num_list) {
    let targetIdx = queue.indexOf(target);
    let pivot = Math.floor(queue.length / 2);

    if (targetIdx === 0) {
        queue.shift();
        continue;
    }

    if (targetIdx <= pivot) {
        while (queue[0] !== target) {
            leftRotate();
            answer++;
        }
    } else {
        while (queue[0] !== target) {
            rightRotate();
            answer++;
        }
    }
    queue.shift(); // 뽑아내기
}

console.log(answer);