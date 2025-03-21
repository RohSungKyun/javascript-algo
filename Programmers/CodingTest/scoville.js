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
    getLeftChildIndex(index) {
        return 2*index+1;
    }
    getRightChildIndex(index) {
        return 2*index+2;
    }
    swap(a, b) {
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
    }
    heappush(value) {
        this.heap.push(value);
        let current = this.heap.length-1;
        let parentIndex = this.getParentIndex(current);
        
        while(current > 0 && this.heap[current] < this.heap[parentIndex]){
            this.swap(current, parentIndex);
            current = parentIndex;
            parentIndex = this.getParentIndex(current);
        }
    }
    heappop() {
        if (this.size() === 0) return null;
        if (this.size() === 1) return this.heap.pop();
        
        let root = this.heap[0];
        this.heap[0] = this.heap.pop();
        
        let current = 0;
        let leftChild = this.getLeftChildIndex(current);
        let rightChild = this.getRightChildIndex(current);
        
        while(
            (rightChild < this.heap.length && this.heap[rightChild] < this.heap[current]) || (leftChild < this.heap.length && this.heap[leftChild] < this.heap[current]) 
        ) {
            const smallerIndex = rightChild >= this.heap.length || this.heap[rightChild] > this.heap[leftChild] ? leftChild : rightChild;
            this.swap(current, smallerIndex);
            current = smallerIndex;
            leftChild = this.getLeftChildIndex(current);
            rightChild = this.getRightChildIndex(current);
            
        }
        return root;
    }
}

function solution(scoville, K) {
    let count = 0;
    const foodList = new minHeap();
    for (let food of scoville) {
        foodList.heappush(food);
    }
    while (foodList.size() > 1) {
        if(foodList.heap[0] >= K) {
            return count;
        }
        let noSpicy = foodList.heappop();
        let newScoville = noSpicy + (foodList.heappop()*2);
        foodList.heappush(newScoville);
        count++;
    }
    if (foodList.heap[0] > K) {
        return count;
    }
    return -1;
}
