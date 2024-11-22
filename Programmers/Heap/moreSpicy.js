// getParentIndex: 부모 노드의 인덱스를 반환합니다.
// getLeftChildIndex: 왼쪽 자식 노드의 인덱스를 반환합니다.
// getRightChildIndex: 오른쪽 자식 노드의 인덱스를 반환합니다.
// swap: 두 노드의 값을 교환합니다.
// push: 새로운 요소를 힙에 삽입합니다.
// pop: 힙에서 가장 작은 요소(루트 노드)를 꺼내고 제거합니다.
// isEmpty: 힙이 비어있는지 확인합니다.
class MinHeap {
    constructor() {
        this.heap = [];
    }

    //힙의 크기를 반환하는 메서드
    size() { 
        return this.heap.length;
    }

    getParentIndex(index) {
        return Math.floor((index-1)/2);
    }
    getLeftChildIndex(index) {
        return 2*index + 1;
    }
    getRightChildIndex(index) {
        return 2*index + 2;
    }
    swap(index1, index2) {
        const temp = this.heap[index1];
        this.heap[index1] = this.heap[index2];
        this.heap[index2] = temp;
    }
    push(value) {
        this.heap.push(value);
        let currentindex = this.heap.length - 1;
        let parentIndex = this.getParentIndex(currentindex);

        // 삽입된 요소가 루트노드가 아니고, 부모 노드의 값이 삽입된 요소의 값보다 크다면 교호나
        while(currentindex > 0 && this.heap[parentIndex] > this.heap[currentindex]) {
            this.swap(currentindex, parentIndex);
            currentindex = parentIndex;
            parentIndex = this.getParentIndex(currentindex);
        }
    }
    // pop 메서드는 힙에서 가장 작은 요소를 꺼내고 제거
}

function solution(scoville, K) {
    var answer = 0;
    return answer;
}
