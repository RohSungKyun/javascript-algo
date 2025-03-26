// 첫째 줄에 정점의 개수 v와 간선의 개수 e가 주어진다, 둘째 줄에는 시작 정점의 번호
// 모든 정점에는 1~ v까지의 번호가 매겨져 있다.
// 셋째 줄부터 (u, v, w) u에서 v로 가는 가중치 w인 간선이 존재

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [V, E] = input[0].split(" ").map(Number); // 정점 개수 V, 간선 개수 E
const start = Number(input[1]); // 시작 정점
const graph = Array.from({ length: V + 1 }, () => []); // 인접 리스트
const INF = Infinity;
const distances = Array(V + 1).fill(INF); // 최단 거리 배열 (초기값: 무한대)

// 우선순위 큐 (최소 힙) 구현
class PriorityQueue {
    constructor() {
        this.queue = [];
    }
    enqueue(value) {
        this.queue.push(value);
        this.queue.sort((a, b) => a[1] - b[1]); // 거리 기준 정렬 (최소 힙)
    }
    dequeue() {
        return this.queue.shift();
    }
    isEmpty() {
        return this.queue.length === 0;
    }
}

