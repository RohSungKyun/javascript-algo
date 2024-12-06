class MinHeap{
    constructor() {
        this.heap = [];
    }
    size() {
        return this.heap.length
    }
    swap(a, b) {
        let temp = this.heap[a];
        this.heap[a] = this.heap[b];
        this.heap[b] = temp;
    }
    getParentindex(index) {
        return Math.floor((index-1)/2);
    }
    getLeftChildIndex(index) {
        return 2*index + 1;
    }
    getRightChildIndex(index) {
        return 2*index + 2;
    }
    heapPush(value) {
        this.heap.push(value);
        let currentIndex = this.size() - 1;
        let parentIndex = this.getParentindex(currentIndex);

        while(currentIndex > 0 && this.heap[currentIndex] < this.heap[parentIndex]) {
            this.swap(currentIndex, parentIndex);
            currentIndex = parentIndex;
            parentIndex = this.getParentindex(currentIndex);
        }
    }
    isEmpty() {
        return this.size() === 0;
    }
    heapPop() {
        if (this.isEmpty()) return null;
        if(this.heap.length === 1) return this.heap.pop();

        const root = this.heap[0];
        this.heap[0] = this.heap.pop(); // 가장 끝 요소를 루트로 이동

        let currentIndex = 0;
        let leftChildindex = this.getLeftChildIndex(currentIndex);
        let rightChildIndex = this.getRightChildIndex(currentIndex);

        while(
            (leftChildindex < this.heap.length && this.heap[leftChildindex] < this.heap[currentIndex]) ||
            (rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[currentIndex]) 
        ) {
            const smallerIndex = rightChildIndex >= this.heap.length || this.heap[leftChildindex] < this.heap[rightChildIndex] ?
            leftChildindex : rightChildIndex;
            this.swap(currentIndex, smallerIndex);

            currentIndex = smallerIndex;
            leftChildindex = this.getLeftChildIndex(currentIndex);
            rightChildIndex = this.getRightChildIndex(currentIndex);
        }
        return root;
    }
}

function solution(jobs) {
    const minHeap = new MinHeap();
    const count = jobs.length;
    jobs.sort((a, b) => a[0] - b[0]); // 요청 시간을 기준으로 정렬

    let time = 0;
    let complete = 0;
    let total = 0;

    while(minHeap.size() || jobs.length) {
        while(jobs.length) {
            if (time === jobs[0][0]) {
                minHeap.heapPush(jobs.shift());
            } else break;
        }
        if (minHeap.size() && time >= complete ) {
            const task = minHeap.heapPop();
            complete = task[1] + time;
            total = complete - task[0];
        }
        time++;
    }

    return Math.floor(total/count);
}