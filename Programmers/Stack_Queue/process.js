class Queue{
  constructor(){
    this.queue = [];
  }
  add(value) {
    this.queue.push(value);
  }
  popleft(){
    return this.queue.shift();
  }

  peek() {
    return this.queue[0];
  }

  getSize() {
    return this.queue.length;
  }

  isEmpty() {
    return this.getSize() === 0;
  }
}

function solution(priorities, location) {
    const queue = new Queue();
    var answer = 0;

    return answer;
}