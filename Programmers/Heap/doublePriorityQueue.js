// I 숫자 : 큐에서 주어진 숫자를 삽입한다.
// D1 : 큐에서 최댓값을 삭제한다.
// D-1 : 큐에서 최솟값을 삭제한다.
// 결과값으로 큐가 비어있으면 [0,0]을, 비어있지 않으면 [최댓값, 최솟값]을 return 하도록 구현
// 아이디어1 : 최소힙, 최대힙을 한 클래스 안에 동시에 구현하고 하나의 힙을 공유한다.

class Heap {
    constructor() {
        this.heap = [];
    }
    size() {
        return this.heap.length;
    }
    
    getParentIndex(index) {
        return (index-1)/2;
    }
    getLeftCihldIndex(index) {
        return (index*2) + 1;
    }
    getRightChildIndex(index) {
        return (index*2) + 2;
    }

    swap(index1, index2) {
        const temp = this.heap[index1];
        this.heap[index1] = this.heap[index2];
        this.heap[index2] = temp;
    }

    push(value) {
        this.heap.push(value);
        let currentIndex = this.heap.length-1;
        let parentIndex = this.getParentIndex(currentIndex);

        while(currentIndex > 0 && this.heap[parentIndex] > this.heap[currentIndex]) {
            this.swap(currentIndex, parentIndex);
            let currentIndex = parentIndex;
            let parentIndex = this.getParentIndex(currentIndex);
        }
    }


}

function solution(operations) {
    var answer = [];
    return answer;
}
