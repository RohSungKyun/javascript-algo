// 먼저 모든 입국 심사관을 거친다.(입국 심사관이 더 많을 수 있다.)


function solution(n, times) { 
  const sorted = times.sort((a, b) => a-b);
  let start = 1;
  let end = sorted[sorted.length - 1] * n;

  while(start <= end){
    let mid  = Math.floor((start+end)/2);
    let people = times.reduce((acc, time) => acc + (mid/time), 0);
    if (people < n) {
        start = mid + 1;
    } else {
        end = mid-1;
    }
  }
  return start;
}
