// I 숫자 : 큐에서 주어진 숫자를 삽입한다.
// D1 : 큐에서 최댓값을 삭제한다.
// D-1 : 큐에서 최솟값을 삭제한다.
// 결과값으로 큐가 비어있으면 [0,0]을, 비어있지 않으면 [최댓값, 최솟값]을 return 하도록 구현
// 아이디어1 : 최소힙을 이용하며 최댓값을 삭제하는 메서드를 추가한다.
// 시간초과가 우려되어 이진트리 형식을 사용하지 않음
class DualHeap {
    constructor() {
        this.minHeap = []; // 최소힙
        this.maxHeap = []; // 최대힙
    }

    push(value) {
        this.minHeap.push(value);
        this.minHeap.sort((a, b) => a - b); // 최소힙 유지

        this.maxHeap.push(value);
        this.maxHeap.sort((a, b) => b - a); // 최대힙 유지
    }

    popMinimum() {
        if (this.minHeap.length === 0) return;
        const min = this.minHeap.shift();
        const index = this.maxHeap.indexOf(min);
        if (index > -1) this.maxHeap.splice(index, 1);
    }

    popMaximum() {
        if (this.maxHeap.length === 0) return;
        const max = this.maxHeap.shift();
        const index = this.minHeap.indexOf(max);
        if (index > -1) this.minHeap.splice(index, 1);
    }

    getMinimum() {
        return this.minHeap.length > 0 ? this.minHeap[0] : 0;
    }

    getMaximum() {
        return this.maxHeap.length > 0 ? this.maxHeap[0] : 0;
    }

    isEmpty() {
        return this.minHeap.length === 0;
    }
}

function solution(operations) {
    const heap = new DualHeap();

    for (let operation of operations) {
        if (operation.startsWith('I')) {
            const number = Number(operation.slice(1).trim());
            heap.push(number);
        } else if (operation.startsWith('D')) {
            const number = Number(operation.slice(1).trim());
            if (number === -1) {
                heap.popMinimum();
            } else if (number === 1) {
                heap.popMaximum();
            }
        }
    }

    if (heap.isEmpty()) {
        return [0, 0];
    }

    return [heap.getMaximum(), heap.getMinimum()];
}

