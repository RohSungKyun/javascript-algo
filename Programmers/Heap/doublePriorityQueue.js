// I 숫자 : 큐에서 주어진 숫자를 삽입한다.
// D1 : 큐에서 최댓값을 삭제한다.
// D-1 : 큐에서 최솟값을 삭제한다.
// 결과값으로 큐가 비어있으면 [0,0]을, 비어있지 않으면 [최댓값, 최솟값]을 return 하도록 구현
// 아이디어1 : 최소힙을 이용하며 최댓값을 삭제하는 메서드를 추가한다.

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
    isEmpty() {
        return this.heap.length === 0; // 힙이 비어있으면 true를 반환
    }
    // pop 메서드는 힙에서 가장 작은 요소를 꺼내고 제거
    popMinimum() {
        if (this.isEmpty()) return null; // 힙이 비어있을때
        if (this.heap.length === 1) return this.heap.pop(); // 힙에 요소가 하나밖에 없다면 요소 제거 후 반환

        const root = this.heap[0]; // 루트 노드를 변수에 저장하고 마지막 요소를 루트로 이동
        this.heap[0] = this.heap.pop();
        // 힙 속성을 복원
        let currentIndex = 0;
        let leftChildindex = this.getLeftChildIndex(currentIndex);
        let rightChildIndex = this.getRightChildIndex(currentIndex);

        // 현재 노드의 값이 왼쪽 자식이나 오른쪽 자식보다 크다면 교환
        while(
            (leftChildindex < this.heap.length && this.heap[currentIndex] > this.heap[leftChildindex]) ||
            (rightChildIndex < this.heap.length && this.heap[currentIndex] > this.heap[rightChildIndex])
        ) {
            // 좌우 자식 중 더 작은 값과 교환
            const smallerIndex = rightChildIndex >= this.heap.length || this.heap[leftChildindex] < this.heap[rightChildIndex]
            ? leftChildindex : rightChildIndex;
            this.swap(currentIndex, smallerIndex);

            currentIndex = smallerIndex;
            leftChildindex = this.getLeftChildIndex(currentIndex);
            rightChildIndex = this.getRightChildIndex(currentIndex);
        }
        return root;
    }
    popMaximum() {
        if(this.isEmpty()) return null;
        return this.heap.pop(); // 마지막 노드가 항상 최대값이므로 바로 제거한다.
    }

}

function solution(operations) {
    var answer = [];
    return answer;
}
