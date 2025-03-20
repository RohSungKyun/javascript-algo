class minHeap{
    constructor() {
        this.heap = [];
    }
    
    size() {
        return this.heap.length;
    }
    getParentIndex(index) {
        return Math.floor((index-1)/2);
    }
    getLeftIndex(index) {
        return index*2 + 1;
    }
    getRightIndex(index) {
        return index*2 + 2;
    }
    swap(a, b) {
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
    }
    heappush(value) {
        this.heap.push(value);
        let cur = this.heap.length -1;
        let parentIdx = this.getParentIndex(cur);
        
        while(cur > 0 && this.heap[cur][1] < this.heap[parentIdx][1]) {
            this.swap(cur, parentIdx);
            cur = parentIdx;
            parentIdx = this.getParentIndex(cur);
        }
    }
    heappop() {
        if(this.size() === 0) return null;
        if(this.heap.length === 1) return this.heap.pop();
        
        const root = this.heap[0]
        this.heap[0] = this.heap.pop();
        
        let curIdx = 0;
        let leftIdx = this.getLeftIndex(curIdx);
        let rightIdx = this.getRightIndex(curIdx);
        
        while (
        (rightIdx < this.heap.length && this.heap[rightIdx][1] < this.heap[curIdx][1]) || (leftIdx < this.heap.length && this.heap[leftIdx][1] <this.heap[curIdx][1])
        ) {
            const smallerIndex = rightIdx >= this.heap.length || this.heap[rightIdx][1] > this.heap[leftIdx][1] ? leftIdx : rightIdx; 
        this.swap(curIdx, smallerIndex);
            curIdx = smallerIndex;
            rightIdx = this.getRightIndex(curIdx);
            leftIdx = this.getLeftIndex(curIdx);
        
        }
        return root;
    }
}


function solution(jobs) {
    const heap = new minHeap();
    let time = 0; // 경과 시간
    let total = 0; // 총 시간
    let index = 0; // jobs를 처리할 인덱스 순서
    let complete = 0;
    const count = jobs.length;
    jobs.sort((a, b) => a[0] - b[0]); // 요청시간 기준 정렬 오름차순
    
    while(index < jobs.length || heap.size()){
        while(index < jobs.length && jobs[index][0] <= time) {
            heap.heappush(jobs[index]);
            index++
        }
        
        if(heap.size()) {
            const task = heap.heappop();
            complete = time + task[1]; // 경과 된 시간
            total += complete - task[0];
            time = complete;
        } else {
            time = jobs[index][0]
        }
    }
    return Math.floor(total/count);
    
}