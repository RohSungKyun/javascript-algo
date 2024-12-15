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
      if (this.getSize() === 0){
        return true;
      }
      return false;
    }
    isFirst(value){ //인자보다 우선순위가 큰 값이 있는지 큐를 탐색
      for(let process of this.queue){
        if(value < process){
          return false;
        }
      }
      return true;
    }
  }
  
  function solution(priorities, location) {
    const prioritieQueue = new Queue();
    const elementQueue = new Queue();
    let answer = 1;
    let target;
  
    for(let prioritie of priorities){
      prioritieQueue.add(prioritie);
    }
    for(let i = 0; i<prioritieQueue.getSize(); i++){
      elementQueue.add(i);
      if (i === location){
        target = i;
      }
    }
  
    while(prioritieQueue.getSize() !== 0){
      let process = prioritieQueue.popleft(); //우선순위
      let item = elementQueue.popleft(); //해당 우선순위의 값
        
      if (prioritieQueue.isFirst(process)){ //큰 값이 없으면
        if (item === target){
          return answer;
        }
        answer+=1;
      } else{
        prioritieQueue.add(process);
        elementQueue.add(item);
      }
    }
    return answer;
  }