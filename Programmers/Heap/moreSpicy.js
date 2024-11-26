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
    isEmpty() {
        return this.heap.length === 0; // 힙이 비어있으면 true를 반환
    }
    // pop 메서드는 힙에서 가장 작은 요소를 꺼내고 제거
    pop() {
        if (this.isEmpty()) return null; // 힙이 비어있을때
        if (this.heap.length === 1) return this.heap.pop(); // 힙에 요소가 하나밖에 없다면 요소 제거 후 반환

        const root = this.heap[0]; // 루트 노드를 변수에 저장하고 마지막 요소를 루트로 이동
        this.heap[0] = this.heap.pop();

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
}

function solution(scoville, K) {
    let count = 0;
    const foodList = new MinHeap();
    for (let food of scoville) {
        foodList.push(food); // 최소 힙에 값을 집어 넣는다.
    }
    while(foodList.size() > 1){ // 하나만 남기 전까지 섞기를 반복한다.
        if (foodList.heap[0] >= K) {
            return count;
        }
        let temp = foodList.pop(); // 가장 안매운 음식
        let newScoville = temp + (foodList.pop() * 2);
        foodList.push(newScoville);
        count+=1;

    }
    if (foodList.size() === 1 && foodList.heap[0] > K) {
        return count;
    }
    return -1;
}

